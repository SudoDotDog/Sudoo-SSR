/**
 * @author WMXPY
 * @namespace Example
 * @description Main Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { collection } from "./collection";

export const MainStyleBase: Styles = {

    redColor: {
        backgroundColor: 'red',
    },
};

export const MainStyle: StyleManager = collection.hydrate('Main', MainStyleBase);
