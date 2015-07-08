'use strict';

var world = {};

world.init = function () {
    world.width = this.config.map.width;
    world.height = this.config.map.height;
    world.generateMap();
};

world.generateMap = function () {
    world.map = [];
    for (let x = 0; x < world.width; x++) {
        for (let y = 0; y < world.height; y++) {
            let tile = {
                x: x,
                y: y
            };
            world.map.push(tile);
        }
    }
};

world.render = function () {
    console.log('Yea, "render"...');
};

module.exports = exports = function *() {
    world.init.call(this);
    setInterval(function () {
        world.render.call(this);
    }, this.config.renderInterval);
};
