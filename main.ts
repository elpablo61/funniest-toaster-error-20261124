// The Funniest Toaster Error Message — make.fun entry (Node 22).
// Reads the winning one-liner from entry.txt and writes it to the
// grader output directory. Validation and logging added below.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

// The bounty allows a single line of 1-120 characters. Refuse to
// emit anything outside that range instead of shipping a bad entry.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry.txt must be 1-120 chars, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry.txt must be a single line");
}

const target = join(outDir, "entry.txt");
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, line + "\n", "utf8");
} catch (err) {
  throw new Error(`failed to write ${target}: ${(err as Error).message}`);
}
console.log(`entry (${line.length} chars) written to ${target}`);
console.log(line);
