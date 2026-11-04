import { createIcon } from "../runtime/createIcon.js";

export const PlayPause = createIcon("PlayPause", "play-pause", {
  nodes: [
    ["path", { d: "M2 7.66a1.24 1.24 0 0 1 1.865-1.071l7.438 4.338a1.24 1.24 0 0 1 .002 2.144l-7.44 4.34A1.24 1.24 0 0 1 2 16.34z" }, { r: "pop", a: 0.25, o: [6.5, 12] }],
    ["path", { d: "M15 6v12" }, { r: "grow", d: 0.1, o: [15, 18] }],
    ["path", { d: "M20 6v12" }, { r: "grow", d: 0.18, o: [20, 18] }],
  ],
});
