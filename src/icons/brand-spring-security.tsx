import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "springsecurity" (CC0-1.0). Spring Security is a trademark of its owner.
export const BrandSpringSecurity = createIcon("BrandSpringSecurity", "brand-spring-security", {
  nodes: [
    ["path", { d: "M5 3h14v8c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M5 7.5h14" }, { r: "draw", d: 0.05 }],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "turn", d: 0.15, a: 60, o: [12, 13.5] }],
    ["path", { d: "M12 13.5v2.5" }, { r: "turn", d: 0.15, a: 60, o: [12, 13.5] }],
  ],
});
