/**
 * @author WMXPY
 * @namespace Example
 * @description Server
 */

import { SudooExpress, SudooExpressApplication } from "@sudoo/express";
import { readTextFileSync } from "@sudoo/io";
import { NextFunction } from "express";
import * as Path from "path";
import * as React from "react";
import { ReactSSRServer } from "../src/server/server";
import { Entry } from "./src/index";

const setting: SudooExpressApplication = SudooExpressApplication.create('React-SSR-Example', '1');
const app: SudooExpress = SudooExpress.create(setting);

// Health
app.health('/health');

// Other
const template: string = readTextFileSync(Path.join(__dirname, 'dist', 'index.html'));
const ssrServer: ReactSSRServer = ReactSSRServer.create(template, `<div id="container"></div>`);

// Index
const target: string = Path.join(__dirname, 'dist');
// Static
app.static(target, {
    excludes: ['/', '/index.html'],
});

app.express.get('*', async (_, res, next: NextFunction) => {

    const html: string = ssrServer.render(
        React.createElement(
            'div',
            { id: "container" },
            React.createElement(Entry),
        ),
    );
    res.send(html);

    next();
});

// tslint:disable-next-line: no-magic-numbers
app.host(9000);
console.log('Hosting at port 9000');
