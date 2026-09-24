# Gopal's Corner Website

A static, one-page website for Gopal's Corner by Roti King (est. 1976, London and Kuala Lumpur).

## Structure

- `index.html`: the page (hero, scrolling band, what makes us different, crowd favourites, menu, story, visit)
- `css/styles.css`: styles, with the green and gold palette taken from the shopfront sign
- `js/main.js`: mobile menu and the pause button for the scrolling band
- `images/`: photography
- `gopals-corner-menu.pdf`: the printed menu, offered as a download

## Run locally

No build step is needed. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## To do

- Add the unit number for Westfield Stratford (search `TODO` in `index.html`).

The menu section mirrors `gopals-corner-menu.pdf`. Update both when prices change.
