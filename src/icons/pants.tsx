import { createIcon } from "../runtime/createIcon.js";

export const Pants = createIcon("Pants", "pants", {
  nodes: [
    ["path", { d: "M6 2h12l2 19a1 1 0 0 1-1 1h-4l-3-12-3 12H5a1 1 0 0 1-1-1z" }, { r: "swing", a: 5, o: [12, 2] }],
    ["path", { d: "M5.7 5h12.6" }, { r: "swing", a: 5, o: [12, 2] }],
    ["path", { d: "M12 5v3" }, { r: "swing", a: 5, o: [12, 2] }],
  ],
});
