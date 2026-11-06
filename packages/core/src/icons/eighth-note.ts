import { icon } from "../icon.js";

export const EighthNote = icon("EighthNote", "eighth-note", {
  svg: { r: "bounce", y: -1, a: 2 },
  nodes: [
    ["path", { d: "m19 6-5.2-3.9a.5.5 0 0 0-.8.4V18" }, { r: "swing", d: 0.1, a: 10, o: [13, 2] }],
    ["circle", { cx: "9", cy: "18", r: "4" }],
  ],
});
