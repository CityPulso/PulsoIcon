import { createIcon } from "../runtime/createIcon.js";

export const Goal = createIcon("Goal", "goal", {
  nodes: [
    ["path", { d: "M12 13V2l8 4-8 4" }, { r: "swing", d: 0.05, a: 10, o: [12, 13] }],
    ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
