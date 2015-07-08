var window = {};

window.size = process.stdout.getWindowSize();
window.width = window.size[0];
window.height = window.size[1];

module.exports = exports = function *() {
    this.window = window;
};
