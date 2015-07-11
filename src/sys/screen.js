'use strict';

var screen = require('charm')(),
    windowSize = process.stdout.getWindowSize();

module.exports = exports = function *() {
    screen.pipe(process.stdout);
    screen.reset();

    screen.window = {
        width: windowSize[0],
        height: windowSize[1]
    };

    screen.ui = {};
    screen.ui.map = {
        width: this.config.ui.map.width,
        height: this.config.ui.map.height,
        left: 1 + (screen.window.width - this.config.ui.map.width) / 2,
        top: this.config.ui.margin
    };
    screen.ui.text = {
        width: this.config.ui.text.width,
        height: this.config.ui.text.height,
        left: 1 + (screen.window.width - this.config.ui.text.width) / 2,
        top: screen.ui.map.height + screen.ui.map.top + this.config.ui.margin
    }

    this.screen = screen;
};
