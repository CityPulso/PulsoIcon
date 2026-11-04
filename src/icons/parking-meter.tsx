import { createIcon } from "../runtime/createIcon.js";

export const ParkingMeter = createIcon("ParkingMeter", "parking-meter", {
  nodes: [
    ["path", { d: "M11 15h2" }, { r: "pop", d: 0.1, o: [12, 14] }],
    ["path", { d: "M12 12v3" }, { r: "pop", d: 0.1, o: [12, 14] }],
    ["path", { d: "M12 19v3" }, { r: "grow", d: 0.15, o: [12, 22] }],
    ["path", { d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" }, { r: "press", a: 0.04, o: [12, 19] }],
    ["path", { d: "M9 9a3 3 0 1 1 6 0" }, { r: "flicker", d: 0.05, o: [12, 7.5] }],
  ],
});
