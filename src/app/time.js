'use strict';

var time = {};

time.init = function () {
    //
};

time.tick = function () {
    //
};

module.exports = exports = function *() {
    time.init.call(this);
    setInterval(time.tick.bind(this), this.config.tickInterval);
};
