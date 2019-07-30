const _ = require("underscore");

module.exports = function(n,t,i){var c=[],a=!1,f=function(){c.length?(a=!0,_.delay(function(){i?_.defer(function(){c.shift().call()}):c.shift().call(),f()},t)):a=!1};return function(){var t=_.map(arguments,function(n){return n});c.push(_.bind.apply(this,[n,this].concat(t))),a||f()}};