#!/usr/bin/env node
// mentor.js — the React Mentor CLI agent.
// Commands:
//   status                      show profile + progress
//   next                        recommend the next concept
//   learn <concept>             explain (tier matched to level) + example + challenge
//   scaffold <concept>          generate a runnable preview + real .jsx to study
//   challenge <concept>         print the challenge only
//   submit <concept> pass|fail  record result; agent ADAPTS difficulty/level
//   assess <level 0-5>          set a starting level (placement)
//   reset [name]                start over
//   map                         print the whole skill tree
const profileLib = require("./profile");
const curriculum = require("./curriculum");
const scaffolder = require("./scaffolder");
const path = require("path");

const { MASTERED } = profileLib;
const bar = (pct, w = 20) => "█".repeat(Math.round((pct / 100) * w)).padEnd(w, "░");
const levelName = (lvl) => curriculum.meta().levels[lvl] || `L${lvl}`;

function header(p) {
  console.log(`\n🧑‍🏫 React Mentor  ·  ${p.name}  ·  Level ${p.level} (${levelName(p.level)})`);
  console.log("─".repeat(56));
}

function cmdStatus(p) {
  header(p);
  const concepts = curriculum.all();
  const mastered = concepts.filter((c) => profileLib.masteryOf(p, c.id) >= MASTERED).length;
  console.log(`Progress: ${mastered}/${concepts.length} concepts mastered`);
  console.log(`Streak: ${p.streak.hits} hits · ${p.streak.misses} misses  (2 in a row shifts your level)\n`);
  concepts.forEach((c) => {
    const m = profileLib.masteryOf(p, c.id);
    const unlocked = curriculum.isUnlocked(c, p, MASTERED);
    const tag = m >= MASTERED ? "✅" : unlocked ? "•" : "🔒";
    console.log(`  ${tag} [L${c.level}] ${c.title.padEnd(28)} ${bar(m)} ${String(m).padStart(3)}%`);
  });
  console.log();
}

function cmdNext(p) {
  header(p);
  const next = curriculum.recommendNext(p, MASTERED);
  if (!next) { console.log("🎉 You've mastered everything in the curriculum. Time to teach someone else!\n"); return; }
  console.log(`👉 Recommended next: ${next.title}  [Level ${next.level}]`);
  console.log(`   Why it matters: ${next.why}`);
  console.log(`\n   Run:  node src/mentor.js learn ${next.id}\n`);
}

function cmdLearn(p, id) {
  const c = curriculum.byId(id);
  if (!c) return console.log(`Unknown concept "${id}". Try: node src/mentor.js map`);
  const tier = profileLib.tierFor(p.level);
  header(p);
  console.log(`📘 ${c.title}   (explaining at "${tier}" depth for Level ${p.level})\n`);
  console.log(`WHY  ${c.why}\n`);
  console.log(`EXPLAIN\n  ${c.explain[tier].replace(/\n/g, "\n  ")}\n`);
  console.log(`SHOW (smallest runnable example)`);
  console.log(indent(c.example) + "\n");
  if (c.predict) console.log(`PREDICT-THEN-RUN  ${c.predict}\n`);
  console.log(`DO (challenge)\n  ${c.challenge.prompt}`);
  console.log(`  Starter:`);
  console.log(indent(c.challenge.starter, 4) + "\n");
  console.log(`CHECK  done = [ ${c.challenge.check.join(" · ")} ]`);
  if (c.misconceptions?.length) console.log(`WATCH OUT  ${c.misconceptions.join("  |  ")}`);
  console.log(`\n  See it live:  node src/mentor.js scaffold ${c.id}`);
  console.log(`  When done:    node src/mentor.js submit ${c.id} pass\n`);
}

function cmdChallenge(p, id) {
  const c = curriculum.byId(id);
  if (!c) return console.log(`Unknown concept "${id}".`);
  header(p);
  console.log(`🎯 Challenge — ${c.title}\n  ${c.challenge.prompt}\n`);
  console.log(`Starter:\n${indent(c.challenge.starter, 2)}\n`);
  console.log(`Done when: ${c.challenge.check.join(" · ")}`);
  console.log(`(Stuck twice? Ask for the solution — the mentor reveals it then.)\n`);
}

function cmdScaffold(p, id) {
  const c = curriculum.byId(id);
  if (!c) return console.log(`Unknown concept "${id}".`);
  const out = scaffolder.scaffold(id);
  header(p);
  console.log(`🛠️  Scaffolded a live example for "${c.title}":`);
  console.log(`   • Preview (open in a browser): ${rel(out.htmlPath)}`);
  console.log(`   • Real React to study:         ${rel(out.jsxPath)}`);
  console.log(`\n   The preview is self-contained (no build/CDN). The .jsx mirrors it in real React.\n`);
}

function cmdSubmit(p, id, result) {
  const c = curriculum.byId(id);
  if (!c) return console.log(`Unknown concept "${id}".`);
  const passed = /^(pass|p|yes|y|true)$/i.test(result || "");
  const r = profileLib.record(p, id, passed, c.level);
  header(p);
  console.log(`${passed ? "✅ Nice!" : "🔁 No worries —"} ${c.title}: mastery ${r.before}% → ${r.after}%`);
  if (r.levelChange > 0) console.log(`⬆️  Level up! You're now Level ${r.level} (${levelName(r.level)}). Raising difficulty.`);
  else if (r.levelChange < 0) console.log(`⬇️  Dropping to Level ${r.level} (${levelName(r.level)}). I'll re-explain more simply.`);
  const next = curriculum.recommendNext(p, MASTERED);
  if (!passed) {
    console.log(`\nLet's try a simpler angle. Re-read:  node src/mentor.js learn ${id}`);
    console.log(`Or ask for the worked solution.`);
  } else if (next) {
    console.log(`\n👉 Up next: ${next.title}  →  node src/mentor.js learn ${next.id}`);
  } else {
    console.log(`\n🎉 Curriculum complete!`);
  }
  console.log();
}

function cmdAssess(p, lvl) {
  const n = Math.max(0, Math.min(5, parseInt(lvl, 10) || 0));
  p.level = n; profileLib.save(p);
  header(p);
  console.log(`Placement set to Level ${n} (${levelName(n)}). I'll calibrate explanations accordingly.`);
  cmdNext(p);
}

function cmdMap() {
  console.log(`\n🗺️  ${curriculum.meta().name} — anchor project: ${curriculum.meta().anchorProject}\n`);
  let lvl = -1;
  curriculum.all().forEach((c) => {
    if (c.level !== lvl) { lvl = c.level; console.log(`\n  Level ${lvl} — ${levelName(lvl)}`); }
    const pre = c.prereqs.length ? `  (needs: ${c.prereqs.join(", ")})` : "";
    console.log(`    • ${c.id.padEnd(24)} ${c.title}${pre}`);
  });
  console.log();
}

function cmdReset(name) {
  const p = profileLib.reset(name || "Learner");
  console.log(`\n♻️  Fresh start for ${p.name}. Level 0.  Run: node src/mentor.js next\n`);
}

// helpers
const indent = (s, n = 2) => s.split("\n").map((l) => " ".repeat(n) + l).join("\n");
const rel = (abs) => path.relative(path.join(__dirname, ".."), abs);

function help() {
  console.log(`
React Mentor — teach + build agent

  node src/mentor.js status
  node src/mentor.js next
  node src/mentor.js learn <concept>
  node src/mentor.js scaffold <concept>
  node src/mentor.js challenge <concept>
  node src/mentor.js submit <concept> pass|fail
  node src/mentor.js assess <0-5>
  node src/mentor.js map
  node src/mentor.js reset [name]
`);
}

function main() {
  const [cmd, a, b] = process.argv.slice(2);
  const p = profileLib.load();
  switch (cmd) {
    case "status": return cmdStatus(p);
    case "next": return cmdNext(p);
    case "learn": return cmdLearn(p, a);
    case "scaffold": return cmdScaffold(p, a);
    case "challenge": return cmdChallenge(p, a);
    case "submit": return cmdSubmit(p, a, b);
    case "assess": return cmdAssess(p, a);
    case "map": return cmdMap();
    case "reset": return cmdReset(a);
    default: return help();
  }
}

main();
