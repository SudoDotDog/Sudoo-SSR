/**
 * @author WMXPY
 * @namespace Example
 * @description Server
 */

import { SudooExpress, SudooExpressApplication } from "@sudoo/express";
import { readTextFile } from "@sudoo/io";
import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import * as Path from "path";

const setting: SudooExpressApplication = SudooExpressApplication.create('React-SSR-Example', '1');
const app: SudooExpress = SudooExpress.create(setting);

// Health
app.health('/health');

// Static
const target: string = Path.join(__dirname, 'dist');
app.static(target);

// Other
app.express.get('*', (_, res) => {

    readTextFile(Path.join(__dirname, 'dist', 'index.html')).then((text: string) => {
        res.send(text);
    }).catch((err) => {
        res.status(HTTP_RESPONSE_CODE.BAD_GATEWAY).send(err.message);
    });
});

// tslint:disable-next-line: no-magic-numbers
app.host(9000);
console.log('Hosting at port 9000');
