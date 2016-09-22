'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var $ = _interopDefault(require('jquery'));

let log = console.log.bind(console)

$(document).ready(() => {
  log('Use log() instead of console.log()!')
})

module.exports = log;
