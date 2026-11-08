/** One loop of the README GIF: the icons play one after another in a wave, and every one is back at rest when it ends. */

/** Gap between two icons starting. */
export const STAGGER_MS = 350;
/** How long each icon holds `play` before it returns to rest (the longest motion is about 1.3 s with its delay). */
export const PLAY_MS = 1400;
/** Time per GIF frame. */
export const FRAME_MS = 40;
/** Icons in the grid. */
export const ICON_COUNT = 12;
/** Loop length: the last icon starts, plays and settles (0.25 s back to rest) before the first one starts again. */
export const LOOP_MS = Math.ceil(((ICON_COUNT - 1) * STAGGER_MS + PLAY_MS + 350) / FRAME_MS) * FRAME_MS;

export function iconPlaying(index: number, timeMs: number): boolean {
  const start = index * STAGGER_MS;
  return timeMs >= start && timeMs < start + PLAY_MS;
}
