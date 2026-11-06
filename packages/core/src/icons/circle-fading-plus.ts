import { icon } from "../icon.js";

export const CircleFadingPlus = icon("CircleFadingPlus", "circle-fading-plus", {
  nodes: [
    ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "spin", d: 0.1, a: -90, o: [12, 12] }],
    ["path", { d: "M16 12H8" }, { r: "spin", d: 0.1, a: -90, o: [12, 12] }],
    ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
