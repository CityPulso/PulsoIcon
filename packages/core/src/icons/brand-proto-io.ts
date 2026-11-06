import { icon } from "../icon.js";

// Drawn after Simple Icons "protodotio" (CC0-1.0). Proto.io is a trademark of its owner.
export const BrandProtoIo = icon("BrandProtoIo", "brand-proto-io", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 5.5c1.8 2 2.5 4.2 2.5 6.5v4h-5v-4c0-2.3.7-4.5 2.5-6.5z" }, { r: "float", a: 2, o: [12, 12] }],
    ["path", { d: "M9.5 13l-1.5 2v2h1.5M14.5 13l1.5 2v2h-1.5" }, { r: "float", a: 2, o: [12, 12] }],
    ["path", { d: "M12 18.5v1" }, { r: "flicker", d: 0.1, o: [12, 19] }],
  ],
});
