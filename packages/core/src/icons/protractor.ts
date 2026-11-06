import { icon } from "../icon.js";

export const Protractor = icon("Protractor", "protractor", {
  nodes: [
    ["path", { d: "M2 17a10 10 0 0 1 20 0Z" }, { r: "press", a: 0.04, o: [12, 17] }],
    ["path", { d: "M8 17a4 4 0 0 1 8 0" }, { r: "fade", o: [12, 15] }],
    ["path", { d: "M12 7v2" }, { r: "pop", d: 0.15, o: [12, 8] }],
    ["path", { d: "m4.93 9.93 1.41 1.41" }, { r: "pop", d: 0.1, o: [5.6, 10.6] }],
    ["path", { d: "m19.07 9.93-1.41 1.41" }, { r: "pop", d: 0.2, o: [18.4, 10.6] }],
  ],
});
