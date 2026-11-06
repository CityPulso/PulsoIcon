import { icon } from "../icon.js";

export const DropletPercent = icon("DropletPercent", "droplet-percent", {
  nodes: [
    ["path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" }, { r: "drop", a: 2, o: [12, 12.5] }],
    ["path", { d: "m14.5 12.5-5 5" }, { r: "draw", d: 0.1, o: [12, 15] }],
    ["path", { d: "M10 13h.01" }, { r: "pop", d: 0.2, o: [10, 13] }],
    ["path", { d: "M14 17h.01" }, { r: "pop", d: 0.25, o: [14, 17] }],
  ],
});
