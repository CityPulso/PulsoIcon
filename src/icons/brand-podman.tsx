import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "podman" (CC0-1.0). Podman is a trademark of its owner.

export const BrandPodman = createIcon("BrandPodman", "brand-podman", {
  nodes: [
    ["path", { d: "M8 3h8l5 9-5 9H8l-5-9z" }],
    ["path", { d: "M8 16v-2.5a4 4 0 0 1 8 0V16" }, { r: "float", d: 0.05, o: [12, 14] }],
    ["path", { d: "M10.5 12.5h.01M13.5 12.5h.01" }, { r: "float", d: 0.05, o: [12, 14] }],
    ["path", { d: "M6 16.5h12" }, { r: "sway", a: 4, o: [12, 16.5] }],
  ],
});
