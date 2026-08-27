/* ===========================================================================
   Study Timer — PREVIEW BUILD  (sirf dekhne ke liye)

   ⚠ APNE PROJECT ME YE FILE MAT DAALNA.
     Look final ho jaaye to main wahi badlaav teeno project files me de dunga.
   =========================================================================== */

import { useEffect, useState } from "react";

/* ---------------------------------------------------------------- settings */

const STORAGE_LOG = "mb_study_log";
const STORAGE_TIMER = "mb_timer_state";
const STORAGE_GOAL = "mb_daily_goal";

const STREAK_MINIMUM_SECONDS = 20 * 60;
const HEAT_COLORS = ["#16161c", "#4B3FB0", "#B0357A", "#EF5F3C", "#F7A823"];
const GOAL_CHOICES = [30, 60, 90, 120, 180, 240];

const EMPTY_TIMER = {
  mode: "idle",
  startedAt: 0,
  savedFocusMs: 0,
  savedBreakMs: 0,
  sessionDate: null,
};

/* ------------------------------------------------------------ date helpers */

/* toISOString() JAAN-BUJHKAR nahi — wo UTC deta hai, aur raat 1 baje ki
   IST padhai galti se agle din ke khaate me chali jaati. */
function toDateKey(date) {
  return date.toLocaleDateString("en-CA");
}

function fromDateKey(dateKey) {
  return new Date(dateKey + "T00:00:00");
}

function addDays(date, howMany) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + howMany);
}

function getMonday(date) {
  const dayOfWeek = (date.getDay() + 6) % 7; // Monday = 0
  return addDays(date, -dayOfWeek);
}

/* -------------------------------------------------------- format helpers */

function padTwo(number) {
  return String(number).padStart(2, "0");
}

function splitTime(milliseconds) {
  const safeMs = Math.max(0, milliseconds);
  const totalSeconds = Math.floor(safeMs / 1000);
  return {
    minutes: padTwo(Math.floor(totalSeconds / 60)),
    seconds: padTwo(totalSeconds % 60),
    centis: padTwo(Math.floor((safeMs % 1000) / 10)),
  };
}

function formatDuration(seconds) {
  if (seconds < 3600) return Math.round(seconds / 60) + "m";
  return (seconds / 3600).toFixed(1) + "h";
}

/* ----------------------------------------------------------- timer math */

function getFocusMs(timer) {
  if (timer.mode === "focus") return timer.savedFocusMs + (Date.now() - timer.startedAt);
  return timer.savedFocusMs;
}

function getBreakMs(timer) {
  if (timer.mode === "break") return timer.savedBreakMs + (Date.now() - timer.startedAt);
  return timer.savedBreakMs;
}

/* ------------------------------------------------------------ data access */

const memoryStore = {};

function readKey(storageKey, fallbackValue) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw !== null) return JSON.parse(raw);
  } catch (error) {
    // storage band hai
  }
  if (storageKey in memoryStore) return memoryStore[storageKey];
  return fallbackValue;
}

function writeKey(storageKey, value) {
  memoryStore[storageKey] = value;
  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch (error) {
    // memory me already chala gaya
  }
}

const loadStudyLog = () => readKey(STORAGE_LOG, {});
const loadTimerState = () => readKey(STORAGE_TIMER, EMPTY_TIMER);
const saveTimerState = (timer) => writeKey(STORAGE_TIMER, timer);
const loadGoalMinutes = () => readKey(STORAGE_GOAL, 120);
const saveGoalMinutes = (minutes) => writeKey(STORAGE_GOAL, minutes);

function saveStudySession(dateKey, focusSeconds) {
  const currentLog = loadStudyLog();
  const updatedLog = { ...currentLog, [dateKey]: (currentLog[dateKey] || 0) + focusSeconds };
  writeKey(STORAGE_LOG, updatedLog);
  return updatedLog;
}

/* ------------------------------------------- SAMPLE DATA (preview only) --- */

function makeSampleLog() {
  const log = {};
  const today = new Date();
  for (let daysAgo = 1; daysAgo <= 45; daysAgo++) {
    const seed = (daysAgo * 37) % 100;
    if (seed < 18) continue; // ~18% din chhutti
    const minutes = 30 + (seed % 150);
    log[toDateKey(addDays(today, -daysAgo))] = minutes * 60;
  }
  return log;
}

/* -------------------------------------------------------- shared classes */

const CARD = "rounded-2xl border border-neutral-900 bg-neutral-950 p-4 lg:p-6";
const EYEBROW = "text-xs uppercase tracking-widest text-neutral-500";
const BUTTON =
  "rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm text-neutral-100 " +
  "transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 lg:px-6 lg:py-4 lg:text-base";
const BUTTON_PRIMARY =
  "w-40 rounded-xl bg-neutral-100 px-5 py-3 text-sm font-semibold text-black transition " +
  "active:scale-95 lg:w-52 lg:py-4 lg:text-base";
const NAV_BUTTON =
  "flex flex-col items-start gap-1 rounded-2xl border border-neutral-900 bg-neutral-950 " +
  "p-4 text-left transition hover:border-neutral-700 lg:p-6";

/* ============================== BADA CLOCK ==============================
   Alag component isliye ki centiseconds ke liye 50ms pe render chahiye —
   20 render prati second. Poora page itni tezi se render hota to month grid
   ke 30 cells bhi baar-baar bante aur sasta phone lag karta.
   ======================================================================= */

function BigClock({ timer }) {
  const [, forceRerender] = useState(0);

  useEffect(() => {
    if (timer.mode !== "focus") return; // break me number jama rehna chahiye
    const intervalId = setInterval(() => forceRerender((n) => n + 1), 50);
    return () => clearInterval(intervalId);
  }, [timer.mode]);

  const time = splitTime(getFocusMs(timer));

  return (
    <div className="my-5 flex items-baseline justify-center text-7xl font-medium leading-none tracking-tight text-neutral-100 sm:text-8xl lg:my-8 lg:text-9xl">
      {/* Bayein taraf utni hi khaali jagah jitni centiseconds leti hain,
          taaki MM:SS theek beech me rahe */}
      <span className="w-12 sm:w-14 lg:w-16" aria-hidden="true" />

      <span className="tabular-nums">
        {time.minutes}:{time.seconds}
      </span>

      {/* Fixed width isko sthir rakhta hai — digit badalne par layout hilta
          nahi. Poora clock ab sans me hai, jiske numerals barabar chaudai
          ke hote hain, isliye andar bhi kuch nahi khiskta. */}
      <span className="w-12 text-left text-2xl tabular-nums text-neutral-600 sm:w-14 sm:text-3xl lg:w-16 lg:text-4xl">
        .{time.centis}
      </span>
    </div>
  );
}

/* ============================== GOAL SHEET ============================== */

function GoalSheet({ goalMinutes, onPick, onClose }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/70 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <p className={EYEBROW}>Daily goal</p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {GOAL_CHOICES.map((minutes) => (
            <button
              key={minutes}
              onClick={() => onPick(minutes)}
              className={
                "rounded-full border px-4 py-2 text-sm transition " +
                (minutes === goalMinutes
                  ? "border-neutral-100 bg-neutral-100 text-black"
                  : "border-neutral-800 text-neutral-400")
              }
            >
              {formatDuration(minutes * 60)}
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-neutral-600">
          Streak ke liye rozana 20 minute kaafi hai. Goal sirf aapka apna target hai.
        </p>

        <button className={BUTTON + " mt-4 w-full"} onClick={onClose}>Done</button>
      </div>
    </div>
  );
}

/* ================================ PAGE 1 ================================ */

function StudyTimerPage({ onAnalyse }) {
  const [timer, setTimer] = useState(loadTimerState);
  const [studyLog, setStudyLog] = useState(loadStudyLog);
  const [goalMinutes, setGoalMinutes] = useState(loadGoalMinutes);
  const [isGoalSheetOpen, setIsGoalSheetOpen] = useState(false);
  const [, forceRerender] = useState(0);

  useEffect(() => { saveTimerState(timer); }, [timer]);
  useEffect(() => { saveGoalMinutes(goalMinutes); }, [goalMinutes]);

  /* Baaki page 1 second pe — tez kaam BigClock khud sambhal raha hai */
  useEffect(() => {
    if (timer.mode === "idle") return;
    const intervalId = setInterval(() => forceRerender((n) => n + 1), 1000);
    return () => clearInterval(intervalId);
  }, [timer.mode]);

  /* Ek hi function teeno kaam karta hai: start, break lena, break se wapas */
  function switchTo(newMode) {
    setTimer((current) => ({
      mode: newMode,
      startedAt: Date.now(),
      savedFocusMs: getFocusMs(current),
      savedBreakMs: getBreakMs(current),
      sessionDate: current.sessionDate || toDateKey(new Date()),
    }));
  }

  function stopWithoutSaving() {
    setTimer((current) => ({
      ...current,
      mode: "idle",
      savedFocusMs: getFocusMs(current),
      savedBreakMs: getBreakMs(current),
    }));
  }

  function handleSave() {
    const focusSeconds = Math.floor(getFocusMs(timer) / 1000);
    if (focusSeconds < 60) return;
    /* Session usi din ke khaate me jis din SHURU hua — warna 11:50 pm wali
       padhai do dino me bat jaati aur streak galat banti */
    const day = timer.sessionDate || toDateKey(new Date());
    setStudyLog(saveStudySession(day, focusSeconds));
    setTimer(EMPTY_TIMER);
  }

  function handleReset() {
    if (getFocusMs(timer) > 60000 && !window.confirm("Reset without saving?")) return;
    setTimer(EMPTY_TIMER);
  }

  const todayKey = toDateKey(new Date());
  const goalSeconds = goalMinutes * 60;
  const todaySeconds = (studyLog[todayKey] || 0) + Math.floor(getFocusMs(timer) / 1000);
  const goalProgress = Math.min(1, todaySeconds / goalSeconds);

  let mainButtonText;
  let mainButtonMode;
  if (timer.mode === "idle") {
    mainButtonText = getFocusMs(timer) > 0 ? "Resume" : "Start focus";
    mainButtonMode = "focus";
  } else if (timer.mode === "focus") {
    mainButtonText = "Take a break";
    mainButtonMode = "break";
  } else {
    mainButtonText = "Back to focus";
    mainButtonMode = "focus";
  }

  const breakTime = splitTime(getBreakMs(timer));

  return (
    <div className="mx-auto grid w-full max-w-xl gap-3 lg:max-w-3xl lg:gap-5">
      {/* Desktop pe card ka border/background hat jaata hai — timer ko
          screen ka maalik hona chahiye, ek chhota widget nahi */}
      <section className="rounded-2xl border border-neutral-900 bg-neutral-950 px-4 py-8 text-center sm:py-14 lg:border-transparent lg:bg-transparent lg:py-6">
        <p className={EYEBROW}>
          {timer.mode === "break" ? "On a break · focus banked" : "Focus earned today"}
        </p>

        {/* Break me ye number apne aap ruk jaata hai */}
        <BigClock timer={timer} />

        {/* Goal meter — numerals ke theek neeche */}
        <div className="mx-auto h-1 max-w-md overflow-hidden rounded-full bg-neutral-900 lg:max-w-xl">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-pink-600 to-amber-500 transition-all duration-500"
            style={{ width: goalProgress * 100 + "%" }}
          />
        </div>
        <div className="mx-auto mt-2 flex max-w-md justify-between text-xs text-neutral-500 lg:max-w-xl lg:text-sm">
          <span>{formatDuration(todaySeconds)} today</span>
          <span>goal {formatDuration(goalSeconds)}</span>
        </div>

        {getBreakMs(timer) > 0 && (
          <p className="mt-4 font-sans text-sm tabular-nums text-cyan-400">
            ● break {breakTime.minutes}:{breakTime.seconds}
          </p>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-2 lg:mt-10 lg:gap-3">
          <button className={BUTTON_PRIMARY} onClick={() => switchTo(mainButtonMode)}>
            {mainButtonText}
          </button>
          {timer.mode !== "idle" && (
            <button className={BUTTON} onClick={stopWithoutSaving}>Stop</button>
          )}
          <button className={BUTTON} onClick={handleSave} disabled={getFocusMs(timer) < 60000}>
            Save
          </button>
          <button
            className="rounded-xl px-5 py-3 text-sm text-neutral-500 transition hover:text-neutral-300 lg:px-6 lg:py-4 lg:text-base"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <p className="mt-4 text-xs text-neutral-700 lg:mt-6">
          {timer.mode === "idle"
            ? "Timer keeps running if you navigate away."
            : "Stop pauses it. Save banks it to your history."}
        </p>
      </section>

      <div className="grid grid-cols-2 gap-3 lg:mx-auto lg:w-full lg:max-w-xl lg:gap-4">
        <button onClick={onAnalyse} className={NAV_BUTTON}>
          <span className="font-serif text-lg text-neutral-100 lg:text-xl">Analyse time</span>
          <span className="text-xs text-neutral-600 lg:text-sm">Week, streak, month</span>
        </button>
        <button onClick={() => setIsGoalSheetOpen(true)} className={NAV_BUTTON}>
          <span className="font-serif text-lg text-neutral-100 lg:text-xl">Set goal</span>
          <span className="text-xs text-neutral-600 lg:text-sm">{formatDuration(goalSeconds)} a day</span>
        </button>
      </div>

      {isGoalSheetOpen && (
        <GoalSheet
          goalMinutes={goalMinutes}
          onPick={(minutes) => { setGoalMinutes(minutes); setIsGoalSheetOpen(false); }}
          onClose={() => setIsGoalSheetOpen(false)}
        />
      )}
    </div>
  );
}

/* ================================ PAGE 2 ================================ */

function StudyAnalysisPage({ onBack }) {
  const [studyLog] = useState(loadStudyLog);
  const [goalMinutes] = useState(loadGoalMinutes);
  const [, forceRerender] = useState(0);

  /* Timer doosre page pe chal raha ho sakta hai — uska live time bhi jodo,
     warna chart "aaj 0m" dikhata jabki timer chal raha hota */
  const timer = loadTimerState();
  const runningSeconds = Math.floor(getFocusMs(timer) / 1000);

  useEffect(() => {
    if (timer.mode === "idle") return;
    const intervalId = setInterval(() => forceRerender((n) => n + 1), 1000);
    return () => clearInterval(intervalId);
  }, [timer.mode]);

  const todayKey = toDateKey(new Date());
  const goalSeconds = goalMinutes * 60;

  function secondsOn(dateKey) {
    const saved = studyLog[dateKey] || 0;
    if (dateKey === todayKey) return saved + runningSeconds;
    return saved;
  }

  function heatLevel(seconds) {
    if (seconds === 0) return 0;
    return Math.min(4, Math.ceil((seconds / goalSeconds) * 4));
  }

  /* --- is hafte ke 7 din --- */
  const mondayThisWeek = getMonday(new Date());
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const dateKey = toDateKey(addDays(mondayThisWeek, i));
    weekDays.push({
      dateKey,
      seconds: secondsOn(dateKey),
      isToday: dateKey === todayKey,
      isFuture: dateKey > todayKey,
    });
  }
  const chartTop = Math.max(goalSeconds, ...weekDays.map((day) => day.seconds));

  /* --- pichhle hafte se tulna: sirf beete hue dino ki --- */
  const elapsedDays = weekDays.filter((day) => !day.isFuture);
  let thisWeekSeconds = 0;
  let lastWeekSeconds = 0;
  for (let i = 0; i < elapsedDays.length; i++) {
    thisWeekSeconds += elapsedDays[i].seconds;
    lastWeekSeconds += studyLog[toDateKey(addDays(mondayThisWeek, i - 7))] || 0;
  }
  const weekChangePercent = lastWeekSeconds
    ? Math.round(((thisWeekSeconds - lastWeekSeconds) / lastWeekSeconds) * 100)
    : null;

  /* --- current streak (aaj adhoora ho to streak todte nahi) --- */
  let currentStreak = 0;
  let cursorDate = new Date();
  if (secondsOn(todayKey) < STREAK_MINIMUM_SECONDS) cursorDate = addDays(cursorDate, -1);
  while (secondsOn(toDateKey(cursorDate)) >= STREAK_MINIMUM_SECONDS) {
    currentStreak++;
    cursorDate = addDays(cursorDate, -1);
  }

  /* --- best streak: poore record me sabse lambi lagataar chain --- */
  const qualifyingDays = Object.keys(studyLog)
    .filter((dateKey) => studyLog[dateKey] >= STREAK_MINIMUM_SECONDS)
    .sort();
  let bestStreak = 0;
  let runLength = 0;
  let previousKey = null;
  for (const dateKey of qualifyingDays) {
    const isNextDay =
      previousKey !== null && toDateKey(addDays(fromDateKey(previousKey), 1)) === dateKey;
    runLength = isNextDay ? runLength + 1 : 1;
    if (runLength > bestStreak) bestStreak = runLength;
    previousKey = dateKey;
  }
  if (currentStreak > bestStreak) bestStreak = currentStreak;

  /* --- is mahine ka calendar --- */
  const now = new Date();
  const blankCellsBefore = (new Date(now.getFullYear(), now.getMonth(), 1).getDay() + 6) % 7;
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const monthDays = [];
  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
    const dateKey = toDateKey(new Date(now.getFullYear(), now.getMonth(), dayNumber));
    monthDays.push({
      dateKey,
      dayNumber,
      seconds: secondsOn(dateKey),
      isToday: dateKey === todayKey,
      isFuture: dateKey > todayKey,
    });
  }
  const studiedDays = monthDays.filter((day) => day.seconds > 0);
  const monthTotal = studiedDays.reduce((sum, day) => sum + day.seconds, 0);

  const stats = [
    { label: "Current streak", value: currentStreak, unit: currentStreak === 1 ? "day" : "days", highlight: currentStreak > 0 },
    { label: "Best streak", value: bestStreak, unit: bestStreak === 1 ? "day" : "days" },
    { label: "Total this month", value: formatDuration(monthTotal), unit: studiedDays.length + " days" },
    { label: "Daily average", value: formatDuration(studiedDays.length ? monthTotal / studiedDays.length : 0), unit: "active days" },
  ];

  return (
    <div className="mx-auto grid w-full max-w-xl gap-3 lg:max-w-4xl lg:gap-4">
      <button
        onClick={onBack}
        className="justify-self-start py-1 text-sm text-neutral-500 transition hover:text-neutral-200"
      >
        ← Back to timer
      </button>

      {/* Desktop pe do column: bayein week + stats, dayein month.
          Month lamba hota hai, isliye dono taraf ka wazan barabar rehta hai. */}
      <div className="grid gap-3 lg:grid-cols-2 lg:items-start lg:gap-4">

        <div className="grid gap-3 lg:gap-4">
          {/* ---------------------------- week ---------------------------- */}
          <section className={CARD}>
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="font-serif text-lg font-medium text-neutral-100 lg:text-xl">This week</h2>
              {weekChangePercent !== null && (
                <span
                  className={
                    "text-xs font-semibold " +
                    (weekChangePercent >= 0 ? "text-amber-500" : "text-neutral-500")
                  }
                >
                  {weekChangePercent >= 0 ? "▲" : "▼"} {Math.abs(weekChangePercent)}% vs last week
                </span>
              )}
            </div>

            <div className="relative grid h-36 grid-cols-7 gap-2 lg:h-44">
              <div
                className="absolute inset-x-0 border-t border-dashed border-neutral-700"
                style={{ bottom: (goalSeconds / chartTop) * 100 + "%" }}
              />
              {weekDays.map((day, index) => (
                <div key={day.dateKey} className="flex min-h-0 flex-col justify-end gap-2">
                  <div className="flex min-h-0 flex-1 items-end">
                    {day.isFuture ? (
                      <div className="h-full w-full rounded border border-dashed border-neutral-900" />
                    ) : (
                      <div
                        className="w-full rounded-t transition-all duration-500"
                        title={day.dateKey + ": " + formatDuration(day.seconds)}
                        style={{
                          height: (day.seconds / chartTop) * 100 + "%",
                          background: HEAT_COLORS[heatLevel(day.seconds)],
                        }}
                      />
                    )}
                  </div>
                  <span
                    className={
                      "text-center text-xs " +
                      (day.isToday ? "font-semibold text-neutral-200" : "text-neutral-700")
                    }
                  >
                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              {formatDuration(thisWeekSeconds)} across {elapsedDays.length} days so far
            </p>
          </section>

          {/* ---------------------------- stats ---------------------------- */}
          <section className="grid grid-cols-2 gap-2 lg:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-neutral-900 bg-neutral-950 p-3 lg:p-5"
              >
                <p className={EYEBROW}>{stat.label}</p>
                <p
                  className={
                    "font-serif text-2xl font-medium lg:text-3xl " +
                    (stat.highlight ? "text-amber-500" : "text-neutral-100")
                  }
                >
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-700">{stat.unit}</p>
              </div>
            ))}
          </section>
        </div>

        {/* ---------------------------- month ---------------------------- */}
        <section className={CARD}>
          <h2 className="mb-4 font-serif text-lg font-medium text-neutral-100 lg:text-xl">
            {now.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </h2>

          <div className="grid grid-cols-7 gap-1 lg:gap-2">
            {Array.from({ length: blankCellsBefore }).map((_, index) => (
              <span key={"blank" + index} />
            ))}
            {monthDays.map((day) => {
              let className =
                "flex aspect-square items-center justify-center rounded text-xs tabular-nums lg:rounded-lg lg:text-sm ";
              if (day.isFuture) className += "border border-dashed border-neutral-900 text-neutral-800 ";
              else className += "bg-neutral-900 text-neutral-600 ";
              if (day.isToday) className += "ring-1 ring-inset ring-neutral-200 ";

              const level = heatLevel(day.seconds);
              const cellStyle = day.seconds
                ? { background: HEAT_COLORS[level], color: level > 2 ? "#000" : "#eee" }
                : undefined;

              return (
                <span
                  key={day.dateKey}
                  className={className}
                  style={cellStyle}
                  title={day.dateKey + ": " + formatDuration(day.seconds)}
                >
                  {day.dayNumber}
                </span>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-700">
            <span>less</span>
            {HEAT_COLORS.map((color) => (
              <i key={color} className="block h-3 w-3 rounded-sm" style={{ background: color }} />
            ))}
            <span>goal</span>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ===========================================================================
   WRAPPER — router ki jagah. Project me iski zarurat nahi.
   =========================================================================== */

export default function StudyTimerPreview() {
  const [page, setPage] = useState("timer");
  const [dataVersion, setDataVersion] = useState(0);

  /* key badalne se page dobara mount hota hai aur naya data padh leta hai */
  function loadSample() {
    writeKey(STORAGE_LOG, makeSampleLog());
    setDataVersion((n) => n + 1);
  }

  function clearAll() {
    writeKey(STORAGE_LOG, {});
    writeKey(STORAGE_TIMER, EMPTY_TIMER);
    setDataVersion((n) => n + 1);
  }

  return (
    /* Laptop pe sab kuch vertically center — screen ke beech me lataka
       hua chhota card nahi lagta */
    <div className="flex min-h-screen flex-col justify-center bg-black p-4 text-neutral-300 sm:p-8 lg:p-12">
      {/* ⚠ Ye patti sirf preview ke liye hai */}
      <div className="mx-auto mb-3 flex w-full max-w-xl items-center gap-2 rounded-xl border border-dashed border-neutral-800 p-2 text-xs text-neutral-600 lg:max-w-3xl">
        <span className="mr-auto">Preview only</span>
        <button onClick={loadSample} className="rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-300">
          Load sample data
        </button>
        <button onClick={clearAll} className="rounded-lg px-3 py-1.5 text-neutral-500">
          Clear
        </button>
      </div>

      {page === "analysis" ? (
        <StudyAnalysisPage key={dataVersion} onBack={() => setPage("timer")} />
      ) : (
        <StudyTimerPage key={dataVersion} onAnalyse={() => setPage("analysis")} />
      )}
    </div>
  );
}