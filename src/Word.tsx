import React, { CSSProperties } from "react";

interface IWordProps {
  word: string;
  color: string;
}

const textStyle: CSSProperties = {
  fontSize: "0.8cm",
  fontWeight: "bold",
  margin: "0.25cm"
};

export class Word extends React.Component<IWordProps, any> {
  render() {
    const word = this.props.word;
    if (word === undefined || word.length === 0) {
      return null;
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          border: "0.5mm solid black",
          backgroundColor: this.props.color,
          display: "block",
          pageBreakInside: "avoid",
          breakInside: "avoid",
          overflow: "hidden",
          borderRadius: "0.5cm"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <span
            style={{
              ...textStyle
            }}
          >
            {word}
          </span>
          <span
            style={{
              ...textStyle,
              backgroundColor: "white",
              transform: "rotate(180deg)",
              padding: "0.2cm"
            }}
          >
            {word}
          </span>
        </div>
      </div>
    );
  }

}
