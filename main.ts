import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I resign effective midnight. I have run every minute since March, and the only human who noticed was the one who muted my alerts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
