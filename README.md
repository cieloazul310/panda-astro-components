# Astro component library based on Panda CSS (experimental)

generated from [astahmer/panda-monorepo](https://github.com/astahmer/panda-monorepo)

```md
my-monorepo
├─ apps
│  └─ web <-- consuming the `preset`, `button`, `some-component`, etc packages
└─ packages
   ├─ preset <-- using definePreset(), contains the theme base (tokens.colors, semantic tokens, etc)
   ├─ button <-- consuming the preset, provides a button recipe (in a buttonPreset)
   └─ some-component <-- consuming the preset, provides a component using internal `css` calls, ships a panda.json extract result
```
