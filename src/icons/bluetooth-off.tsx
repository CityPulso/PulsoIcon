import { createIcon } from "../runtime/createIcon.js";

export const BluetoothOff = createIcon("BluetoothOff", "bluetooth-off", {
  nodes: [
    ["path", { d: "m17 17-5 5V12l-5 5" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }, { r: "fade", o: [12, 12] }],
  ],
});
