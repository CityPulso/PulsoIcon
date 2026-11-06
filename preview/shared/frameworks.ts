export enum FrameworkEnum {
  REACT = "react",
  VUE = "vue",
  SVELTE = "svelte",
}

/** Each preview's dev server (`npm run preview:<framework>`), so the header can link to the others. */
export const FRAMEWORKS = [
  { id: FrameworkEnum.REACT, label: "React", port: 10205 },
  { id: FrameworkEnum.VUE, label: "Vue", port: 10206 },
  { id: FrameworkEnum.SVELTE, label: "Svelte", port: 10207 },
] as const;
