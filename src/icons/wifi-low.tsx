import { createIcon } from "../runtime/createIcon.js";

export const WifiLow = createIcon("WifiLow", "wifi-low", {
  nodes: [
    ["path", { d: "M12 20h.01" }, { r: "pop", o: [12.005, 20] }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }, { r: "draw", d: 0.1, o: [12, 15.714] }],
  ],
});
