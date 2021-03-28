# Lang Dictionary
Better way to learn your words from Google Translate. Everything works without any local server.

Learn methods:
- dictionary list
- random word
- guess word

## Setup for desktop

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# run app with electron without creating package
npm run electron

# build app for Windows .exe file
npm run package-win

# build app for Linux
npm run package-win

# build app for Mac
npm run package-mac

```

## Setup for web browser

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Adding words to your database
You have two options for that. In First way you have to change `static/js/database.js` before build. The next way is after created package go to `dist_electron/package_name/resources/dist/static/js/database.js`.

### Manualy
```js

window.database = [
  ["english", "polish", "do", "robić"]
]

```

### Google Translate
1. Go to https://translate.google.com.
2. Click on saved (star on the bottom).
3. Then click export to Google Sheets.
4. In Google Sheets download sheet as CSV.
5. Convert to JSON Array. For example here: https://www.convertcsv.com/csv-to-json.htm.
6. Put JSON Array into window.database variable.

## Libraries
- Electron
- Vue 2.x
- Vuex
- Vuetify
- Vue-router
