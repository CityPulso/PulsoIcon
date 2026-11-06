import { icon } from "../icon.js";

export const PaperCurl = icon("PaperCurl", "paper-curl", {
  nodes: [
    ["path", { d: "M15 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13l-5 5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M20 17h-3a2 2 0 0 0-2 2v3" }, { r: "wobble", d: 0.1, a: 8, o: [17.5, 19.5] }],
    ["path", { d: "M8 7h8" }, { r: "growX", d: 0.1, o: [8, 7] }],
    ["path", { d: "M8 11h8" }, { r: "growX", d: 0.16, o: [8, 11] }],
    ["path", { d: "M8 15h4" }, { r: "growX", d: 0.22, o: [8, 15] }],
  ],
});
