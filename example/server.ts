/**
 * @author WMXPY
 * @namespace Example
 * @description Server
 */

import { SudooExpress, SudooExpressApplication } from "@sudoo/express";
import { readTextFileSync } from "@sudoo/io";
import { Register } from "@sudoo/jss";
import { NextFunction } from "express";
import * as Path from "path";
import * as React from "react";
import { ReactSSRServer } from "../src/server/server";
import { ServerEntry } from "./src/server";
import { collection } from "./src/style/collection";

Register.setup();

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

app.express.get('*', async (req, res, next: NextFunction) => {

    const html: string = ssrServer.render(
        React.createElement(
            'div',
            { id: "container" },
            React.createElement(
                ServerEntry,
                {
                    location: req.path,
                },
            ),
        ),
    );

    const style: string = collection.renderStyleTagSting('server-side-style');
    collection.resetAttachment();

    const styleReplaced: string = html.replace(`<style id="server-side-style"></style>`, style);

    res.send(styleReplaced);

    next();
});

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
app.host(9000);
console.log('Hosting at port 9000');
