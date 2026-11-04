import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "traefikproxy" (CC0-1.0). Traefik Proxy is a trademark of its owner.

export const BrandTraefikProxy = createIcon("BrandTraefikProxy", "brand-traefik-proxy", {
  nodes: [
    ["path", { d: "M12 3l8 5-8 5-8-5z" }, { r: "float", o: [12, 8] }],
    ["path", { d: "M8 8h4l2.5-1.5" }, { r: "float", o: [12, 8] }],
    ["path", { d: "M15.5 6h.01" }, { r: "float", o: [12, 8] }],
    ["path", { d: "M4 12l8 5 8-5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M4 16l8 5 8-5" }, { r: "draw", d: 0.2 }],
  ],
});
