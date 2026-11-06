import { icon } from "../icon.js";

export const SquareLetterPOff = icon("SquareLetterPOff", "square-letter-p-off", {
  text: true,
  nodes: [
    ["path", { d: "M12 12h1a2 2 0 000-4H9.5a.5.5 0 00-.5.5V9" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M15.343 21H5a2 2 0 01-2-2V8.657" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M3.586 3.586A2 2 0 015 3h14a2 2 0 012 2v14a2 2 0 01-.586 1.414" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M9 14.657V16" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" }, { r: "fade", o: [12, 12] }, "line"],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
