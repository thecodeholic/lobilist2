/**
 * Created by zura on 9/21/2016.
 */
'use strict';

var Lobi = Lobi || {};

Lobi.ns = function (namespace) {
    var parts = namespace.split('.');
    var currentObj = window;
    for (var i = 0; i < parts.length; i++) {
        if (!currentObj[parts[i]]) {
            currentObj[parts[i]] = {};
        }
        currentObj = currentObj[parts[i]];
    }

    return currentObj;
};

Lobi.nsFromClass = function (namespace) {
    var parts = namespace.split('.');
    var currentObj = window;
    for (var i = 0; i < parts.length - 1; i++) {
        if (!currentObj[parts[i]]) {
            currentObj[parts[i]] = {};
        }
        currentObj = currentObj[parts[i]];
    }

    return currentObj;
};

Lobi.getClassName = function ($class) {
    var parts = $class.split('.');
    return parts[parts.length - 1];
};

Lobi.define = function ($class, options) {
    var ns = Lobi.nsFromClass($class),
        $className = Lobi.getClassName($class),
        extend;

    options = options || {};
    extend = options.extend ? options.extend.prototype : null;

    if (!options.singleton) {
        ns[$className] = function constructor(options) {
            this.constructor.call(this, options);
        };
        ns[$className].prototype = $.extend({}, extend, options, {
            //$$parent : extend,
            $$className: $class
        });
    } else {
        ns[$className] = $.extend({}, extend, options, {
            //$$parent : extend,
            $$className: $class
        });
        ns[$className].constructor();
    }


    //console.log(ns[$className].prototype);

    //for (var i in ns[$className].prototype){
    //    if (typeof ns[$className].prototype[i] === 'function'){
    //        ns[$className].prototype[i].name = i;
    //        console.log(i);
    //        console.log(ns[$className].prototype[i]);
    //    }
    //}

    console.log($class, ns);
};