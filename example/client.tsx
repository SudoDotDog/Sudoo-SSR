/**
 * @author WMXPY
 * @namespace Example
 * @description Client
 */

import * as React from "react";
import { AppContainer } from "react-hot-loader";
import { ReactSSRClient } from "../src";
import { Entry } from "./src/index";

declare const module: any;

const container: Element = document.getElementById("container") as Element;
const client: ReactSSRClient = ReactSSRClient.create(container);
const render: (App: any) => void = (App: any): void => {

    client.mount(<AppContainer>
        <App />
    </AppContainer>);
};

render(Entry);
if (module.hot) {

    module.hot.accept("./src/index", () => {
        // tslint:disable-next-line: no-require-imports
        render(require("./src/index").Entry);
    });
}
