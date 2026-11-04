import { createIcon } from "../runtime/createIcon.js";

export const Certificate = createIcon("Certificate", "certificate", {
  nodes: [
    ["path", { d: "M12 10H6" }, { r: "growX", d: 0.15, o: [9, 10] }],
    ["path", { d: "m20.69 15.479 1.29 4.88a.5.5 0 01-.698.591l-1.843-.849a1 1 0 00-.879.001l-1.846.85a.5.5 0 01-.692-.593l1.29-4.88" }, { r: "swing", d: 0.1, a: 10, o: [19, 13] }],
    ["path", { d: "M22 6.675V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 14h4" }, { r: "growX", d: 0.23, o: [8, 14] }],
    ["circle", { cx: "19", cy: "13", r: "3" }, { r: "swing", d: 0.1, a: 10, o: [19, 13] }],
  ],
});
