import { icon } from "../icon.js";

export const Podium = icon("Podium", "podium", {
  nodes: [
    ["path", { d: "M12 6V2h-1" }, { r: "float", d: 0.05, a: 1.5, o: [11.5, 4] }],
    ["path", { d: "M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
