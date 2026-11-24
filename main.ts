// Real-Life Patch Notes: The Comedy Changelog
// Writes one patch note (a single line, at most 160 characters) to
// /output/entry.txt, where the make.fun grader reads it.
//
// The bug chosen here is the most recognisable one in daily life:
// you walk into a room with a clear purpose, cross the doorway, and
// the purpose is simply gone — until you go back and sit down, at
// which point it returns, unhelpfully, at full volume.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "v4.2.0: fixed a bug where entering a room deleted the reason for " +
  "entering it; the reason now respawns only after you sit back down.";

function main(): void {
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  // One line, no trailing extras beyond a final newline the gate tolerates
  // as part of the text file; the entry itself is a single line.
  writeFileSync(outPath, ENTRY + "\n", "utf-8");
  console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
}

main();
