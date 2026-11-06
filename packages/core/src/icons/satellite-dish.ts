import { icon } from "../icon.js";

export const SatelliteDish = icon("SatelliteDish", "satellite-dish", {
  nodes: [
    ["path", { d: "M18 12a6 6 0 00-6-6" }, { r: "draw", d: 0.1, o: [15, 9] }],
    ["path", { d: "M2.824 10.459a8 8 0 0010.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183" }, { r: "turn", a: -14, o: [8, 16] }],
    ["path", { d: "M22 12A10 10 0 0012 2" }, { r: "draw", d: 0.2, o: [17, 7] }],
    ["path", { d: "m9 15 4-4" }, { r: "fade", o: [11, 13] }],
  ],
});
