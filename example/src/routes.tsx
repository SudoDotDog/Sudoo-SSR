/**
 * @author WMXPY
 * @namespace Example
 * @description Routes
 */

import * as React from "react";
import { Route } from "react-router-dom";
import { MainComponent } from "./components/main";

export class RoutesNavigator extends React.Component {

    public render() {

        return (<React.Fragment>
            <Route path="/" component={MainComponent} />
        </React.Fragment>);
    }
}
