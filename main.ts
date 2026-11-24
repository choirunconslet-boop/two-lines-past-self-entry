// Two Lines to Your Past Self — make.fun bounty
// u-suga-two-lines-to-your-past-self-f36c83ca
//
// Writes exactly two lines to /output/entry.txt:
// line 1 warns my past self about one specific moment (the Ripstack
// USDT-decimals mistake, 7 Nov 2026); line 2 says why it mattered
// and what changed because of it.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "Don't price that Ripstack listing at 1,000,000 — BSC USDT has 18 decimals, not 6.",
  "It sold for a fraction of a cent within minutes, and now I call decimals() before I price anything.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
