import React, { CSSProperties } from "react";
import { Logo } from "./Logo";
import { default as tinycolor } from "tinycolor2";
import { TRANSPARENT_COLOR, TRAP_COLOR } from "./constants";

interface ICoverProps {
  color: string;
  logoColor?: string;
}

const textStyle: CSSProperties = {
  fontSize: "0.8cm",
  fontWeight: "bold",
  margin: "0.25cm"
};

export class Cover extends React.Component<ICoverProps, any> {
  public render() {
    let logoColor = this.props.logoColor !== undefined ? this.props.logoColor : this.props.color;
    let primaryColor = tinycolor(logoColor).brighten(25).desaturate(15).toString();
    let strokeColor = TRANSPARENT_COLOR;

    let brightness_diff = Math.abs(tinycolor(primaryColor).getBrightness() - tinycolor(this.props.color).getBrightness());
    if (brightness_diff < 5) { // brightness is too close to each other, so we need to add a stroke for accessibility purposes
      strokeColor = tinycolor(logoColor).darken(25).desaturate(15).toString();
    }

    return (
      <div
        style={{
          border: "0.5mm solid black",
          backgroundColor: this.props.color,
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
          <div style={{ width: "25mm", height: "25mm" }}>
            <Logo
              primaryColor={primaryColor}
              strokeColor={strokeColor}
            ></Logo>
          </div>
        </div>
      </div>
    );
  }
}
