# metanam3s

Metanam3s is a simple word guessing card game, based on a user-supplied list of words.

# Building and developing

## Preparation

`npm ci`

## Building printable .pngs

`npm run build`

Then check the output in the `out` folder. These .pngs can then be printed individually on A4 paper.

## Developing components

`npm run dev`

# Word lists

Simply create text files in the `wordlists` folder to define a new wordlist. Wordlists should contain one word per line (no empty lines!). These will be picked up automatically when you build, but you'll want to add the file path to `words_devmode.js` to view these words in dev mode.

Words that appear multiple times will automatically be deduplicated.

## Importing a wordlist from BGG

To import a wordlist from a BGG user profile, use:

`npm run import-from-bgg <username>`

# Various info that might be useful for people that are interested in making board games using HTML+CSS:

- `break-inside` CSS property does not work inside `grid` elements in Google Chrome when printing (as of October 2019), but does work with Firefox.
