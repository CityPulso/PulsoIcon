import { createIcon } from "../runtime/createIcon.js";

export const LampCeiling = createIcon("LampCeiling", "lamp-ceiling", {
  nodes: [
    ["path", { d: "M12 2v5" }, { r: "fade", o: [12, 4.5] }],
    ["path", { d: "M14.829 15.998a3 3 0 1 1-5.658 0" }, { r: "swing", a: 8, o: [12, 2] }],
    ["path", { d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" }, { r: "swing", a: 8, o: [12, 2] }],
  ],
});
