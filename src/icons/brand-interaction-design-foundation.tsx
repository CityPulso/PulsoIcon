import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "interactiondesignfoundation" (CC0-1.0). Interaction Design Foundation is a trademark of its owner.
export const BrandInteractionDesignFoundation = createIcon("BrandInteractionDesignFoundation", "brand-interaction-design-foundation", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 17v-5M12 13.5l-2.5-2M12 13.5l2.5-2" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M7 11.5a5 4.5 0 0 1 10 0c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1z" }, { r: "sway", d: 0.1, a: 6, o: [12, 17] }],
    ["path", { d: "M8.5 17h7" }, { r: "growX", o: [12, 17] }],
  ],
});
