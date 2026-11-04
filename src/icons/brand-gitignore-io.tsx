import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gitignoredotio" (CC0-1.0). gitignore.io is a trademark of its owner.
export const BrandGitignoreIo = createIcon("BrandGitignoreIo", "brand-gitignore-io", {
  nodes: [
    ["path", { d: "M3.5 13 5 14.5 3.5 16 2 14.5z" }, { r: "pop", o: [3.5, 14.5] }],
    ["circle", { cx: "10.5", cy: "11", r: "3.5" }, { r: "draw", d: 0.08, o: [10.5, 11] }],
    ["path", { d: "M14 7.5V17a3 3 0 0 1-5.5 1.7" }, { r: "draw", d: 0.18, o: [14, 13] }],
    ["path", { d: "M19.5 7.5V15" }, { r: "draw", d: 0.3, o: [19.5, 11] }],
    ["path", { d: "M19.5 4h.01" }, { r: "pop", d: 0.4, o: [19.5, 4] }],
  ],
});
