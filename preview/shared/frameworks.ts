export enum FrameworkEnum {
  REACT = "react",
  VUE = "vue",
  SVELTE = "svelte",
  SOLID = "solid",
  PREACT = "preact",
  ANGULAR = "angular",
  ASTRO = "astro",
}

/** The ports the dev servers were started on, inlined into the browser bundles by `previewConfig` (Vite `define`). */
declare const __PULSOICON_PORTS__: Partial<Record<FrameworkEnum, number>> | undefined;

const env = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env ?? {};

/** `PULSOICON_PORT_<FRAMEWORK>` (from the shell or .env; `npm run preview` also sets it when a port is taken), else the default. */
const port = (id: FrameworkEnum, fallback: number): number =>
  (typeof __PULSOICON_PORTS__ !== "undefined" ? __PULSOICON_PORTS__[id] : undefined) ?? (Number(env[`PULSOICON_PORT_${id.toUpperCase()}`]) || fallback);

/** Each preview's dev server (`npm run preview:<framework>`), so the header can link to the others. */
export const FRAMEWORKS = [
  { id: FrameworkEnum.REACT, label: "React", port: port(FrameworkEnum.REACT, 10205) },
  { id: FrameworkEnum.VUE, label: "Vue", port: port(FrameworkEnum.VUE, 10206) },
  { id: FrameworkEnum.SVELTE, label: "Svelte", port: port(FrameworkEnum.SVELTE, 10207) },
  { id: FrameworkEnum.SOLID, label: "Solid", port: port(FrameworkEnum.SOLID, 10208) },
  { id: FrameworkEnum.PREACT, label: "Preact", port: port(FrameworkEnum.PREACT, 10209) },
  { id: FrameworkEnum.ANGULAR, label: "Angular", port: port(FrameworkEnum.ANGULAR, 10210) },
  { id: FrameworkEnum.ASTRO, label: "Astro", port: port(FrameworkEnum.ASTRO, 10211) },
] as const;

/** Every gallery's port by framework, for `define` in the Vite configs. */
export const PORTS = Object.fromEntries(FRAMEWORKS.map((f) => [f.id, f.port])) as Record<FrameworkEnum, number>;
