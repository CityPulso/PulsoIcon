// For `tsc` only (Astro's own tooling types .astro files itself): an .astro module's default export is its component.
declare module "*.astro" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: (props: any) => any;
  export default Component;
}
