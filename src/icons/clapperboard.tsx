import { createIcon } from "../runtime/createIcon.js";

export const Clapperboard = createIcon("Clapperboard", "clapperboard", {
  nodes: [
    ["path", { d: "m12.296 3.464 3.02 3.956" }, { r: "turn", a: -14, o: [3, 11] }],
    ["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" }, { r: "turn", a: -14, o: [3, 11] }],
    ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, { r: "press", d: 0.25, a: 0.04, o: [12, 21] }],
    ["path", { d: "m6.18 5.276 3.1 3.899" }, { r: "turn", a: -14, o: [3, 11] }],
  ],
});
