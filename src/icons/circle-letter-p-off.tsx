import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterPOff = createIcon("CircleLetterPOff", "circle-letter-p-off", {
  text: true,
  nodes: [
    ["path", { d: "M12 12h1a2 2 0 000-4H9.5a.5.5 0 00-.5.5V9" }, { r: "fade", o: [11.999, 12.001] }],
    ["path", { d: "M15.652 21.31A10 10 0 012.691 8.348" }, { r: "fade", o: [11.999, 12.001] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M4.929 4.929a10 10 0 0116.729 4.483 10 10 0 01-2.588 9.658" }, { r: "fade", o: [11.999, 12.001] }],
    ["path", { d: "M9 14.657V16" }, { r: "fade", o: [11.999, 12.001] }],
  ],
  solid: [
    ["path", { d: "M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" }, { r: "fade", o: [11.999, 12.001] }, "line"],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "fade", o: [11.999, 12.001] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
