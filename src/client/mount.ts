/**
 * @author WMXPY
 * @namespace Client
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

export class ReactSSRClient {

    public static create(container: Element) {

        return new ReactSSRClient(container);
    }

    private readonly _container: Element;

    private constructor(container: Element) {

        this._container = container;
    }

    public mount(node: React.ReactElement): this {

        ReactDOM.hydrate(node, this._container);
        return this;
    }
}

