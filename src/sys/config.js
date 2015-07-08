'use strict';

var config = {};

config.map = {};
config.map.width = 100;
config.map.height = 100;
config.renderInterval = 250; // ms

module.exports = exports = function *() {
    this.config = config;
};
