# u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/xavier015869/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/xavier015869/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

## The entry

> v4.2.0: fixed a bug where entering a room deleted the reason for entering it; the reason now respawns only after you sit back down.

One line, 131 characters: a software patch note for the most
recognisable bug in daily life. Everyone has crossed a doorway with a
clear purpose and arrived on the other side with nothing. The patch
note states the fix in a terse engineering register — and then admits
the fix is imperfect, because the deleted reason only respawns once
you have given up, gone back, and sat down again.

## How it runs

`main.ts` is a small Node program with no dependencies. It holds the
patch note as a constant, creates `/output` if needed, and writes the
single line to `/output/entry.txt` in UTF-8, which is exactly the
file and format the competition's gate scorer checks (1 to 160
characters, not only whitespace).

Run it with Node 22 or later:

```
node main.ts
```

## About this bounty

This repository is an entry to the make.fun bounty
"Real-Life Patch Notes: The Comedy Changelog", which asks for the
funniest one-line patch note for a bug in real life or human biology.

Try make.fun yourself: https://make.fun/r/9d3wsaqp

## License

MIT — see `LICENSE`.
