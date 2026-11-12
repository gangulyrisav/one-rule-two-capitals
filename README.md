# One Rule, Two Capitals

A companion piece to the ArcGIS StoryMap *Ghana Must Go: Expulsion and Belonging in Accra and Lagos, 1969 to 1985*
(HIST 077, Howard University, Fall 2026).

Ghana expelled Nigerians in 1969. Nigeria expelled Ghanaians in 1983 and 1985. The page follows the colonial rule
that tied the right to stay to membership in an "indigenous" community, sets the 1969 and 1983 orders side by side
and shows who counted the people expelled.

## Sources

Every line cites a page in one of two readings:

- Samuel Fury Childs Daly, "Ghana Must Go: Nativism and the Politics of Expulsion in West Africa, 1969–1985,"
  *Past and Present*, no. 259 (May 2023): 229–61.
- Titilola Halimat Somotan, "Contested Burial Grounds: African Religious Communities, Urban Displacement, and the
  Spatial Politics of Difference in Colonial Lagos, Nigeria," *Journal of Social History* 58, no. 3 (Spring 2025): 493–525.

`src/data.js` holds every line with its page. `scripts/check-data.mjs` runs before each build: it fails if a line has
no page, or if any words in quotation marks do not appear word for word in the reading they cite. The article texts
are not in this repository; the check reads them from the author's local project folder.

## Build

```
npm install
npm run dev       # local preview
npm run build     # checks the data, then builds to dist/
npm run deploy    # builds and publishes dist/ to the gh-pages branch
```

Black and white only, in the StoryMap theme's typefaces: Space Grotesk and IBM Plex Mono (SIL Open Font License),
installed from npm and served from the site. No cookies, analytics or third-party requests.
