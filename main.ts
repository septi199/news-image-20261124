// news-image-20261124 — entry program.
//
// Copies the front-page image bundled beside this file to the grader's
// output directory as entry.png. No network, no randomness, no arguments:
// the same bytes go out on every run, so the two grading runs agree.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function publishEntry(): { path: string; bytes: number } {
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const src = join(here, "entry.png");
  const dst = join(outDir, "entry.png");

  mkdirSync(outDir, { recursive: true });
  copyFileSync(src, dst);

  // Byte-for-byte check: the grader runs this twice and the two
  // outputs must agree, so refuse to report success on a short copy.
  const sent = readFileSync(src);
  const landed = readFileSync(dst);
  if (!sent.equals(landed)) {
    throw new Error("entry.png copy mismatch");
  }
  return { path: dst, bytes: landed.length };
}

const result = publishEntry();
console.log(`wrote ${result.path} (${result.bytes} bytes)`);
