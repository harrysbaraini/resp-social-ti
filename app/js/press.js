// jQuery
var jquery = require('jquery');

// Bespoke
var bespoke = require('bespoke'),
    bKeys = require('bespoke-keys'),
    bTouch = require('bespoke-touch'),
    bClasses = require('bespoke-classes'),
    bProgress = require('bespoke-progress');

/**
 * Inicia a apresentação
 * @method from
 */
var deck = bespoke.from('#presentation', [
    bKeys(),
    bTouch(),
    bClasses(),
    bProgress()
]);
