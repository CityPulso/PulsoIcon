import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "color-wheel" (MIT, Copyright (c) 2021 Luca Burgio).
export const ColorWheel = createIcon("ColorWheel", "color-wheel", {
  nodes: [
    ["path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" }],
    ["path", { d: "M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" }],
    ["path", { d: "M12 2V8" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 16V22" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M2 12H8" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M16 12H22" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4.92896 4.92871L9.1716 9.17135" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14.8284 14.8286L19.071 19.0713" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4.92896 19.0713L9.1716 14.8286" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14.8284 9.17139L19.071 4.92875" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
