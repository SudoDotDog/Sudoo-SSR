/**
 * @author WMXPY
 * @namespace Example
 * @description Server
 */

import * as React from "react";
import { StaticRouter } from "react-router-dom";
import { RoutesNavigator } from "./routes";

export type ServerEntryProps = {

    readonly location: string;
};

export class ServerEntry extends React.Component<ServerEntryProps> {

    public render() {

        return (<StaticRouter location={this.props.location}>
            <RoutesNavigator />
        </StaticRouter>);
    }
}
