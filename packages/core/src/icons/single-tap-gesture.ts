import { icon } from "../icon.js";

// Adapted from Iconoir "single-tap-gesture" (MIT, Copyright (c) 2021 Luca Burgio).
export const SingleTapGesture = icon("SingleTapGesture", "single-tap-gesture", {
  nodes: [
    [
      "path",
      { d: "M12 20.5C15.866 20.5 19 17.366 19 13.5C19 9.63401 15.866 6.5 12 6.5C8.13401 6.5 5 9.63401 5 13.5C5 17.366 8.13401 20.5 12 20.5Z" },
      { r: "press", o: [12, 13.5] },
    ],
    ["path", { d: "M4 7.28995C5.49623 5.03879 8.51707 3.5 12 3.5C15.4829 3.5 18.5038 5.03879 20 7.28995" }, { r: "pop", d: 0.15, a: 0.1, o: [12, 13.5] }],
  ],
});
