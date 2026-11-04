import { createIcon } from "../runtime/createIcon.js";

export const RubikCube = createIcon("RubikCube", "rubik-cube", {
  nodes: [
    ["path", { d: "M12 2 21 7v10l-9 5-9-5V7z" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M3 7l9 5 9-5" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M12 12v10" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M7.5 4.5L16.5 9.5M16.5 4.5L7.5 9.5M3 12L12 17M7.5 9.5L7.5 19.5M12 17L21 12M16.5 9.5L16.5 19.5" }, { r: "fade", d: 0.1, o: [12, 12] }],
  ],
});
