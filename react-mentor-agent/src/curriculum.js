// curriculum.js — loads and queries the skill tree.
const fs = require("fs");
const path = require("path");

const DATA = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "agent", "curriculum.json"), "utf8")
);

const all = () => DATA.concepts;
const byId = (id) => DATA.concepts.find((c) => c.id === id);
const meta = () => DATA.meta;

// A concept is "unlocked" when all prereqs are mastered.
function isUnlocked(concept, profile, MASTERED) {
  return (concept.prereqs || []).every((p) => (profile.mastery[p] || 0) >= MASTERED);
}

// Recommend the next concept: unlocked, not yet mastered, lowest level first,
// biased toward the learner's current level so we don't overwhelm them.
function recommendNext(profile, MASTERED) {
  const candidates = DATA.concepts
    .filter((c) => (profile.mastery[c.id] || 0) < MASTERED)
    .filter((c) => isUnlocked(c, profile, MASTERED))
    // prefer concepts at/just above current level
    .sort((a, b) => {
      const da = Math.abs(a.level - profile.level);
      const db = Math.abs(b.level - profile.level);
      return da - db || a.level - b.level;
    });
  return candidates[0] || null;
}

module.exports = { all, byId, meta, isUnlocked, recommendNext };
