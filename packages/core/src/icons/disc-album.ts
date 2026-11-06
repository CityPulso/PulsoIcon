import { icon } from "../icon.js";

export const DiscAlbum = icon("DiscAlbum", "disc-album", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12.005, 12] }],
  ],
});
