import { Builder } from "distraction/dist/Builder";
import { Word } from "./Word";
import React from "react";
import { TRAP_COLOR, TEAMCOLOR_1, TEAMCOLOR_2, INNOCENT_COLOR, WORD_BACKGROUND_COLOR } from "./constants";
import { Cover } from "./Cover";
import { range, shuffle } from "lodash";
import { KeyFront, KeyBack } from "./Key";

const CARDWIDTH = 87;
const CARDHEIGHT = 56;


export const wordsBuilderFactory = (words) => {
  const builder_words = new Builder();
  words.forEach(word => {
    builder_words.addElement({
      front: () => <Word word={word} color={WORD_BACKGROUND_COLOR} />,
      width: CARDWIDTH,
      height: CARDHEIGHT
    });
  });
  return builder_words
};

export const coversBuilderFactory = () => {
  const coverColors: string[] = [TRAP_COLOR]
    .concat(range(8).map(x => TEAMCOLOR_1))
    .concat(range(8).map(x => TEAMCOLOR_2))
    .concat(range(7).map(x => INNOCENT_COLOR));

  const builder_covers = new Builder();
  coverColors
    .map((color, i) => <Cover key={`Cover_${i}`} color={color}></Cover>)
    .forEach((elem) => {
      builder_covers.addElement({
        front: () => elem,
        width: CARDWIDTH,
        height: CARDHEIGHT
      })
    });
  builder_covers.addElement({
    front: () => <Cover key={`Cover_special_1`} color={TEAMCOLOR_1} logoColor={TEAMCOLOR_2} />,
    width: CARDWIDTH,
    height: CARDHEIGHT
  })
  builder_covers.addElement({
    front: () => <Cover key={`Cover_special_2`} color={TEAMCOLOR_2} logoColor={TEAMCOLOR_1} />,
    width: CARDWIDTH,
    height: CARDHEIGHT
  })
  return builder_covers;
};

export const keysBuilderFactory = () => {
  const keysColors: string[][] = range(10).map(x => {
    return shuffle(
      [TRAP_COLOR]
        .concat(range(8).map(x => TEAMCOLOR_1))
        .concat(range(8).map(x => TEAMCOLOR_2))
        .concat([Math.random() > 0.5 ? TEAMCOLOR_1 : TEAMCOLOR_2])
        .concat(range(7).map(x => INNOCENT_COLOR))
    );
  });
  const builder_keys = new Builder();
  keysColors.map((colors, i) => (
    <KeyFront key={`KeyFront_${i}`} colors={colors} />
  )).forEach((elem) => {
    builder_keys.addElement({
      front: () => elem,
      back: () => <KeyBack />,
      width: CARDWIDTH,
      height: CARDHEIGHT
    })
  });
  return builder_keys;
}