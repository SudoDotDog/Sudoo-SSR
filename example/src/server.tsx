/**
 * @author WMXPY
 * @namespace Example
 * @description Server
 */

import * as React from "react";
import { StaticRouter } from "react-router-dom";
import { RoutesNavigator } from "./routes";

export class ServerEntry extends React.Component {

    public render() {

        return (<StaticRouter>
            <RoutesNavigator />
        </StaticRouter>);
    }
}
