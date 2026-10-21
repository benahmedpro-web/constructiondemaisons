// Contrôle de num() (src/lib/crm.ts) : une tranche de budget ou de surface ne doit plus être collée en un seul nombre.
// Usage : node scripts/check-num.mjs   (Node 22.6+ lit le TypeScript directement)
import assert from "node:assert/strict";
import { num } from "../src/lib/crm.ts";

const cases = [
  ["250 000 – 350 000 €", 350000],
  ["350 000 – 500 000 €", 500000],
  ["250 000 - 350 000 €", 350000],
  ["Moins de 250 000 €", 250000],
  ["Plus de 500 000 €", 500000],
  ["80 – 120 m²", 120],
  [300000, 300000],
  ["300000", 300000],
  ["", undefined],
  ["à définir", undefined],
  [undefined, undefined],
  [null, undefined],
  [Number.NaN, undefined],
];
for (const [input, expected] of cases) assert.equal(num(input), expected, `num(${JSON.stringify(input)})`);
console.log(`num() : ${cases.length} cas conformes`);
