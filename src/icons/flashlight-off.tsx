import { createIcon } from "../runtime/createIcon.js";

export const FlashlightOff = createIcon("FlashlightOff", "flashlight-off", {
  nodes: [
    ["path", { d: "M11.652 6H18" }, { r: "tilt", a: 8, o: [12, 20] }],
    ["path", { d: "M12 13v1" }, { r: "fade", o: [12, 13.5] }],
    ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" }, { r: "tilt", a: 8, o: [12, 20] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" }, { r: "tilt", a: 8, o: [12, 20] }],
  ],
});
