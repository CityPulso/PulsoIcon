import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "steamdeck" (CC0-1.0). Steam Deck is a trademark of its owner.
export const BrandSteamDeck = createIcon("BrandSteamDeck", "brand-steam-deck", {
  nodes: [
    ["circle", { cx: "8", cy: "12", r: "4" }, { r: "pop", o: [8, 12] }],
    ["path", { d: "M11 3a9 9 0 0 1 0 18" }, { r: "draw", d: 0.1 }],
  ],
});
