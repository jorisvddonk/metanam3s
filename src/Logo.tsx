import React from "react";
import * as fs from "fs";
import * as path from "path";

interface LogoProps {
  primaryColor: string;
  strokeColor: string;
}

const logoSrc = fs.readFileSync(path.join(__dirname, "logo.svg")).toString();

export class Logo extends React.Component<LogoProps, any> {
  static defaultProps = {
    primaryColor: "#333"
  };

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: logoSrc.replace(/#c0d3c0/gi, this.props.primaryColor).replace(/#c0d3c1/gi, this.props.strokeColor) }}></div>
    );
  }
}
