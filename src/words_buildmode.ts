import { sync as globSync } from "glob";
import { readFileSync } from "fs";

let _files = globSync("./wordlists/**/*.txt").map(filepath =>
  readFileSync(filepath, "utf8")
);

let _words = _files
  .map(_file => {
    return _file.toString().split(/\r?\n/);
  })
  .reduce((memo, words) => {
    return memo.concat(words);
  }, [])
  .filter(word => word.length > 0);

let words_deduplicated = Array.from(new Set(_words).entries()).map(x => x[0]);

export const words = words_deduplicated;
