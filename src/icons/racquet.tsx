import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "racquet" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Racquet = createIcon("Racquet", "racquet", {
  nodes: [
    ["circle", { cx: "15", cy: "9", r: "6.5" }, { r: "swing", a: 14, o: [4, 20] }],
    ["path", { d: "M12.5 3v12M17.5 3v12M9 6.5h12M9 11.5h12" }, { r: "swing", a: 14, o: [4, 20] }],
    ["path", { d: "M10.4 13.6 8 16" }, { r: "swing", a: 14, o: [4, 20] }],
    ["path", { d: "M7.29 15.29 3.29 19.29a1 1 0 0 0 1.42 1.42L8.71 16.71z" }, { r: "swing", a: 14, o: [4, 20] }],
  ],
});
