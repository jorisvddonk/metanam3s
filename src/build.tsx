import { mkdirSync } from "fs";
import { Renderer } from 'distraction';
import { wordsBuilderFactory, coversBuilderFactory, keysBuilderFactory } from "./builders";
import { words } from "./words_buildmode";

async function run() {
  try {
    mkdirSync("out");
  } catch (e) {
    // ignore... probably not a good idea but I can't be bothered to check the exception, as that's not always trivial in TS
  }

  async function render(factory, pngPathFunc, pdfPath) {
    const renderer = new Renderer(factory);
    await renderer.renderToPNGs(pngPathFunc);
    await renderer.renderToPDF(pdfPath);
    await renderer.close();
  }

  await render(wordsBuilderFactory(words), (i) => `./out/words_${i}.png`, './out/words.pdf');
  await render(coversBuilderFactory(), (i) => `./out/covers_${i}.png`, './out/covers.pdf');
  await render(keysBuilderFactory(), (i) => `./out/keys_${i}.png`, './out/keys.pdf');
}

run();
