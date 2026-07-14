import { useState, useEffect, useRef } from "react";

// ================= CONFIG =================
const STORAGE_KEY = "mb_study_log"; // format: { "2026-07-14": minutes }

// localStorage safe wrapper — agar browser block kare to memory fallback,
// taaki component kabhi crash na ho
let memoryFallback = {};
const store = {
  get() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return memoryFallback;
    }
  },
  set(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      memoryFallback = data;
    }
  },
};

// Aaj ki date local time me (UTC nahi), e.g. "2026-07-14"
function todayKey() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

// Seconds -> "MM:SS", 1 ghante ke baad "H:MM:SS"
function fmt(totalSec) {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function StudyTimer() {
  const [mode, setMode] = useState("idle");    // idle | focus | break
  const [accFocus, setAccFocus] = useState(0); // bank kiya hua focus (ms)
  const [accBreak, setAccBreak] = useState(0); // bank kiya hua break (ms)
  const [segStart, setSegStart] = useState(null); // current segment kab shuru hua
  const [now, setNow] = useState(Date.now());
  const [todayMin, setTodayMin] = useState(0);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  // Page load par aaj ka saved total dikhao
  useEffect(() => {
    setTodayMin(store.get()[todayKey()] || 0);
  }, []);

  // Timer chalte waqt har 500ms re-render. Time hum timestamps se
  // calculate karte hain (interval count nahi karte), isliye tab
  // background me chala jaye tab bhi time accurate rehta hai.
  useEffect(() => {
    if (mode === "idle") return;
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, [mode]);

  const liveMs = segStart ? Math.max(0, now - segStart) : 0;
  const focusSec = Math.floor((accFocus + (mode === "focus" ? liveMs : 0)) / 1000);
  const breakSec = Math.floor((accBreak + (mode === "break" ? liveMs : 0)) / 1000);

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }

  function start() {
    const t = Date.now();
    setSegStart(t);
    setNow(t);
    setMode("focus");
  }

  function takeBreak() {
    const t = Date.now();
    setAccFocus((a) => a + (t - segStart)); // ab tak ka focus bank karo
    setSegStart(t);
    setNow(t);
    setMode("break");
  }

  function backToFocus() {
    const t = Date.now();
    setAccBreak((a) => a + (t - segStart)); // break ka time bank karo
    setSegStart(t);
    setNow(t);
    setMode("focus");
  }

  function reset() {
    setMode("idle");
    setAccFocus(0);
    setAccBreak(0);
    setSegStart(null);
  }

  function save() {
    if (focusSec < 30) {
      showToast("Focus for at least 30 seconds first");
      return;
    }
    const mins = Math.max(1, Math.round(focusSec / 60));
    const log = store.get();
    const key = todayKey();
    log[key] = (log[key] || 0) + mins;
    // Sirf last 14 din ka data rakho — 7-day chart ke liye kaafi hai
    const dates = Object.keys(log).sort();
    while (dates.length > 14) delete log[dates.shift()];
    store.set(log);
    setTodayMin(log[key]);
    reset();
    showToast(`Saved · +${mins} min 🎉`);
  }

  const focusing = mode === "focus";
  const onBreak = mode === "break";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white select-none">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #a985d1 0%, #e58fae 28%, #f79f78 45%, #8b6cab 62%, #45497c 80%, #1d2340 100%)",
        }}
      />
      {/* Halka dark overlay — white text har device par readable rahe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(32,20,58,0.15) 0%, rgba(16,11,38,0.40) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 py-12">
        {/* Status dot — timer "alive" feel kare */}
        <div
          className="flex items-center gap-2 mb-4 text-xs sm:text-sm tracking-widest uppercase"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
        >
          <span
            className={
              "w-2 h-2 rounded-full " +
              (focusing
                ? "bg-green-400 animate-pulse"
                : onBreak
                ? "bg-sky-400 animate-pulse"
                : "bg-white opacity-50")
            }
          />
          <span className="opacity-90">
            {focusing ? "focusing" : onBreak ? "on a break" : "ready to study"}
          </span>
        </div>

        {/* Earned focus time — break me bhi BADA hi rehta hai (paise ki tarah) */}
        <div
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tabular-nums text-center"
          style={{ textShadow: "0 6px 30px rgba(0,0,0,0.35)", letterSpacing: "-2px" }}
        >
          {fmt(focusSec)}
        </div>
        <div
          className="mt-2 text-xs sm:text-sm tracking-widest uppercase opacity-80"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
        >
          focus earned
        </div>

        {/* Break time — chhota, quiet blue */}
        {(onBreak || breakSec > 0) && (
          <div
            className="mt-3 text-sky-300 text-sm sm:text-base tabular-nums"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            break · {fmt(breakSec)}
          </div>
        )}

        {/* Buttons: Start/Break toggle + Save + Reset */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {mode === "idle" && (
            <button
              onClick={start}
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100"
            >
              Start
            </button>
          )}
          {focusing && (
            <button
              onClick={takeBreak}
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100"
            >
              Break
            </button>
          )}
          {onBreak && (
            <button
              onClick={backToFocus}
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100"
            >
              Focus
            </button>
          )}
          <button
            onClick={save}
            className="px-6 py-3 rounded-full border border-white font-semibold"
            style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}
          >
            Save
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full border font-medium"
            style={{
              borderColor: "rgba(255,255,255,0.55)",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(8px)",
            }}
          >
            Reset
          </button>
        </div>

        {/* Aaj ka saved total — motivation ke liye */}
        <div
          className="mt-6 px-4 py-2 rounded-full text-xs sm:text-sm"
          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
        >
          Today: <span className="font-bold">{todayMin} min</span> saved
        </div>
      </div>

      {/* Toast message */}
      {toast && (
        <div
          className="absolute bottom-8 left-1/2 z-20 px-5 py-2 rounded-full text-sm font-medium"
          style={{
            transform: "translateX(-50%)",
            background: "rgba(18,12,42,0.85)",
            backdropFilter: "blur(6px)",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}