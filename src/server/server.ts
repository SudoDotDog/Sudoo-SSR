/**
 * @author WMXPY
 * @namespace Server
 * @description Server
 */

import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

export class ReactSSRServer {

    public static create(template: string, nodeReplace: string) {

        return new ReactSSRServer(template, nodeReplace);
    }

    private readonly _template: string;
    private readonly _nodeReplace: string;

    private constructor(template: string, nodeReplace: string) {

        this._template = template;
        this._nodeReplace = nodeReplace;
    }

    public render(node: React.ReactElement): string {

        const parsed: string = ReactDOMServer.renderToString(node);
        const replaced: string = this._template.replace(this._nodeReplace, parsed);

        return replaced;
    }
}

