import { mkdirSync } from "fs";
import { Renderer } from 'distraction';
import { wordsBuilderFactory, coversBuilderFactory, keysBuilderFactory } from "./builders";
import { words } from "./words_buildmode";

async function run() {
  try {
    mkdirSync("out");
  } catch (e) {
    console.error(e);
    // ignore
  }

  new Renderer(wordsBuilderFactory(words).build()).renderToPNGs((i) => `./out/words_${i}.png`);
  new Renderer(coversBuilderFactory().build()).renderToPNGs((i) => `./out/covers_${i}.png`);
  new Renderer(keysBuilderFactory().build()).renderToPNGs((i) => `./out/keys_${i}.png`);
}

run();
