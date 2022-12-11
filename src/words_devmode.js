import { readFileSync } from "fs";

// Wordlists used in dev mode:
// this code is a bit nasty, as Parcel can't statically evaluate this code otherwise to be able to inline static files:
let _files = [
  readFileSync("./wordlists/terms.txt", "utf8")
];

let _words = _files
  .map(_file => {
    return _file.toString().split(/\r?\n/);
  })
  .reduce((memo, words) => {
    return memo.concat(words);
  }, [])
  .filter(word => word.length > 0);

export const words = _words;
