/**
 * @author WMXPY
 * @namespace Example
 * @description Client
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Entry } from "./src/index";

declare const module: any;

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (<AppContainer>
            <App />
        </AppContainer>),
        document.getElementById("container"));
};

render(Entry);
if (module.hot) {

    module.hot.accept("./src/index", () => {
        // tslint:disable-next-line: no-require-imports
        render(require("./src/index").Entry);
    });
}
