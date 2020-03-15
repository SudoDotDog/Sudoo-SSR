/**
 * @author WMXPY
 * @namespace Server
 * @description Server
 */

import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

export class ReactSSRServer {

    public static create(template: string, replace: string) {

        return new ReactSSRServer(template, replace);
    }

    private readonly _template: string;
    private readonly _replace: string;

    private constructor(template: string, replace: string) {

        this._template = template;
        this._replace = replace;
    }

    public render(node: React.ReactElement): string {

        const parsed: string = ReactDOMServer.renderToString(node);
        const replaced: string = this._template.replace(this._replace, parsed);

        return replaced;
    }
}

