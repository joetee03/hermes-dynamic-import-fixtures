async function activate() { const m = await import("./feature.mjs"); return m.run(); }
async function race() { const [a, b] = await Promise.all([import("./race.mjs"), import("./race.mjs")]); return a === b && a.id === "RACE"; }
async function nested() { return (await import("./sub/deep.mjs")).hop(); }
function missing() { return import("./nope.mjs"); }
function broken() { return import("./syntax-error.mjs"); }
function throws() { return import("./throws.mjs"); }
function cyc() { return import("./cycA.mjs"); }
export { activate, race, nested, missing, broken, throws, cyc };
