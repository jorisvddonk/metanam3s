import { Main } from "./Main";
import ReactDOM from "react-dom";
import React from "react";

import { words } from "./words_devmode";

console.log("Words:", words.join(" "));

const elem = document.getElementById("main");
ReactDOM.render(React.createElement(Main, { words: words }), elem);
