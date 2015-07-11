'use strict';

var world = {};

world.init = function () {
    world.width = this.screen.ui.map.width;
    world.height = this.screen.ui.map.height;
    world.generateMap();
    world.generateGrass();
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

world.generateGrass = function () {
    for (let x = 0; x < world.width; x++) {
        for (let y = 0; y < world.height; y++) {
            let rnd = (Math.random() * 100) + 1;
            if (rnd <= 10) {
                world.map[x][y].things.push({
                    type: 'grass',
                    size: 1,
                    character: ',',
                    color: 'green'
                });
            }
        }
    }
};

world.getTileOutput = function (tile) {
    var biggestThing;

    if (tile.things && tile.things.length > 0) {
        for (let i = 0; i < tile.things.length; i++) {
            if (!biggestThing || tile.things[i].size >= biggestThing.size) {
                biggestThing = tile.things[i];
            }
        }

        return {
            character: biggestThing.character || '?',
            color: biggestThing.color || 'white'
        };
    } else {
        return {
            character: '.',
            color: 'white'
        };
    }
};

world.render = function () {
    var offsetX = this.screen.ui.map.left,
        offsetY = this.screen.ui.map.top;

    for (let x = 0; x < world.width; x++) {
        for (let y = 0; y < world.height; y++) {
            let tile = world.map[x][y],
                output = world.getTileOutput(tile);

            this.screen
                .position(offsetX + x, offsetY + y)
                .cursor(false)
                .foreground(output.color)
                .write(output.character);
        }
    }
};

module.exports = exports = function *() {
    world.init.call(this);
    setInterval(world.render.bind(this), this.config.intervals.render);
};
