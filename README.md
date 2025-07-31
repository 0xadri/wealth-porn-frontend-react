# WealthPorn App: Frontend in `React`

WealthPorn showcases interesting data and charts about wealth inequality.

This frontend consumes a REST API.

This REST API is implemented in this (["WealthPorn Backend" project](https://github.com/0xadri/wealth-porn-backend-restapi)) in `Node`, `Express` and `MongoDB`.

However, this very "WealthPorn Frontend" project does include mock data (json files) so you can run it on its own.

# 🚀 Try It Live 🚀

Coming soon...

# Tech

`Javascript` · `React`· `Vite` · `NodeJS` · `TailwindCSS` · `Chart.js`

## Build

1. download/clone this repo locally

2. `npm install`

3. `npm run dev`

4. `.env` file expected with some variables, read more in [`.env.example`](./.env.example)

You do NOT want to build/run the "WealthPorn Backend" project? Then check the json files in `src/mockdata` folder. You will just need to modify the calls in `src/services/apiWealthPorn.js` to get the relevant data from those.

## 🎯 [Project Mgmt](./PRJ_MGMT.md) 🎯

## Credits

`Chart.js` https://www.chartjs.org/

`Cruip Tailwind Dashboard` https://github.com/cruip/tailwind-dashboard-template
