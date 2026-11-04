import { createIcon } from "../runtime/createIcon.js";

export const BluetoothSearching = createIcon("BluetoothSearching", "bluetooth-searching", {
  nodes: [
    ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }, { r: "draw", d: 0.15, o: [21.417, 12] }],
    ["path", { d: "M18 12h.01" }, { r: "pop", d: 0.05, o: [18.005, 12] }],
  ],
});
