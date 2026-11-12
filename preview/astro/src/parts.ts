import { ICON_NAMES } from "pulsoicon-core/names";

/** One gallery page: the icons of one first letter, or one part of them. */
export type Part = { slug: string; letter: string; part: number; parts: number; names: string[] };

// The dev server compiles every icon component a page imports on its first visit; past a few thousand (B has 3,500 brand
// logos) that outlasts Vite's 60 s module timeout, so big letters are split into parts.
const PART_SIZE = 1000;

export const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

export const PARTS: Part[] = LETTERS.flatMap((letter) => {
  const all = ICON_NAMES.filter((n) => n.startsWith(letter));
  const parts = Math.ceil(all.length / PART_SIZE);
  const size = Math.ceil(all.length / parts);
  return Array.from({ length: parts }, (_, i) => ({ slug: i ? `${letter}-${i + 1}` : letter, letter, part: i + 1, parts, names: all.slice(i * size, (i + 1) * size) }));
});

/** "B 2/4" for a part of a split letter, "C" otherwise. */
export const partLabel = (p: Part) => `${p.letter.toUpperCase()}${p.parts > 1 ? ` ${p.part}/${p.parts}` : ""}`;
