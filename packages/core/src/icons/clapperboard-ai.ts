import { icon } from "../icon.js";

export const ClapperboardAi = icon("ClapperboardAi", "clapperboard-ai", {
  text: true,
  nodes: [
    ["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" }, { r: "turn", a: -14, o: [3, 11] }],
    ["path", { d: "m12.296 3.464 3.02 3.956" }, { r: "turn", a: -14, o: [3, 11] }],
    ["path", { d: "m6.18 5.276 3.1 3.899" }, { r: "turn", a: -14, o: [3, 11] }],
    ["path", { d: "M21 12v-1H3v8a2 2 0 0 0 2 2h6" }, { r: "press", d: 0.25, a: 0.04, o: [12, 21] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
