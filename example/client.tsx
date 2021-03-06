/**
 * @author WMXPY
 * @namespace Example
 * @description Client
 */

import { Register } from "@sudoo/jss";
import * as React from "react";
import { AppContainer } from "react-hot-loader";
import { ReactSSRClient } from "../src";
import { BrowserEntry } from "./src/browser";

Register.register({
    serverSideStyleIds: ['server-side-style'],
});

declare const module: any;

const container: Element = document.getElementById("container") as Element;
const client: ReactSSRClient = ReactSSRClient.create(container);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render: (App: any) => void = (App: any): void => {

    client.mount(<AppContainer>
        <App />
    </AppContainer>);
};

render(BrowserEntry);
if (module.hot) {

    module.hot.accept("./src/browser", () => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        render(require("./src/browser").BrowserEntry);
    });
}
