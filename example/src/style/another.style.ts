/**
 * @author WMXPY
 * @namespace Example
 * @description Another Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { collection } from "./collection";

export const AnotherStyleBase: Styles = {

    blueColor: {
        backgroundColor: 'blue',
    },
};

export const AnotherStyle: StyleManager = collection.hydrate('Another', AnotherStyleBase);
