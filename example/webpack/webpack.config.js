/**
 * @author WMXPY
 * @namespace Webpack
 * @description Production
 */

const SudooWebpack = require("@sudoo/webpack-react").SudooWebpack;
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const APP_DIR = path.resolve(__dirname, '..');
const TSCONFIG_PATH = path.resolve(__dirname, '..', 'typescript', 'tsconfig.build.json');

const TEMPLATE_FILE = path.join(__dirname, '..', 'public', 'template.ejs');

module.exports = SudooWebpack.create({
    APP_DIR,
    BUILD_DIR,

    TSCONFIG_PATH,

    APP_ENTRY_FILE_NAME: 'client.tsx',
}, {
    title: 'SSR Example',
    template: TEMPLATE_FILE,
}).production();
