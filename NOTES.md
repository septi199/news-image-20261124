# Notes — news-image-20261124

## The image

A newspaper front page ("THE WORLD — TUESDAY 24 NOVEMBER 2026") in
broadsheet form: one full-width lead story above three columns, plus a
market ticker strip. Four stories, each verified against the day's
reporting:

1. **Iran vows to fight the U.S. blockade** — Tehran says it will use
   all its tools against the U.S. naval blockade while Vice President
   Vance and Secretary of State Rubio meet Qatar's prime minister at
   the White House; the UK logs record Iranian attacks in the Strait
   of Hormuz.
2. **Bitcoin below $60,000** — the coin gives back Monday's
   Nvidia-driven spike toward $64,600 and trades near $59,600; November
   spot-ETF outflows reach a record $4.71 billion.
3. **NATO: we will defend space** — Secretary General Rutte warns the
   alliance will defend against threats in space after reports Russia
   is preparing a nuclear-armed satellite; 25 Russian airspace
   violations against NATO members counted in 2026.
4. **Quake 5.6 shakes Nepal** — a magnitude 5.6 earthquake strikes
   Koshi province near the Chinese border.

The image was generated fresh for this entry (1024×1024, JPEG bytes in
`entry.png`, 263,867 bytes — under the 1 MiB cap). All text was checked
against the day's reporting; nothing is invented.

## The program

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(default `/output`). Deterministic: verified by running it twice and
comparing sha256.
