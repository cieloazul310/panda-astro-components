import * as path from "path";

const ship = [
  "@my-monorepo/some-component/components",
  "@my-monorepo/button/components",
].map((components) =>
  path.resolve(path.dirname(require.resolve(components)), "*.astro"),
);

export default ship;
