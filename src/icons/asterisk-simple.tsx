import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "asterisk-simple" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AsteriskSimple = createIcon("AsteriskSimple", "asterisk-simple", {
  nodes: [
    ["path", { d: "M12 12v-9" }, { r: "spin", a: 72, o: [12, 12] }],
    ["path", { d: "M12 12l-9 -2.5" }, { r: "spin", a: 72, o: [12, 12] }],
    ["path", { d: "M12 12l9 -2.5" }, { r: "spin", a: 72, o: [12, 12] }],
    ["path", { d: "M12 12l6 8.5" }, { r: "spin", a: 72, o: [12, 12] }],
    ["path", { d: "M12 12l-6 8.5" }, { r: "spin", a: 72, o: [12, 12] }],
  ],
});
