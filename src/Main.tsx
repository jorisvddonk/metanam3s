import React from "react";
import { wordsBuilderFactory, coversBuilderFactory, keysBuilderFactory } from "./builders";

interface IMainProps {
  words: string[];
}

export class Main extends React.Component<IMainProps, any> {
  private elements: JSX.Element[];
  constructor(props) {
    super(props);
    this.elements = [] as JSX.Element[];
    this.elements = this.elements.concat(wordsBuilderFactory(this.props.words).pages);
    this.elements = this.elements.concat(coversBuilderFactory().pages);
    this.elements = this.elements.concat(keysBuilderFactory().pages);
  }

  render() {
    return this.elements;
  }
}
