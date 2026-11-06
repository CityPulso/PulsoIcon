import { icon } from "../icon.js";

export const Starfish = icon("Starfish", "starfish", {
  nodes: [
    ["path", { d: "M12 2.5Q13.53 10.4 21.51 9.41Q14.47 13.3 17.88 20.59Q12 15.1 6.12 20.59Q9.53 13.3 2.49 9.41Q10.47 10.4 12 2.5Z" }, { r: "wobble", a: 12, o: [12, 12.5] }],
    ["path", { d: "M12 12.5h.01" }, { r: "pop", d: 0.2, o: [12, 12.5] }],
  ],
});
