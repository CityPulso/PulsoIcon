import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "haveibeenpwned" (BSD-3-Clause). Have I Been Pwned is a trademark of its owner.

export const BrandHaveIBeenPwned = createIcon("BrandHaveIBeenPwned", "brand-have-i-been-pwned", {
  nodes: [
    ["path", { d: "M6 7.5h2.5" }, { r: "pop", o: [7, 7.5] }],
    ["path", { d: "M6 12.5h2.5L7 17" }, { r: "pop", d: 0.08, o: [7, 13] }],
    ["path", { d: "M11.5 12.5H15" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M17.5 12.5H21" }, { r: "draw", d: 0.24 }],
  ],
});
