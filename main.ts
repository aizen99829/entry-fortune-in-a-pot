// Fortune in a Pot — a single kind, funny fortune for a houseplant.
// Deterministic: no network, no randomness, same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "By spring, a new leaf will unfurl in this window like good news, and your keeper will claim it was all their doing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
