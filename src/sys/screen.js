'use strict';

var charm = require('charm')(),
    windowSize = process.stdout.getWindowSize();

module.exports = exports = function *() {
    charm.window = {};
    charm.window.width = windowSize[0];
    charm.window.height = windowSize[1];
    charm.pipe(process.stdout);
    charm.reset();

    this.screen = charm;
};
