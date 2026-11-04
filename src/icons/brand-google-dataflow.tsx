import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googledataflow" (CC0-1.0). Google Dataflow is a trademark of its owner.

export const BrandGoogleDataflow = createIcon("BrandGoogleDataflow", "brand-google-dataflow", {
  nodes: [
    ["path", { d: "M7 2.5l10 5M17 2.5l-10 5" }, { r: "draw", o: [12, 5] }],
    ["path", { d: "M12 9.5h.01" }, { r: "pop", d: 0.1, o: [12, 9.5] }],
    ["path", { d: "M7 12h.01M17 12h.01" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M12 14.5h.01" }, { r: "pop", d: 0.3, o: [12, 14.5] }],
    ["path", { d: "M7 21.5l10-5M17 21.5l-10-5" }, { r: "draw", d: 0.35, o: [12, 19] }],
  ],
});
