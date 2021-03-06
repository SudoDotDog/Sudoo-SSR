/**
 * @author WMXPY
 * @namespace Example
 * @description Routes
 */

import * as React from "react";
import { Route } from "react-router-dom";
import { AnotherComponent } from "./components/another";
import { MainComponent } from "./components/main";

export class RoutesNavigator extends React.Component {

    public render() {

        return (<React.Fragment>
            <Route path="/" exact component={MainComponent} />
            <Route path="/another" component={AnotherComponent} />
        </React.Fragment>);
    }
}
