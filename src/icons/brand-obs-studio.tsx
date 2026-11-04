import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "obsstudio" (CC0-1.0). OBS Studio is a trademark of its owner.
export const BrandObsStudio = createIcon("BrandObsStudio", "brand-obs-studio", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 12C12 9 13.5 6 16.5 5.5" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M12 12C14.6 13.5 16.45 16.3 15.38 19.15" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M12 12C9.4 13.5 6.05 13.7 4.12 11.35" }, { r: "spin", a: 120, o: [12, 12] }],
  ],
});
