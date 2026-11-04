import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "animedotjs" (CC0-1.0). Anime.js is a trademark of its owner.
export const BrandAnimeJs = createIcon("BrandAnimeJs", "brand-anime-js", {
  nodes: [
    ["circle", { cx: "11", cy: "13", r: "8.5" }, { r: "press", a: 0.04, o: [11, 13] }],
    ["circle", { cx: "10", cy: "13.5", r: "2.5" }, { r: "roll", d: 0.05, a: 2, o: [10, 13.5] }],
    ["path", { d: "M12.5 11v5" }, { r: "roll", d: 0.05, a: 2, o: [10, 13.5] }],
    ["path", { d: "M18.5 2.5h3l-1 3h-3z" }, { r: "pop", d: 0.25, o: [19.5, 4] }],
  ],
});
