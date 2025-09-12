# problems

## search bar not showing (docusaurus-lunr-search)

Plugin goes under config:

```js
const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  projectName: "docusaurus",
  i18n: { ... },
  presets: [ ... ],
  themeConfig: { ... } satisfies Preset.ThemeConfig,

  plugins: [require.resolve("docusaurus-lunr-search")]
};
```

```bash
npm run docusaurus clear
# create an optimized production build
# inside build dir you should see a lunr index after build finishes
npm run build 
npm run start
```
