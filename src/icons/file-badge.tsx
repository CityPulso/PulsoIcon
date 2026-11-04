import { createIcon } from "../runtime/createIcon.js";

export const FileBadge = createIcon("FileBadge", "file-badge", {
  nodes: [
    ["path", { d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    [
      "path",
      { d: "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" },
      { r: "swing", d: 0.1, a: 12, o: [6, 14] },
    ],
    ["circle", { cx: "6", cy: "14", r: "3" }, { r: "swing", d: 0.1, a: 12, o: [6, 14] }],
  ],
});
