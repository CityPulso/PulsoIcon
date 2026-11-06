import { icon } from "../icon.js";

// Drawn after Simple Icons "hotelsdotcom" (CC0-1.0). Hotels.com is a trademark of its owner.

export const BrandHotelsCom = icon("BrandHotelsCom", "brand-hotels-com", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M7 7h9a1 1 0 0 1 1 1v9" }, { r: "draw" }],
    ["path", { d: "M10 10.5h.01" }, { r: "pop", d: 0.2, o: [10, 10.5] }],
    ["path", { d: "M13.5 10.5h.01" }, { r: "pop", d: 0.3, o: [13.5, 10.5] }],
    ["path", { d: "M13.5 14h.01" }, { r: "pop", d: 0.4, o: [13.5, 14] }],
  ],
});
