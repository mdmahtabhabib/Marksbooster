import { useState, useEffect } from "react";

// Aaj ki date ka localStorage key, e.g. "study-Mon Jul 20 2026"
const todayKey = "study-" + new Date().toDateString();

// ms -> "MM:SS", ya ghante ke baad "H:MM:SS"
function format(ms) {
  const totalSec = Math.floor(ms / 1000);
  const hr = Math.floor(totalSec / 3600); // pura ghante
  const min = String(Math.floor(totalSec / 60) % 60).padStart(2, "0"); // 00-59
  const sec = String(totalSec % 60).padStart(2, "0"); // 00-59
  return (hr > 0 ? hr + ":" : "") + min + ":" + sec;
}

// ms -> centiseconds "00" se "99" (1 second ke 100 hisse)
function centi(ms) {
  return String(Math.floor(ms / 10) % 100).padStart(2, "0");
}

// minutes -> "40m" ya ghante ke baad "1h 40m"
function formatMin(mins) {
  const hr = Math.floor(mins / 60); // pura ghante
  const min = mins % 60; // bacha hua minute (0-59)
  return (hr > 0 ? hr + "h " : "") + min + "m";
}

export default function StudyTimer() {
  const [mode, setMode] = useState("idle"); // idle | focus | break
  const [focusMs, setFocusMs] = useState(0); // total padhai ka time (ms)
  const [breakMs, setBreakMs] = useState(0); // total break ka time (ms)
  const [todayMin, setTodayMin] = useState(
    Number(localStorage.getItem(todayKey)) || 0
  );

  // Jab mode focus ya break ho, time badhta rahe.
  // Trick: segment shuru hone ka waqt yaad rakho, aur har 30ms par
  // "abhi - start" jodo. Interval late bhi ho jaye to time galat nahi hota,
  // kyunki hum ginte nahi — asli ghadi se calculate karte hain.
  useEffect(() => {
    if (mode === "idle") return;
    const start = Date.now();
    const base = mode === "focus" ? focusMs : breakMs;
    const id = setInterval(() => {
      const total = base + (Date.now() - start);
      if (mode === "focus") setFocusMs(total);
      else setBreakMs(total);
    }, 30);
    return () => clearInterval(id); // mode badalte hi purana interval band
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  function save() {
    const mins = Math.round(focusMs / 60000);
    const total = todayMin + mins;
    localStorage.setItem(todayKey, total);
    setTodayMin(total);
    reset();
  }

  function reset() {
    setMode("idle");
    setFocusMs(0);
    setBreakMs(0);
  }

  const focusing = mode === "focus";
  const onBreak = mode === "break";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 select-none">
      {/* Status dot + label */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
        <span
          className={
            "w-2 h-2 rounded-full " +
            (focusing
              ? "bg-green-400 animate-pulse"
              : onBreak
              ? "bg-sky-400 animate-pulse"
              : "bg-zinc-600")
          }
        />
        {focusing ? "Focusing" : onBreak ? "On a break" : "Ready to study"}
      </div>

      {/* Bada timer — break me dim ho jata hai aur ruk jata hai,
          kyunki focusMs sirf focus mode me badhta hai */}
      <div className={"font-mono text-7xl font-bold " + (onBreak ? "opacity-40" : "")}>
        {format(focusMs)}
        <span className="text-3xl text-zinc-500">.{centi(focusMs)}</span>
      </div>

      {/* Chhota break timer */}
      {(onBreak || breakMs > 0) && (
        <div className={"font-mono text-sm " + (onBreak ? "text-sky-400" : "text-zinc-600")}>
          break · {format(breakMs)}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        {mode === "idle" && (
          <button
            onClick={() => setMode("focus")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200"
          >
            Start
          </button>
        )}
        {focusing && (
          <button
            onClick={() => setMode("break")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200"
          >
            Break
          </button>
        )}
        {onBreak && (
          <button
            onClick={() => setMode("focus")}
            className="px-8 py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300"
          >
            Resume
          </button>
        )}
        <button
          onClick={save}
          className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500"
        >
          Save
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full text-zinc-500 hover:text-white"
        >
          Reset
        </button>
      </div>

      {/* Aaj ka saved total */}
      <div className="text-xs text-zinc-400">
        Today: <b className="text-white">{formatMin(todayMin)}</b> saved
      </div>
    </div>
  );
}
