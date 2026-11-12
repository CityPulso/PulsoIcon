import { chromium } from "playwright-core";
const b = await chromium.launch();
for (const [name, port, path] of [["react",10212,"/"],["vue",10213,"/"],["svelte",10214,"/"],["solid",10215,"/"],["preact",10216,"/"],["angular",10217,"/"],["astro",10218,"/c/"]]) {
  const p = await b.newPage(); const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  try {
    await p.goto(`http://localhost:${port}${path}`, { waitUntil: "networkidle", timeout: 120000 });
    await p.waitForSelector(".card svg", { timeout: 60000 });
    const links = await p.$$eval(".frameworks a", (as) => as.map((a) => new URL(a.href).port).join(","));
    const card = p.locator(".card").first();
    const snap = () => card.evaluate((c) => [...c.querySelectorAll("svg *")].map((e) => getComputedStyle(e).transform + getComputedStyle(e).strokeDashoffset).join());
    const before = await snap(); await card.hover(); await p.waitForTimeout(250);
    console.log(name, "links", links, "animates", before !== (await snap()), "errors", errors.slice(0, 2));
  } catch (e) { console.log(name, "FAILED", e.message.split("\n")[0], errors.slice(0, 2)); }
  await p.close();
}
await b.close();
