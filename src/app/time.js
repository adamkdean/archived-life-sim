'use strict';

var time = {};

time.init = function () {
    time.currentTick = 0;
};

time.tick = function () {
    time.currentTick++;
};

time.render = function () {
    var offsetX = this.screen.ui.text.left,
        offsetY = this.screen.ui.text.top;

    this.screen
        .position(offsetX, offsetY)
        .cursor(false)
        .foreground('white')
        .write('Tick: ' + time.currentTick);
};

module.exports = exports = function *() {
    time.init.call(this);
    setInterval(time.tick.bind(this), this.config.intervals.tick);
    setInterval(time.render.bind(this), this.config.intervals.render);
};
