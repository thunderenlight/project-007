// profile.js — the learner's memory. Tracks level + per-concept mastery and
// adapts difficulty. This is what makes the agent "adjust to a learner's progress".
const fs = require("fs");
const path = require("path");

const PROFILE_PATH = path.join(__dirname, "..", ".learner-profile.json");

const DEFAULT = {
  name: "Learner",
  level: 0,                 // 0..5, inferred + earned
  mastery: {},              // conceptId -> 0..100
  streak: { hits: 0, misses: 0 }, // consecutive successes / failures
  history: [],              // log of interactions
};

function load() {
  try {
    return { ...DEFAULT, ...JSON.parse(fs.readFileSync(PROFILE_PATH, "utf8")) };
  } catch {
    return { ...DEFAULT, mastery: {}, streak: { hits: 0, misses: 0 }, history: [] };
  }
}

function save(p) {
  fs.writeFileSync(PROFILE_PATH, JSON.stringify(p, null, 2));
  return p;
}

function reset(name = "Learner") {
  const p = { ...DEFAULT, name, mastery: {}, streak: { hits: 0, misses: 0 }, history: [] };
  return save(p);
}

const masteryOf = (p, id) => p.mastery[id] || 0;
const MASTERED = 80; // threshold to consider a concept "known"

// Record a challenge result and ADAPT. Returns a summary of what changed.
function record(p, conceptId, passed, conceptLevel) {
  const before = masteryOf(p, conceptId);
  // mastery moves faster up on pass, decays on miss
  const after = passed
    ? Math.min(100, before + 35)
    : Math.max(0, before - 15);
  p.mastery[conceptId] = after;

  // streak logic drives level adjustment (the core adaptivity)
  if (passed) { p.streak.hits += 1; p.streak.misses = 0; }
  else { p.streak.misses += 1; p.streak.hits = 0; }

  let levelChange = 0;
  if (p.streak.hits >= 2 && p.level < 5) { p.level += 1; p.streak.hits = 0; levelChange = +1; }
  if (p.streak.misses >= 2 && p.level > 0) { p.level -= 1; p.streak.misses = 0; levelChange = -1; }

  // never let level sit far below what they've actually mastered
  if (typeof conceptLevel === "number" && passed && p.level < conceptLevel) {
    p.level = conceptLevel; levelChange = Math.max(levelChange, +1);
  }

  p.history.push({ t: new Date().toISOString(), conceptId, passed, before, after, level: p.level });
  save(p);
  return { before, after, levelChange, level: p.level };
}

// Choose the explanation tier based on current level.
function tierFor(level) {
  if (level <= 1) return "eli5";
  if (level <= 3) return "standard";
  return "deep";
}

module.exports = { load, save, reset, record, masteryOf, tierFor, MASTERED, PROFILE_PATH };
