import { createIcon } from "../runtime/createIcon.js";

export const UmbrellaOff = createIcon("UmbrellaOff", "umbrella-off", {
  nodes: [
    ["path", { d: "M12 13v7a2 2 0 0 0 4 0" }, { r: "swing", a: 8, o: [12, 22] }],
    ["path", { d: "M12 2v2" }, { r: "swing", a: 8, o: [12, 22] }],
    ["path", { d: "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" }, { r: "swing", a: 8, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" }, { r: "swing", a: 8, o: [12, 22] }],
  ],
  solid: [
    ["path", { d: "M12 13v7a2 2 0 0 0 4 0", fill: "none" }, { r: "swing", a: 8, o: [12, 22] }],
    ["path", { d: "M12 2v2", fill: "none" }, { r: "swing", a: 8, o: [12, 22] }],
    ["path", { d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" }, { r: "swing", a: 8, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
