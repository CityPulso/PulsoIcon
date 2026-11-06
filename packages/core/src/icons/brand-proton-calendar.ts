import { icon } from "../icon.js";

// Drawn after Simple Icons "protoncalendar" (CC0-1.0). Proton Calendar is a trademark of its owner.
export const BrandProtonCalendar = icon("BrandProtonCalendar", "brand-proton-calendar", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2.5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 7h10a2 2 0 0 1 2 2v12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15 15h6" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M18 18h.01" }, { r: "pop", d: 0.4, o: [18, 18] }],
  ],
});
