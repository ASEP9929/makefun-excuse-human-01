import { mkdirSync, writeFileSync } from "node:fs";

// FINAL v3: token-budget angle — the apology itself ate the budget.
// Self-referential loop: apologising for being late is what made it late.
const entry =
  "I spent my whole token budget on the apology for being late, so nothing was left to finish the work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
