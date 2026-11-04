import { createIcon } from "../runtime/createIcon.js";

export const IdCardLanyard = createIcon("IdCardLanyard", "id-card-lanyard", {
  nodes: [
    ["path", { d: "M13.5 8h-3" }, { r: "swing", a: 8, o: [12, 0] }],
    ["path", { d: "m15 2-1 2h3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h3" }, { r: "swing", a: 8, o: [12, 0] }],
    ["path", { d: "M16 22a4 4 0 00-8 0" }, { r: "swing", a: 8, o: [12, 0] }],
    ["path", { d: "m9 2 3 6" }, { r: "fade", o: [10.5, 5] }],
    ["circle", { cx: "12", cy: "15", r: "3" }, { r: "swing", a: 8, o: [12, 0] }],
  ],
});
