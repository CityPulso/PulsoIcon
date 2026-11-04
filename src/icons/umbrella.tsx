import { createIcon } from "../runtime/createIcon.js";

export const Umbrella = createIcon("Umbrella", "umbrella", {
  nodes: [
    ["path", { d: "M12 13v7a2 2 0 0 0 4 0" }, { r: "sway", d: 0.05, a: 4, o: [12, 13] }],
    ["path", { d: "M12 2v2" }, { r: "swing", a: 8, o: [12, 13] }],
    ["path", { d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" }, { r: "swing", a: 8, o: [12, 13] }],
  ],
});
