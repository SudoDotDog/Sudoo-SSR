/**
 * @author WMXPY
 * @namespace Example
 * @description Browser
 */

import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesNavigator } from "./routes";

export class BrowserEntry extends React.Component {

    public render() {

        return (<BrowserRouter>
            <RoutesNavigator />
        </BrowserRouter>);
    }
}
