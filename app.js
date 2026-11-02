/**
 * EMPIRE OS - Personal Focus & Career Command System
 * Built for 1-Year Transformation: WordPress -> JS & PHP -> GoHighLevel -> Agentic AI
 */

// -------------------------------------------------------------
// 1. DATA INITIALIZATION & LOCAL STORAGE STATE
// -------------------------------------------------------------
const STORAGE_KEY = 'empire_os_data_v1';

// Full 51-video Chai aur Code JavaScript Curriculum
const CHAI_CODE_VIDEOS = [
  { id: 1, title: "JavaScript Introduction & History", tag: "Basics" },
  { id: 2, title: "Environment setup (Node, Codespaces)", tag: "Basics" },
  { id: 3, title: "Variables (let, const, var) and Data types", tag: "Basics" },
  { id: 4, title: "Data type conversion and operations", tag: "Basics" },
  { id: 5, title: "Comparison of datatypes", tag: "Basics" },
  { id: 6, title: "Data types summary (Primitive vs Non-primitive)", tag: "Memory" },
  { id: 7, title: "Stack and Heap memory in JavaScript", tag: "Memory" },
  { id: 8, title: "Strings in JavaScript (modern methods)", tag: "Strings" },
  { id: 9, title: "Numbers and Maths in JS", tag: "Numbers" },
  { id: 10, title: "Date and Time in depth", tag: "DateTime" },
  { id: 11, title: "Arrays in JS (Part 1: push, pop, slice)", tag: "Arrays" },
  { id: 12, title: "Arrays in JS (Part 2: spread, concat, flat)", tag: "Arrays" },
  { id: 13, title: "Objects in depth (Part 1: literals, symbols)", tag: "Objects" },
  { id: 14, title: "Objects in depth (Part 2: singleton, assign)", tag: "Objects" },
  { id: 15, title: "Objects de-structure and JSON API intro", tag: "Objects" },
  { id: 16, title: "Functions and parameters in JS", tag: "Functions" },
  { id: 17, title: "Functions with objects and array (rest operator)", tag: "Functions" },
  { id: 18, title: "Global and Local scope in JS", tag: "Scope" },
  { id: 19, title: "Scope level and mini hoisting", tag: "Scope" },
  { id: 20, title: "This keyword and Arrow function in JS", tag: "Arrow" },
  { id: 21, title: "Immediately Invoked Function Expressions (IIFE)", tag: "IIFE" },
  { id: 22, title: "How JavaScript Executes Code + Call Stack", tag: "Execution" },
  { id: 23, title: "Control flow in JS (if, else, switch, truthy)", tag: "Control" },
  { id: 24, title: "Loops/Iterations (for loop with break/continue)", tag: "Loops" },
  { id: 25, title: "High Order Array loops (for of, for in, map)", tag: "Loops" },
  // Remaining 26 videos
  { id: 26, title: "Filter, map and reduce in JavaScript", tag: "HighOrder" },
  { id: 27, title: "All DOM selectors (NodeList vs HTMLCollection)", tag: "DOM" },
  { id: 28, title: "How to create a new element in DOM", tag: "DOM" },
  { id: 29, title: "Edit and remove elements in DOM", tag: "DOM" },
  { id: 30, title: "Projects on DOM: Color Changer Project", tag: "Project" },
  { id: 31, title: "Projects on DOM: BMI Calculator", tag: "Project" },
  { id: 32, title: "Projects on DOM: Digital Clock", tag: "Project" },
  { id: 33, title: "Projects on DOM: Guess the Number Game", tag: "Project" },
  { id: 34, title: "Events in JavaScript (event bubbling, capture)", tag: "Events" },
  { id: 35, title: "Async JavaScript fundamentals & Event Loop", tag: "Async" },
  { id: 36, title: "Async JS Projects: Unlimited Colors generator", tag: "Project" },
  { id: 37, title: "Async JS Projects: Keyboard key press checker", tag: "Project" },
  { id: 38, title: "API request and XMLHttpRequest (V8 engine)", tag: "API" },
  { id: 39, title: "Promises in depth (resolve, reject, chaining)", tag: "Promises" },
  { id: 40, title: "Async/Await with Fetch API & Error handling", tag: "Fetch" },
  { id: 41, title: "Object Oriented in JavaScript (OOP) overview", tag: "OOP" },
  { id: 42, title: "Magic of Prototype in JavaScript", tag: "Prototypes" },
  { id: 43, title: "Call and this in JavaScript with code example", tag: "This/Call" },
  { id: 44, title: "Class constructor and static in JS", tag: "Classes" },
  { id: 45, title: "Inheritance and super in JS classes", tag: "Classes" },
  { id: 46, title: "Bind in JavaScript with real-world project", tag: "Bind" },
  { id: 47, title: "Now you know Objects: Math.PI property descriptor", tag: "Advanced" },
  { id: 48, title: "Getter and Setter (old vs modern approach)", tag: "Classes" },
  { id: 49, title: "Lexical scoping and Closure in JavaScript", tag: "Closures" },
  { id: 50, title: "Interview questions: Array unpack, spread & pack", tag: "Interview" },
  { id: 51, title: "Final Summary: How to master React/Fullstack next", tag: "Roadmap" }
];

// Initial default state
const DEFAULT_STATE = {
  jsVideosCompleted: Array.from({ length: 25 }, (_, i) => i + 1), // 1 to 25 done
  empireXP: 1250,
  todayFocusMinutes: 0,
  lastFocusDate: new Date().toDateString(),
  checkpoints: [
    { id: 1, text: "Chai aur Code: Video 26 (Filter, Map, Reduce)", done: false },
    { id: 2, text: "Send 3 Upwork proposals for WP speed optimization", done: false },
    { id: 3, text: "Write 1 practice script with JS DOM manipulation", done: false }
  ],
  outreach: {
    upwork: 0,
    dms: 0,
    portfolio: 2
  },
  clientsLog: [],
  skillJournal: "",
  recheckIntervalMinutes: 20
};

// Load or initialize state
let appState = (function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // reset today's minutes if new day
      if (parsed.lastFocusDate !== new Date().toDateString()) {
        parsed.todayFocusMinutes = 0;
        parsed.outreach.upwork = 0;
        parsed.outreach.dms = 0;
        parsed.lastFocusDate = new Date().toDateString();
      }
      return { ...DEFAULT_STATE, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load state from localStorage:", e);
  }
  return { ...DEFAULT_STATE };
})();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

// -------------------------------------------------------------
// 2. WEBAUDIO SOUND ENGINE (100% Offline Synthesizer)
// -------------------------------------------------------------
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Crisp notification chime (Zen bell tone)
function playZenChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(587.33, now); // D5
  osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.15); // A5

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 2.6);
}

// Level Up / Success fanfare
function playSuccessFanfare() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startTime = ctx.currentTime + (idx * 0.12);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.65);
  });
}

// Ambient Focus Sound Synthesizer (Brown Noise generator)
let ambientNode = null;
let ambientGain = null;
let isAmbientPlaying = false;

function toggleAmbientSound() {
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (isAmbientPlaying) {
    if (ambientGain) {
      ambientGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      setTimeout(() => {
        if (ambientNode) ambientNode.disconnect();
        ambientNode = null;
      }, 500);
    }
    isAmbientPlaying = false;
    return false;
  } else {
    // Generate 5 seconds of brown noise buffer and loop it
    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Gain boost
    }

    ambientNode = ctx.createBufferSource();
    ambientNode.buffer = buffer;
    ambientNode.loop = true;

    // Gentle low-pass filter for cozy rumble
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);

    ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
    ambientGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.2);

    ambientNode.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);

    ambientNode.start(0);
    isAmbientPlaying = true;
    return true;
  }
}

// -------------------------------------------------------------
// 3. REALTIME ROUTINE ENGINE (Mon-Fri Night Shift vs Sat-Sun)
// -------------------------------------------------------------
function calculateRoutineStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const isWeekend = (day === 0 || day === 6);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeVal = hours + (minutes / 60);

  let state = {
    title: "",
    badgeColor: "bg-indigo-500",
    description: "",
    isGoldenHour: false,
    mode: isWeekend ? "WEEKEND" : "WEEKDAY"
  };

  if (isWeekend) {
    state.title = "⚡ Weekend Empire Sprint (10h Target)";
    state.badgeColor = "bg-amber-400";
    state.description = "Full day dedicated to your career: JS projects, GHL automations & high-ticket outreach.";
  } else {
    // Weekday: Mon - Fri
    // 6:00 PM (18.0) to 4:30 AM (4.5): Office
    // 4:30 AM (4.5) to 6:00 AM (6.0): Gym
    // 6:00 AM (6.0) to 7:00 AM (7.0): Commute & Wind-down
    // 7:00 AM (7.0) to 10:00 AM (10.0): 3-HOUR GOLDEN HOURS!
    // 10:00 AM (10.0) to 5:00 PM (17.0): Sleep
    // 5:00 PM (17.0) to 6:00 PM (18.0): Prep & Commute to Office
    if (timeVal >= 18.0 || timeVal < 4.5) {
      state.title = "🏢 Office Night Shift (6 PM – 4:30 AM)";
      state.badgeColor = "bg-slate-400";
      state.description = "Perform your office duties, protect mental energy. The 7:00 AM window is coming.";
    } else if (timeVal >= 4.5 && timeVal < 6.0) {
      state.title = "🏋️ Gym & Physical Energy (4:30 AM – 6:00 AM)";
      state.badgeColor = "bg-teal-400";
      state.description = "Recharge the body. High physical stamina makes deep programming feel effortless.";
    } else if (timeVal >= 6.0 && timeVal < 7.0) {
      state.title = "🚿 Commute, Shower & Breakfast (6:00 AM – 7:00 AM)";
      state.badgeColor = "bg-blue-400";
      state.description = "Wind down from gym, grab water/coffee, get your workspace ready for the 3-hour sprint.";
    } else if (timeVal >= 7.0 && timeVal < 10.0) {
      state.title = "👑 GOLDEN EMPIRE HOURS (7:00 AM – 10:00 AM)";
      state.badgeColor = "bg-emerald-400";
      state.isGoldenHour = true;
      state.description = "YOUR 3-HOUR WINDOW: No social media. Chai aur Code + Upwork proposals. Level up!";
    } else if (timeVal >= 10.0 && timeVal < 17.0) {
      state.title = "🌙 Deep Recovery Sleep (10:00 AM – 5:00 PM)";
      state.badgeColor = "bg-indigo-400";
      state.description = "7 hours of solid sleep. Your brain consolidates JavaScript concepts during sleep.";
    } else {
      state.title = "☕ Wakeup & Prep (5:00 PM – 6:00 PM)";
      state.badgeColor = "bg-amber-400";
      state.description = "Healthy meal, review today's notes, head to office.";
    }
  }

  return state;
}

// -------------------------------------------------------------
// 4. FOCUS TIMER & ACCOUNTABILITY CHECK RE-CHECK ENGINE
// -------------------------------------------------------------
let timerInterval = null;
let timerTotalSeconds = 45 * 60;
let timerRemainingSeconds = 45 * 60;
let isTimerRunning = false;
let sessionSecondsAccumulated = 0;
let accountabilityNextCheck = 20 * 60; // seconds

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  const ring = document.getElementById('timerProgressRing');
  const label = document.getElementById('timerStateLabel');

  if (display) display.textContent = formatTime(timerRemainingSeconds);

  // SVG Progress Ring (circumference ~ 750)
  if (ring) {
    const circumference = 2 * Math.PI * (140 * 0.44 * 2.5); // Approx ~ 750
    const progress = (timerTotalSeconds - timerRemainingSeconds) / timerTotalSeconds;
    const offset = 750 - (progress * 750);
    ring.style.strokeDashoffset = offset;
  }

  if (label) {
    if (!isTimerRunning && timerRemainingSeconds === timerTotalSeconds) {
      label.textContent = "READY TO ENTER FLOW";
      label.className = "text-xs font-mono uppercase tracking-widest text-slate-400 mt-2";
    } else if (isTimerRunning) {
      label.textContent = "IN DEEP FOCUS";
      label.className = "text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mt-2 animate-pulse";
    } else {
      label.textContent = "TIMER PAUSED";
      label.className = "text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mt-2";
    }
  }
}

function startTimer() {
  if (isTimerRunning) return;

  const checkpointInput = document.getElementById('inputCheckpoint');
  if (checkpointInput && !checkpointInput.value.trim()) {
    checkpointInput.value = "Chai aur Code JavaScript Sprint";
  }

  getAudioContext(); // Unlock audio on user click
  isTimerRunning = true;
  document.getElementById('btnStartPauseText').textContent = "Pause Session";
  const icon = document.querySelector('#btnStartPauseTimer i');
  if (icon) icon.setAttribute('data-lucide', 'pause');
  lucide.createIcons();

  timerInterval = setInterval(() => {
    if (timerRemainingSeconds > 0) {
      timerRemainingSeconds--;
      sessionSecondsAccumulated++;
      updateTimerDisplay();

      // Check accountability interval
      const intervalMins = parseInt(document.getElementById('selectRecheckInterval').value, 10);
      if (intervalMins > 0) {
        if (sessionSecondsAccumulated > 0 && sessionSecondsAccumulated % (intervalMins * 60) === 0) {
          triggerAccountabilityCheck();
        }
      }
    } else {
      completeTimer();
    }
  }, 1000);
}

function pauseTimer() {
  if (!isTimerRunning) return;
  clearInterval(timerInterval);
  timerInterval = null;
  isTimerRunning = false;
  document.getElementById('btnStartPauseText').textContent = "Resume Session";
  const icon = document.querySelector('#btnStartPauseTimer i');
  if (icon) icon.setAttribute('data-lucide', 'play');
  lucide.createIcons();
  updateTimerDisplay();
}

function resetTimer(seconds = null) {
  pauseTimer();
  if (seconds !== null) {
    timerTotalSeconds = seconds;
    timerRemainingSeconds = seconds;
  } else {
    timerRemainingSeconds = timerTotalSeconds;
  }
  sessionSecondsAccumulated = 0;
  document.getElementById('btnStartPauseText').textContent = "Start Focus Session";
  updateTimerDisplay();
}

function completeTimer() {
  pauseTimer();
  playSuccessFanfare();

  // Add focus minutes to state
  const completedMins = Math.round(timerTotalSeconds / 60);
  appState.todayFocusMinutes += completedMins;
  appState.empireXP += (completedMins * 2); // 2 XP per minute
  saveState();
  renderAppMetrics();

  // Modal notification or alert
  alert(`🔥 Session Complete! You logged ${completedMins} minutes of high-value focus (+${completedMins * 2} XP)!`);
  resetTimer(timerTotalSeconds);
}

// -------------------------------------------------------------
// 5. ACCOUNTABILITY PULSE ("Seeing You / Rechecking")
// -------------------------------------------------------------
function triggerAccountabilityCheck() {
  playZenChime();

  const checkpointText = document.getElementById('inputCheckpoint').value || "Your Current Task";
  document.getElementById('modalCheckTarget').textContent = checkpointText;
  document.getElementById('modalAccountability').classList.remove('hidden');

  // Pause timer momentarily so user can respond
  pauseTimer();
}

function closeAccountabilityModal() {
  document.getElementById('modalAccountability').classList.add('hidden');
}

// -------------------------------------------------------------
// 6. ANTI-FAZOOL CIRCUIT BREAKER LOGIC
// -------------------------------------------------------------
let breatheStepInterval = null;

function openAntiFazoolModal() {
  playZenChime();
  document.getElementById('modalAntiFazool').classList.remove('hidden');

  // 4-7-8 Breathing animation text loop
  const textEl = document.getElementById('breathingActionText');
  let step = 0;
  
  function updateBreath() {
    if (step === 0) {
      textEl.textContent = "INHALE (4s)";
      textEl.className = "text-xs font-mono font-bold text-indigo-300 tracking-widest uppercase";
      setTimeout(updateBreath, 4000);
      step = 1;
    } else if (step === 1) {
      textEl.textContent = "HOLD (7s)";
      textEl.className = "text-xs font-mono font-bold text-amber-300 tracking-widest uppercase";
      setTimeout(updateBreath, 7000);
      step = 2;
    } else {
      textEl.textContent = "EXHALE (8s)";
      textEl.className = "text-xs font-mono font-bold text-emerald-300 tracking-widest uppercase";
      setTimeout(updateBreath, 8000);
      step = 0;
    }
  }
  updateBreath();
}

function closeAntiFazoolModal() {
  document.getElementById('modalAntiFazool').classList.add('hidden');
}

// -------------------------------------------------------------
// 7. RENDER UI FUNCTIONS
// -------------------------------------------------------------

function renderAppMetrics() {
  // Stats
  document.getElementById('todayFocusMinutes').textContent = `${appState.todayFocusMinutes} min`;
  document.getElementById('empireXP').textContent = `${appState.empireXP.toLocaleString()} XP`;
  document.getElementById('jsVideosCount').textContent = `${appState.jsVideosCompleted.length}/51`;

  // Chai aur Code Progress
  const doneCount = appState.jsVideosCompleted.length;
  const percent = Math.round((doneCount / 51) * 100);
  document.getElementById('jsProgressPercent').textContent = `${percent}% Completed`;
  document.getElementById('jsProgressBar').style.width = `${percent}%`;
  document.getElementById('jsDoneDisplay').textContent = doneCount;
  document.getElementById('jsLeftDisplay').textContent = `${51 - doneCount} videos`;

  // Up Next Video
  const nextVideo = CHAI_CODE_VIDEOS.find(v => !appState.jsVideosCompleted.includes(v.id));
  if (nextVideo) {
    document.getElementById('nextVideoTitle').textContent = `Video #${nextVideo.id}: ${nextVideo.title}`;
  } else {
    document.getElementById('nextVideoTitle').textContent = `🎉 ALL 51 CHAI AUR CODE VIDEOS COMPLETED!`;
  }

  // Client Outreach Metrics
  document.getElementById('metric-upwork').textContent = appState.outreach.upwork;
  document.getElementById('metric-dms').textContent = appState.outreach.dms;
  document.getElementById('metric-portfolio').textContent = appState.outreach.portfolio;
  const totalOutreachToday = appState.outreach.upwork + appState.outreach.dms;
  document.getElementById('outreachScore').textContent = `${totalOutreachToday} / 5 Today`;

  // Journal
  const journalEl = document.getElementById('skillUpgradeJournal');
  if (journalEl && !journalEl.value) {
    journalEl.value = appState.skillJournal || "";
  }
}

function renderCheckpoints() {
  const listEl = document.getElementById('checkpointsList');
  if (!listEl) return;

  listEl.innerHTML = '';
  const completedCount = appState.checkpoints.filter(c => c.done).length;
  document.getElementById('checkpointRatio').textContent = `${completedCount}/${appState.checkpoints.length} Done`;

  appState.checkpoints.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `flex items-center justify-between p-2.5 rounded-xl border text-xs transition ${
      item.done 
        ? 'bg-slate-950/60 border-slate-800 text-slate-500 line-through' 
        : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
    }`;

    div.innerHTML = `
      <div class="flex items-center gap-2.5 overflow-hidden flex-1 cursor-pointer">
        <input type="checkbox" ${item.done ? 'checked' : ''} class="task-checkbox rounded border-slate-700 text-indigo-600 focus:ring-0">
        <span class="truncate">${item.text}</span>
      </div>
      <button class="delete-task-btn text-slate-500 hover:text-rose-400 p-1 transition" title="Delete">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
      </button>
    `;

    // Toggle Check
    div.querySelector('.task-checkbox').addEventListener('change', (e) => {
      appState.checkpoints[index].done = e.target.checked;
      if (e.target.checked) {
        appState.empireXP += 25;
        playZenChime();
      }
      saveState();
      renderCheckpoints();
      renderAppMetrics();
    });

    // Delete
    div.querySelector('.delete-task-btn').addEventListener('click', () => {
      appState.checkpoints.splice(index, 1);
      saveState();
      renderCheckpoints();
    });

    listEl.appendChild(div);
  });
  lucide.createIcons();
}

function renderJsRoadmapGrid() {
  const container = document.getElementById('jsVideoListGrid');
  if (!container) return;

  container.innerHTML = '';
  CHAI_CODE_VIDEOS.forEach((video) => {
    const isDone = appState.jsVideosCompleted.includes(video.id);
    const card = document.createElement('div');
    card.className = `p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition ${
      isDone 
        ? 'bg-emerald-950/30 border-emerald-900/50 text-slate-300' 
        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
    }`;

    card.innerHTML = `
      <div class="flex items-center gap-2.5 overflow-hidden flex-1">
        <span class="w-6 h-6 rounded-lg font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
          isDone ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
        }">
          ${video.id}
        </span>
        <div class="truncate">
          <div class="font-medium text-slate-200 truncate">${video.title}</div>
          <span class="text-[10px] text-slate-500 font-mono">${video.tag}</span>
        </div>
      </div>
      <div class="ml-2 shrink-0">
        ${isDone ? '<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>' : '<i data-lucide="circle" class="w-4 h-4 text-slate-600"></i>'}
      </div>
    `;

    card.addEventListener('click', () => {
      if (isDone) {
        appState.jsVideosCompleted = appState.jsVideosCompleted.filter(id => id !== video.id);
      } else {
        appState.jsVideosCompleted.push(video.id);
        appState.empireXP += 50;
        playZenChime();
      }
      saveState();
      renderAppMetrics();
      renderJsRoadmapGrid();
    });

    container.appendChild(card);
  });
  lucide.createIcons();
}

function renderScheduleTimeline(mode = "WEEKDAY") {
  const container = document.getElementById('scheduleTimelineContainer');
  if (!container) return;

  const weekdaySchedule = [
    { time: "06:00 PM – 04:30 AM", title: "🏢 Office Night Shift (10.5 Hours)", tag: "Office", desc: "Execute professional tasks, stay sharp, protect mental bandwidth.", color: "border-slate-700 bg-slate-950" },
    { time: "04:30 AM – 06:00 AM", title: "🏋️ Gym & Physical Energy (1.5 Hours)", tag: "Health", desc: "Heavy lifting or cardio. Endorphins wake up your cognitive faculties.", color: "border-teal-800/60 bg-teal-950/20" },
    { time: "06:00 AM – 07:00 AM", title: "🚿 Commute, Shower & Healthy Fuel (1 Hour)", tag: "Transition", desc: "High protein meal, big bottle of water, prepare terminal & VS Code.", color: "border-blue-800/60 bg-blue-950/20" },
    { 
      time: "07:00 AM – 10:00 AM", 
      title: "👑 THE GOLDEN 3-HOUR EMPIRE SPRINT", 
      tag: "EMPIRE FOCUS", 
      desc: "7:00-8:15 AM: Chai aur Code JS & code practice. | 8:15-8:30 AM: Hydration break. | 8:30-9:30 AM: Real WP Client outreach/proposals. | 9:30-10:00 AM: Review & wind down.", 
      color: "border-emerald-500/80 bg-emerald-950/30 glow-emerald" 
    },
    { time: "10:00 AM – 05:00 PM", title: "🌙 Deep Recovery Sleep (7 Solid Hours)", tag: "Recovery", desc: "Pitch dark room. Sleep allows JavaScript syntax to solidify in your brain.", color: "border-indigo-900/60 bg-indigo-950/20" },
    { time: "05:00 PM – 06:00 PM", title: "☕ Wake Up & Commute (1 Hour)", tag: "Prep", desc: "Review 1 flashcard/note, travel to office with winner mindset.", color: "border-slate-800 bg-slate-950" }
  ];

  const weekendSchedule = [
    { time: "Sprint 1: 09:00 AM – 11:30 AM", title: "☕ JavaScript & PHP Deep Project Coding (2.5h)", tag: "Code Mastery", desc: "Build hands-on JS projects from scratch (DOM games, API fetch apps, custom PHP functions).", color: "border-indigo-500/60 bg-indigo-950/30" },
    { time: "Sprint 2: 12:00 PM – 02:30 PM", title: "💼 WordPress Real Client Acquisition (2.5h)", tag: "Client Empire", desc: "Send 5 custom Upwork proposals, polish portfolio demos, follow up with business owners.", color: "border-emerald-500/60 bg-emerald-950/30" },
    { time: "Sprint 3: 03:30 PM – 06:00 PM", title: "⚡ GoHighLevel (GHL) Systems & Automation (2.5h)", tag: "GHL Agency", desc: "Explore GHL snapshots, sub-account setup, automated lead-capture funnels, and workflows.", color: "border-amber-500/60 bg-amber-950/30" },
    { time: "Sprint 4: 07:00 PM – 09:30 PM", title: "🤖 Agentic AI & Modern Tools Exploration (2.5h)", tag: "Agentic AI", desc: "Study how AI autonomous agents work, prompt engineering, LLM API calls, and automation tools.", color: "border-rose-500/60 bg-rose-950/30" },
  ];

  const items = (mode === "WEEKDAY") ? weekdaySchedule : weekendSchedule;

  container.innerHTML = items.map((item, i) => `
    <div class="border rounded-2xl p-4 sm:p-5 transition ${item.color}">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
        <span class="text-xs font-mono font-bold text-slate-300">${item.time}</span>
        <span class="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 font-bold">
          ${item.tag}
        </span>
      </div>
      <h4 class="font-display font-bold text-sm sm:text-base text-white">${item.title}</h4>
      <p class="text-xs text-slate-400 mt-1 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// 8. EVENT LISTENERS & WIRING
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Update live status immediately and every 30 seconds
  function refreshRoutineStatus() {
    const routine = calculateRoutineStatus();
    const badgeEl = document.getElementById('liveShiftBadge');
    const textEl = document.getElementById('liveShiftText');
    const bannerEl = document.getElementById('routineTimeNotice');

    if (textEl) textEl.textContent = routine.title;
    if (bannerEl) bannerEl.textContent = `${routine.title} — ${routine.description}`;
    
    // Update active dot color
    const dot = badgeEl ? badgeEl.querySelector('span:first-child') : null;
    if (dot) {
      dot.className = `w-2 h-2 rounded-full ${routine.badgeColor} animate-ping`;
    }
  }
  refreshRoutineStatus();
  setInterval(refreshRoutineStatus, 30000);

  // Initial renders
  renderAppMetrics();
  renderCheckpoints();
  renderJsRoadmapGrid();
  renderScheduleTimeline("WEEKDAY");
  updateTimerDisplay();

  // Navigation Tabs (Desktop & Mobile)
  const tabButtons = document.querySelectorAll('.nav-tab, .mobile-nav-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update Desktop tabs
      document.querySelectorAll('.nav-tab').forEach(b => {
        if (b.getAttribute('data-tab') === targetTab) {
          b.className = "nav-tab active flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all bg-indigo-600 text-white shadow-md shadow-indigo-600/30";
        } else {
          b.className = "nav-tab flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80";
        }
      });

      // Update Mobile tabs
      document.querySelectorAll('.mobile-nav-btn').forEach(b => {
        if (b.getAttribute('data-tab') === targetTab) {
          b.classList.add('text-indigo-400');
          b.classList.remove('text-slate-400');
        } else {
          b.classList.remove('text-indigo-400');
          b.classList.add('text-slate-400');
        }
      });

      // Show target content
      document.querySelectorAll('.tab-content').forEach(sec => {
        if (sec.id === `tab-${targetTab}`) {
          sec.classList.remove('hidden');
          sec.classList.add('block');
        } else {
          sec.classList.add('hidden');
          sec.classList.remove('block');
        }
      });
      lucide.createIcons();
    });
  });

  // Timer Presets
  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.timer-preset-btn').forEach(b => {
        b.classList.remove('active', 'bg-indigo-600/30', 'text-indigo-300', 'font-bold');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-indigo-600/30', 'text-indigo-300', 'font-bold');
      const mins = parseInt(btn.getAttribute('data-minutes'), 10);
      resetTimer(mins * 60);
    });
  });

  // Start / Pause Timer Button
  document.getElementById('btnStartPauseTimer').addEventListener('click', () => {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  // Reset Timer Button
  document.getElementById('btnResetTimer').addEventListener('click', () => {
    resetTimer();
  });

  // Complete Checkpoint Early Button
  document.getElementById('btnCompleteCheckpointEarly').addEventListener('click', () => {
    completeTimer();
  });

  // Ambient Focus Sound Toggle
  document.getElementById('btnAmbientToggle').addEventListener('click', () => {
    const isPlaying = toggleAmbientSound();
    const label = document.getElementById('ambientStatusText');
    if (label) {
      label.textContent = isPlaying ? "Sound: Brown Noise" : "Sound: Off";
      label.className = isPlaying ? "hidden md:inline text-[11px] font-mono text-emerald-400 font-bold" : "hidden md:inline text-[11px] font-mono";
    }
  });

  // Anti-Fazool Circuit Breaker Modal
  document.getElementById('btnAntiFazool').addEventListener('click', openAntiFazoolModal);
  document.getElementById('btnCloseAntiFazool').addEventListener('click', closeAntiFazoolModal);
  document.getElementById('btnDismissAntiFazool').addEventListener('click', closeAntiFazoolModal);
  document.getElementById('btnKickstart5Min').addEventListener('click', () => {
    closeAntiFazoolModal();
    // Switch to Timer tab
    document.querySelector('[data-tab="timer"]').click();
    // Trigger 5-minute kickstart
    document.getElementById('inputCheckpoint').value = "5-Min Kickstart: Read 1 article / Write 5 lines of JS";
    resetTimer(5 * 60);
    startTimer();
  });

  // Accountability Modal Buttons
  document.getElementById('btnCheckInZone').addEventListener('click', () => {
    closeAccountabilityModal();
    appState.empireXP += 10;
    saveState();
    renderAppMetrics();
    startTimer(); // Resume
  });

  document.getElementById('btnCheckDone').addEventListener('click', () => {
    closeAccountabilityModal();
    completeTimer();
  });

  document.getElementById('btnCheckDistracted').addEventListener('click', () => {
    closeAccountabilityModal();
    openAntiFazoolModal();
  });

  // Chai aur Code Quick Card Buttons
  document.getElementById('btnMarkNextJsDone').addEventListener('click', () => {
    const nextVideo = CHAI_CODE_VIDEOS.find(v => !appState.jsVideosCompleted.includes(v.id));
    if (nextVideo) {
      appState.jsVideosCompleted.push(nextVideo.id);
      appState.empireXP += 50;
      playSuccessFanfare();
      saveState();
      renderAppMetrics();
      renderJsRoadmapGrid();
    }
  });

  document.getElementById('btnOpenJsRoadmap').addEventListener('click', () => {
    document.querySelector('[data-tab="roadmap"]').click();
  });

  // Checkpoint Task Addition
  const addTask = () => {
    const input = document.getElementById('inputNewTask');
    const val = input.value.trim();
    if (val) {
      appState.checkpoints.push({ id: Date.now(), text: val, done: false });
      input.value = '';
      saveState();
      renderCheckpoints();
    }
  };
  document.getElementById('btnAddTask').addEventListener('click', addTask);
  document.getElementById('inputNewTask').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  // Schedule View Mode Toggle
  document.getElementById('btnViewWeekday').addEventListener('click', (e) => {
    e.target.className = "px-4 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white transition shadow-sm";
    document.getElementById('btnViewWeekend').className = "px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition";
    renderScheduleTimeline("WEEKDAY");
  });

  document.getElementById('btnViewWeekend').addEventListener('click', (e) => {
    e.target.className = "px-4 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white transition shadow-sm";
    document.getElementById('btnViewWeekday').className = "px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition";
    renderScheduleTimeline("WEEKEND");
  });

  // Client Acquisition Counters
  document.querySelectorAll('.client-count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const metric = btn.getAttribute('data-metric');
      const delta = parseInt(btn.getAttribute('data-delta'), 10);
      if (appState.outreach[metric] !== undefined) {
        appState.outreach[metric] = Math.max(0, appState.outreach[metric] + delta);
        if (delta > 0) appState.empireXP += 20;
        saveState();
        renderAppMetrics();
      }
    });
  });

  // Add Prospect Lead
  document.getElementById('btnAddClientLead').addEventListener('click', () => {
    const name = prompt("Enter Prospect / Client / Job Title (e.g. 'US Dentist WP redesign on Upwork'):");
    if (name) {
      appState.clientsLog.unshift({ name, date: new Date().toLocaleDateString(), status: "Proposal Sent" });
      saveState();
      renderClientsLog();
    }
  });

  function renderClientsLog() {
    const container = document.getElementById('clientsLeadList');
    if (!container) return;
    if (appState.clientsLog.length === 0) {
      container.innerHTML = `
        <div class="text-xs text-slate-500 py-3 text-center border border-dashed border-slate-800 rounded-xl">
          No active prospect logged yet. Click "+ Add Prospect" when you send a proposal.
        </div>
      `;
      return;
    }
    container.innerHTML = appState.clientsLog.map((lead, idx) => `
      <div class="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs">
        <div>
          <strong class="text-slate-200 block">${lead.name}</strong>
          <span class="text-[10px] text-slate-500 font-mono">${lead.date}</span>
        </div>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/40">
          ${lead.status}
        </span>
      </div>
    `).join('');
  }
  renderClientsLog();

  // Save Skill Journal
  document.getElementById('btnSaveJournal').addEventListener('click', () => {
    const text = document.getElementById('skillUpgradeJournal').value;
    appState.skillJournal = text;
    appState.empireXP += 30;
    saveState();
    playZenChime();
    alert("✨ Skill Upgrade note saved to your Empire records!");
  });

  // Settings & Data Sync Modal
  document.getElementById('btnSettingsModal').addEventListener('click', () => {
    document.getElementById('modalSettings').classList.remove('hidden');
  });
  document.getElementById('btnCloseSettings').addEventListener('click', () => {
    document.getElementById('modalSettings').classList.add('hidden');
  });

  // Audio test
  document.getElementById('btnTestAudioChime').addEventListener('click', () => {
    playZenChime();
  });

  // Export JSON
  document.getElementById('btnExportData').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `empire_os_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
  });

  // Import JSON
  document.getElementById('btnTriggerImport').addEventListener('click', () => {
    document.getElementById('importFileInput').click();
  });
  document.getElementById('importFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        appState = { ...DEFAULT_STATE, ...imported };
        saveState();
        renderAppMetrics();
        renderCheckpoints();
        renderJsRoadmapGrid();
        alert("✅ Data successfully imported! Your Empire OS is in sync.");
        document.getElementById('modalSettings').classList.add('hidden');
      } catch (err) {
        alert("Error parsing backup JSON file: " + err.message);
      }
    };
    reader.readAsText(file);
  });

  // Initialize all icons
  lucide.createIcons();
});

