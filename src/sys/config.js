'use strict';

var config = {
    intervals: {
        render: 33,
        tick: 250
    },
    ui: {
        margin: 2,
        map: {
            width: 80,
            height: 20
        },
        text: {
            width: 80,
            height: 5
        }
    }
};

module.exports = exports = function *() {
    this.config = config;
};
