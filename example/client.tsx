/**
 * @author WMXPY
 * @namespace Example
 * @description Client
 */

import * as React from "react";
import { AppContainer } from "react-hot-loader";
import { ReactSSRClient } from "../src";
import { BrowserEntry } from "./src/browser";

declare const module: any;

const container: Element = document.getElementById("container") as Element;
const client: ReactSSRClient = ReactSSRClient.create(container);
const render: (App: any) => void = (App: any): void => {

    client.mount(<AppContainer>
        <App />
    </AppContainer>);
};

render(BrowserEntry);
if (module.hot) {

    module.hot.accept("./src/browser", () => {
        // tslint:disable-next-line: no-require-imports
        render(require("./src/browser").BrowserEntry);
    });
}
