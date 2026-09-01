// scaffolder.js — the "builder" half of the agent.
// Generates a minimal, RUNNABLE, self-contained HTML example for a concept so
// the learner can SEE it immediately (no npm, no CDN — works in any sandbox),
// plus a matching commented .jsx snippet that mirrors the real React version.
const fs = require("fs");
const path = require("path");
const curriculum = require("./curriculum");

const WORKSPACE = path.join(__dirname, "..", "workspace");

// A tiny h() helper embedded in every generated preview (same idea as our
// self-contained standalone.html — plain JS "components" that mirror React).
const H_HELPER = `
  function h(tag, props = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (k === "className") el.className = v;
      else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === "value") el.value = v; else if (k === "checked") el.checked = v;
      else el.setAttribute(k, v);
    }
    kids.flat().forEach(c => { if (c==null||c===false) return;
      el.appendChild(typeof c === "object" ? c : document.createTextNode(String(c))); });
    return el;
  }`;

const STYLE = `
  body{font-family:system-ui,Segoe UI,Roboto,sans-serif;background:#0f172a;color:#e2e8f0;margin:0;padding:32px;}
  .wrap{max-width:640px;margin:0 auto;} h1{font-size:1.3rem;} .muted{color:#94a3b8;}
  .card{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:14px;margin:8px 0;}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;}
  .kpi-value{font-size:1.8rem;font-weight:800;} .kpi-label{color:#94a3b8;font-size:.85rem;}
  button{background:#6366f1;color:#fff;border:0;border-radius:8px;padding:8px 12px;cursor:pointer;margin:2px;}
  input{background:#0f172a;color:#e2e8f0;border:1px solid #334155;border-radius:8px;padding:8px;}
  li{list-style:none;background:#0f172a;border:1px solid #334155;border-radius:8px;padding:8px;margin:4px 0;display:flex;gap:8px;align-items:center;}
  li span{flex:1;} .done span{text-decoration:line-through;color:#94a3b8;}
  .badge{background:#6366f1;border-radius:6px;padding:2px 8px;font-size:.8rem;margin:2px;display:inline-block;}`;

// Per-concept preview body (plain JS mounting into #root). Kept intentionally
// tiny so the learner sees ONE idea proven.
const PREVIEWS = {
  components: `
    function Badge(text){ return h("span",{className:"badge"}, text); }
    root.appendChild(h("h1",{},"Components: one function, many bricks"));
    root.appendChild(h("div",{}, Badge("New"), Badge("New"), Badge("New")));`,
  props: `
    function KpiCard(p){ return h("div",{className:"card"},
      h("div",{},p.icon), h("div",{className:"kpi-value"},p.value), h("div",{className:"kpi-label"},p.label)); }
    root.appendChild(h("h1",{},"Props: same component, different inputs"));
    root.appendChild(h("div",{className:"grid"},
      KpiCard({icon:"🟡",value:"9",label:"Open"}),
      KpiCard({icon:"✅",value:"15",label:"Done"})));`,
  "children-composition": `
    function Card(child){ return h("div",{className:"card"}, child); }
    root.appendChild(h("h1",{},"Children: one Card wraps anything"));
    root.appendChild(Card(h("h2",{},"A heading")));
    root.appendChild(Card(h("ul",{}, h("li",{}, h("span",{},"A list item")))));`,
  "lists-keys": `
    const KPIS=[{id:"a",icon:"🟡",value:"9",label:"Open"},{id:"b",icon:"✅",value:"15",label:"Done"},{id:"c",icon:"📈",value:"62%",label:"Rate"}];
    function KpiCard(p){ return h("div",{className:"card"},h("div",{},p.icon),h("div",{className:"kpi-value"},p.value),h("div",{className:"kpi-label"},p.label)); }
    root.appendChild(h("h1",{},"Lists: .map data -> components"));
    root.appendChild(h("div",{className:"grid"}, KPIS.map(KpiCard)));`,
  usestate: `
    let count=0;
    function render(){
      root.replaceChildren(
        h("h1",{},"useState: memory that re-renders"),
        h("div",{className:"card"},
          h("button",{onClick:()=>{count=Math.max(0,count-1);render();}},"−"),
          h("span",{style:"margin:0 12px"}, "Count: "+count),
          h("button",{onClick:()=>{count++;render();}},"+")));
    }
    render();`,
  "events-forms": `
    let text="";
    function render(){
      const input=h("input",{value:text,placeholder:"type here"});
      input.addEventListener("input",e=>{text=e.target.value;render();});
      root.replaceChildren(h("h1",{},"Controlled input + live count"),
        h("div",{className:"card"}, input, h("p",{className:"muted"}, text.length+" chars")));
      input.focus();
    }
    render();`,
  "lifting-state": `
    let tasks=[{id:1,text:"State lives in the parent",done:true}];
    function render(){
      const input=h("input",{placeholder:"add task"});
      const add=()=>{ if(input.value.trim()){ tasks=[...tasks,{id:Date.now(),text:input.value.trim(),done:false}]; render(); } };
      root.replaceChildren(h("h1",{},"State down, events up"),
        h("div",{className:"card"},
          input, h("button",{onClick:add},"Add"),
          h("ul",{}, tasks.map(t=>h("li",{className:t.done?"done":""},
            h("input",{type:"checkbox",checked:t.done,onChange:()=>{t.done=!t.done;render();}}),
            h("span",{},t.text))))));
    }
    render();`,
  "data-separation": `
    // DATA lives apart from the view:
    const KPIS=[{id:"open",icon:"🟡",value:"9",label:"Open",delta:-12},{id:"done",icon:"✅",value:"15",label:"Done",delta:20}];
    function KpiCard(p){ const up=p.delta>=0;
      return h("div",{className:"card"}, h("div",{},p.icon),
        h("div",{className:"kpi-value"},p.value), h("div",{className:"kpi-label"},p.label),
        h("div",{className:"muted"}, (up?"▲ ":"▼ ")+Math.abs(p.delta)+"%")); }
    root.appendChild(h("h1",{},"Data-driven: add data, not markup"));
    root.appendChild(h("div",{className:"grid"}, KPIS.map(KpiCard)));`,
  "derived-conditional": `
    const tasks=[{id:1,text:"A",done:true},{id:2,text:"B",done:false},{id:3,text:"C",done:false}];
    const remaining=tasks.filter(t=>!t.done).length;
    root.appendChild(h("h1",{},"Derived + conditional rendering"));
    root.appendChild(tasks.length===0 ? h("p",{},"All clear ✨")
      : h("div",{className:"card"}, h("ul",{}, tasks.map(t=>h("li",{className:t.done?"done":""}, h("span",{},t.text)))),
          h("p",{className:"muted"}, remaining+" of "+tasks.length+" remaining")));`,
  useeffect: `
    // We simulate an effect: after render, update the document title.
    let remaining=3;
    function render(){
      root.replaceChildren(h("h1",{},"useEffect: run after render"),
        h("div",{className:"card"}, h("p",{}, "Open tasks: "+remaining),
          h("button",{onClick:()=>{remaining=Math.max(0,remaining-1);render();}},"Complete one")));
      document.title = remaining+" open — (this is the 'effect')";
    }
    render();`,
  "localstorage-persistence": `
    const KEY="mentor.demo.tasks";
    let tasks=JSON.parse(localStorage.getItem(KEY)||'[{"id":1,"text":"Refresh me — I persist!","done":false}]');
    function persist(){ localStorage.setItem(KEY, JSON.stringify(tasks)); }
    function render(){
      const input=h("input",{placeholder:"add + refresh page"});
      const add=()=>{ if(input.value.trim()){ tasks=[...tasks,{id:Date.now(),text:input.value.trim(),done:false}]; persist(); render(); } };
      root.replaceChildren(h("h1",{},"Persistence via localStorage"),
        h("div",{className:"card"}, input, h("button",{onClick:add},"Add"),
          h("ul",{}, tasks.map(t=>h("li",{}, h("span",{},t.text))))));
    }
    render();`,
  "custom-hooks": `
    // A "hook" as a reusable factory of behavior (mirrors useToggle):
    function makeToggle(init){ let on=init; return { get:()=>on, toggle:()=>{on=!on;} }; }
    const t=makeToggle(false);
    function render(){
      root.replaceChildren(h("h1",{},"Custom hooks: package reusable logic"),
        h("div",{className:"card"}, h("p",{}, "Panel is "+(t.get()?"OPEN":"closed")),
          h("button",{onClick:()=>{t.toggle();render();}},"Toggle")));
    }
    render();`,
};

function previewHtml(concept) {
  const body = PREVIEWS[concept.id] || `root.appendChild(h("p",{},"(preview coming soon for ${concept.id})"));`;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${concept.title} — live preview</title>
<style>${STYLE}</style></head>
<body><div class="wrap"><div id="root"></div>
<p class="muted">Concept: <b>${concept.title}</b> · self-contained preview (no CDN/build). Open the .jsx next to it to see the real React.</p>
</div>
<script>
${H_HELPER}
const root = document.getElementById("root");
${body}
</script></body></html>`;
}

// The real React snippet the learner should study in VS Code.
function reactSnippet(concept) {
  return `// ${concept.title} — real React (study this in VS Code)
// Why: ${concept.why}
// Idiomatic example:
${concept.example}

/* Challenge:
 * ${concept.challenge.prompt}
 * Starter:
${concept.challenge.starter.split("\n").map(l => " * " + l).join("\n")}
 */
`;
}

function scaffold(conceptId) {
  const concept = curriculum.byId(conceptId);
  if (!concept) throw new Error(`Unknown concept: ${conceptId}`);
  const dir = path.join(WORKSPACE, concept.id);
  fs.mkdirSync(dir, { recursive: true });
  const htmlPath = path.join(dir, "preview.html");
  const jsxPath = path.join(dir, `${concept.id}.jsx`);
  fs.writeFileSync(htmlPath, previewHtml(concept));
  fs.writeFileSync(jsxPath, reactSnippet(concept));
  return { dir, htmlPath, jsxPath };
}

module.exports = { scaffold, WORKSPACE, previewHtml, reactSnippet };
