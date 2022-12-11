import React from "react";
import { groupBy, sortBy } from "lodash";
import { RED_COLOR, TRANSPARENT_COLOR, YELLOW_COLOR } from "./constants";
import { Logo } from "./Logo";

interface IKeyProps {
  colors: string[];
}

export class KeyFront extends React.Component<IKeyProps, any> {
  render() {
    const backgroundColor = sortBy(
      Object.entries(groupBy(this.props.colors)),
      entry => entry[1].length
    ).pop()[0];
    return (
      <div
        style={{
          border: "0.5mm solid black",
          backgroundColor: backgroundColor,
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
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
          <div
            style={{
              width: "50mm",
              height: "50mm",
              backgroundColor: "#333",
              borderRadius: "5mm",
              overflow: "hidden",
              border: "0.5mm solid black",

              display: "grid",
              gridColumnGap: "1mm",
              gridRowGap: "1mm",
              justifyItems: "stretch",
              alignItems: "stretch",
              justifyContent: "center",
              alignContent: "center",

              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(5, 1fr)"
            }}
          >
            {this.props.colors.map((color, i) => {
              return (
                <div
                  key={`c_${color}_${i}`}
                  style={{
                    backgroundColor: color
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export class KeyBack extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          border: "0.5mm solid black",
          backgroundColor: YELLOW_COLOR,
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
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
          <div style={{ width: "30mm", height: "30mm", transform: "rotate(90deg)" }}>
            <Logo primaryColor={RED_COLOR} strokeColor={TRANSPARENT_COLOR}></Logo>
          </div>
        </div>
      </div>
    );
  }
}
