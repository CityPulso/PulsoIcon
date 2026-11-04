import { createIcon } from "../runtime/createIcon.js";

export const Signpost = createIcon("Signpost", "signpost", {
  nodes: [
    ["path", { d: "M12 13v8" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M12 3v3" }, { r: "press", a: 0.03, o: [12, 21] }],
    [
      "path",
      {
        d: "M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z",
      },
      { r: "swing", a: 8, o: [12, 9.5] },
    ],
  ],
});
