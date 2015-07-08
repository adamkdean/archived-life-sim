'use strict';

var _ = require('lodash'),
    co = require('co'),
    reqmany = require('reqmany'),
    app = {};

co(function *() {
    yield *reqmany('sys', function *(name, module) {
        yield module.call(app);
    });

    
}).catch(function (err) {
    console.log('\nFATAL ERROR!\n');
    console.trace(err.stack.replace('\\n', '\n'));
});
