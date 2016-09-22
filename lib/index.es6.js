import $ from 'jquery';

let log = console.log.bind(console)

$(document).ready(() => {
  log('Use log() instead of console.log()!')
})

export default log;
