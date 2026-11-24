// The Funniest Toaster Error Message — make.fun entry.
// Copies the winning one-liner to /output/entry.txt for the grader.
import { copyFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.txt", import.meta.url), `${outDir}/entry.txt`);
console.log("entry written to", `${outDir}/entry.txt`);
