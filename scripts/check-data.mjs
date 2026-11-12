// Fails the build when a line of the companion piece breaks the rules:
// 1. every entry has a page citation to Daly or Somotan;
// 2. every phrase inside curly quotation marks appears word for word in the reading it cites.
// The two article texts are read from the local project folder and are NOT part of this repository.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import * as D from "../src/data.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(here, "../../../Archive/Build/review/sources");
const files = { Daly: path.join(SRC, "Daly_2023_text.txt"), Somotan: path.join(SRC, "Somotan_2025_text.txt") };

// letters and digits only, lower case: survives line-break hyphens, split words, page markers' spacing, quote styles
const squash = (t) =>
  t.normalize("NFKC").replace(/­/g, "").replace(/\[p\. \d+\]/g, " ").replace(/=== PDF page \d+ ===/g, " ")
    .replace(/Downloaded from \S+ by [^\n]*? on \d{2} \w+ \d{4}/g, " ").toLowerCase().replace(/[^a-z0-9]/g, "");

const texts = {};
for (const [k, f] of Object.entries(files)) if (existsSync(f)) texts[k] = squash(readFileSync(f, "utf8"));
const haveTexts = Object.keys(texts).length === 2;

const problems = [];
let quotes = 0, entries = 0;
function check(where, text, cite) {
  entries++;
  if (!cite || !/^(Daly|Somotan) \d/.test(cite)) problems.push(`${where}: missing or malformed cite "${cite}"`);
  const author = (cite || "").split(" ")[0];
  for (const m of (text || "").matchAll(/“([^”]+)”/g)) {
    quotes++;
    const q = squash(m[1]);
    if (haveTexts && !texts[author]?.includes(q)) problems.push(`${where}: quote not found in ${author}: “${m[1]}”`);
  }
}
const walk = (obj, where) => {
  if (Array.isArray(obj)) return obj.forEach((x, i) => walk(x, `${where}[${i}]`));
  if (obj && typeof obj === "object") {
    if ("cite" in obj) check(where, [obj.text, obj.quote].filter(Boolean).join(" "), obj.cite);
    for (const [k, v] of Object.entries(obj)) if (typeof v === "object") walk(v, `${where}.${k}`);
  }
};
for (const [name, val] of Object.entries(D)) if (typeof val === "object") walk(val, name);
// the three Brown v. Miller conditions carry one shared cite
check("RULE.conditions", D.RULE.conditions.join(" "), D.RULE.conditionsCite);

if (!haveTexts) console.warn("check-data: reading texts not found, quotes not verified (cites still checked)");
if (problems.length) {
  console.error(`check-data: ${problems.length} problem(s)\n` + problems.join("\n"));
  process.exit(1);
}
console.log(`check-data: ${entries} entries, ${quotes} quotations, all cited${haveTexts ? " and found in the readings" : ""}.`);
