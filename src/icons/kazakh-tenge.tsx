import { createIcon } from "../runtime/createIcon.js";

export const KazakhTenge = createIcon("KazakhTenge", "kazakh-tenge", {
  nodes: [
    ["path", { d: "M12 8v12" }, { r: "grow", d: 0.16, o: [12, 8] }],
    ["path", { d: "M6 4h12" }, { r: "growX", o: [12, 4] }],
    ["path", { d: "M6 8h12" }, { r: "growX", d: 0.08, o: [12, 8] }],
  ],
});
