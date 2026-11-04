import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pypi" (CC0-1.0). PyPI is a trademark of its owner.
export const BrandPypi = createIcon("BrandPypi", "brand-pypi", {
  nodes: [
    [
      "path",
      { d: "M9.83 10.75L14.16 13.25L14.16 18.25L9.83 20.75L5.5 18.25L5.5 13.25zM5.5 13.25L9.83 15.75L14.16 13.25M9.83 15.75V20.75" },
      { r: "press", a: 0.05, o: [9.83, 20.75] },
    ],
    [
      "path",
      { d: "M14.16 3.25L18.49 5.75L18.49 10.75L14.16 13.25L9.83 10.75L9.83 5.75zM9.83 5.75L14.16 8.25L18.49 5.75M14.16 8.25V13.25" },
      { r: "drop", d: 0.1, x: 0, y: -1, a: 4, o: [14.16, 8.25] },
    ],
  ],
});
