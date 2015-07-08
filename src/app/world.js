'use strict';

var world = {},
    colors = ['green', 'blue', 'red'],
    colorIndex = 0;

world.init = function () {
    world.width = this.screen.window.width;
    world.height = this.screen.window.height;
    world.generateMap();
};

world.generateMap = function () {
    world.map = [];
    for (let x = 0; x < world.width; x++) {
        world.map[x] = [];
        for (let y = 0; y < world.height; y++) {
            let tile = {
                x: x,
                y: y,
                things: []
            };
            world.map[x][y] = tile;
        }
    }
};

world.getTileCharacter = function (tile) {
    var biggestThing, character;

    if (tile.things && tile.things.length > 0) {
        for (let i = 0; i < tile.things.length; i++) {
            if (!biggestThing || tile.things[i].size >= biggestThing.size) {
                biggestThing = tile.things[i];
            }
        }
        character = biggestThing.character || '?';
    } else {
        character = '.';
    }

    return character;
};

world.render = function () {
    for (let x = 0; x < world.width; x++) {
        for (let y = 0; y < world.height; y++) {
            let tile = world.map[x][y],
                char = world.getTileCharacter(tile);

            this.screen
                .position(x, y)
                .foreground('green')
                .cursor(false)
                .write(char);
        }
    }
};

module.exports = exports = function *() {
    world.init.call(this);
    setInterval(world.render.bind(this), this.config.renderInterval);
};
