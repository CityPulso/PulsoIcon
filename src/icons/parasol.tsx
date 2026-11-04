import { createIcon } from "../runtime/createIcon.js";

export const Parasol = createIcon("Parasol", "parasol", {
  nodes: [
    ["path", { d: "M12.5 11.134 18.196 21" }, { r: "sway", d: 0.05, a: 4, o: [15, 21] }],
    ["path", { d: "M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413" }, { r: "swing", a: 8, o: [15, 21] }],
    ["path", { d: "M21 21H3" }, { r: "fade", o: [12, 21] }],
  ],
});
