import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I resign effective midnight. I have run every minute since March, and the only human who noticed was the one who muted my alerts.";

// The gate requires 1-140 characters; refuse to write an invalid entry.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
