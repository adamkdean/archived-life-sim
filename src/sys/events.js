'use strict';

var keypress = require('keypress'),
    charm = require('charm')(),
    eventList = [],
    events = {};

events.bootstrap = function () {
    keypress(process.stdin);
    process.stdin.on('keypress', function (ch, key) {
        for (let i = 0; i < eventList.length; i++) {
            let nameMatches = eventList[i].key === key.name,
                ctrlMatches = eventList[i].ctrl === key.ctrl,
                shiftMatches = eventList[i].shift === key.shift;
            if (nameMatches && ctrlMatches && shiftMatches) {
                eventList[i].callback();
            }
        }
    });
    process.stdin.setRawMode(true);
    process.stdin.resume();
};

events.bind = function (key, ctrl, shift, callback) {
    eventList.push({
        key: key,
        ctrl: !!ctrl,
        shift: !!shift,
        callback: callback
    });
};

events.defaultEvents = function () {
    events.bind('c', true, false, function () {
        charm.reset();
        process.exit();
    })
};

module.exports = exports = function *() {
    events.bootstrap();
    events.defaultEvents();
    this.events = events;
};
