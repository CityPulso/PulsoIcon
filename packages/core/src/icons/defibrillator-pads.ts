import { icon } from "../icon.js";

export const DefibrillatorPads = icon("DefibrillatorPads", "defibrillator-pads", {
  nodes: [
    ["rect", { x: "2", y: "2.5", width: "7", height: "6", rx: "2" }, { r: "shake", a: 0.5, o: [5.5, 5.5] }],
    ["rect", { x: "15", y: "2.5", width: "7", height: "6", rx: "2" }, { r: "shake", a: 0.5, d: 0.1, o: [18.5, 5.5] }],
    ["path", { d: "M5.5 8.5V12a4 4 0 0 0 4 4H12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18.5 8.5V12a4 4 0 0 1-4 4H12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 16v5.5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12.5 4 11 6.5h2L11.5 9" }, { r: "flicker", d: 0.2 }],
  ],
});
