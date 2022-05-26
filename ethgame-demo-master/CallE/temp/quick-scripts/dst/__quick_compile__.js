
(function () {
var scripts = [{"deps":{"./assets/Script/App/Global":11,"./assets/Script/BaseModel/DataHelper":6,"./assets/Script/BaseModel/Types":16,"./assets/Script/BaseModel/MsgEvent":12,"./assets/Script/Energy/EnergyItem":7,"./assets/Script/Energy/EnergyProp":13,"./assets/Script/Energy/FriendEnergyItem":25,"./assets/Script/Friend/FriendProp":17,"./assets/Script/Friend/UI_FriendScrollView":1,"./assets/Script/Friend/FriendItem":15,"./assets/Script/MainScene/RobotInforCtrl":14,"./assets/Script/MainScene/GroupCtrl/HomeGroupCtrl":5,"./assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl":23,"./assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl":24,"./assets/Script/MainScene/MainSceneCtrl":18,"./assets/Script/Manager/DataManager":9,"./assets/Script/Model/PlayerProp":8,"./assets/Script/Model/RobotProp":19,"./assets/Script/Model/FriendProp":20,"./assets/Script/Backpack/UI_BackPackScrollView":4,"./assets/Script/Shop/UI_ShopScrollView":2,"./assets/Script/Shop/ShopItem":21,"./assets/Script/Utils/Utils":10,"./assets/Script/Utils/LocalDataAPI":22,"./assets/Script/Backpack/BackpackItem":3},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../BaseModel/Types":16,"./FriendItem":15,"../Manager/DataManager":9},"path":"preview-scripts/assets/Script/Friend/UI_FriendScrollView.js"},{"deps":{"../BaseModel/MsgEvent":12,"../App/Global":11,"../BaseModel/Types":16,"../Manager/DataManager":9,"./ShopItem":21},"path":"preview-scripts/assets/Script/Shop/UI_ShopScrollView.js"},{"deps":{"../App/Global":11,"../BaseModel/MsgEvent":12,"../BaseModel/Types":16,"../Manager/DataManager":9,"../MainScene/RobotInforCtrl":14,"../Model/RobotProp":19},"path":"preview-scripts/assets/Script/Backpack/BackpackItem.js"},{"deps":{"../Manager/DataManager":9,"../BaseModel/Types":16,"./BackpackItem":3},"path":"preview-scripts/assets/Script/Backpack/UI_BackPackScrollView.js"},{"deps":{"../../App/Global":11,"../../BaseModel/Types":16,"../../BaseModel/MsgEvent":12,"../../Manager/DataManager":9,"../../Utils/LocalDataAPI":22,"../../Energy/EnergyProp":13},"path":"preview-scripts/assets/Script/MainScene/GroupCtrl/HomeGroupCtrl.js"},{"deps":{},"path":"preview-scripts/assets/Script/BaseModel/DataHelper.js"},{"deps":{"./EnergyProp":13,"../Manager/DataManager":9,"../BaseModel/Types":16,"../Utils/LocalDataAPI":22},"path":"preview-scripts/assets/Script/Energy/EnergyItem.js"},{"deps":{"./RobotProp":19},"path":"preview-scripts/assets/Script/Model/PlayerProp.js"},{"deps":{},"path":"preview-scripts/assets/Script/Manager/DataManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/Utils/Utils.js"},{"deps":{"../BaseModel/Types":16,"../Manager/DataManager":9,"../Model/PlayerProp":8,"../Energy/EnergyProp":13,"../Model/RobotProp":19,"../Utils/LocalDataAPI":22,"../Utils/Utils":10},"path":"preview-scripts/assets/Script/App/Global.js"},{"deps":{},"path":"preview-scripts/assets/Script/BaseModel/MsgEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Energy/EnergyProp.js"},{"deps":{"../App/Global":11,"../BaseModel/MsgEvent":12,"../Utils/LocalDataAPI":22,"../Model/RobotProp":19},"path":"preview-scripts/assets/Script/MainScene/RobotInforCtrl.js"},{"deps":{"../Model/RobotProp":19,"../App/Global":11,"../BaseModel/MsgEvent":12},"path":"preview-scripts/assets/Script/Friend/FriendItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/BaseModel/Types.js"},{"deps":{},"path":"preview-scripts/assets/Script/Friend/FriendProp.js"},{"deps":{"./RobotInforCtrl":14,"../App/Global":11,"../BaseModel/MsgEvent":12},"path":"preview-scripts/assets/Script/MainScene/MainSceneCtrl.js"},{"deps":{},"path":"preview-scripts/assets/Script/Model/RobotProp.js"},{"deps":{},"path":"preview-scripts/assets/Script/Model/FriendProp.js"},{"deps":{"../App/Global":11,"../BaseModel/MsgEvent":12,"../Model/RobotProp":19,"../MainScene/RobotInforCtrl":14,"../Utils/LocalDataAPI":22},"path":"preview-scripts/assets/Script/Shop/ShopItem.js"},{"deps":{"../App/Global":11,"../BaseModel/Types":16,"../BaseModel/MsgEvent":12,"../MainScene/RobotInforCtrl":14,"../Manager/DataManager":9,"../Energy/EnergyProp":13,"./Utils":10},"path":"preview-scripts/assets/Script/Utils/LocalDataAPI.js"},{"deps":{"../../Utils/LocalDataAPI":22,"../../Manager/DataManager":9,"../../BaseModel/Types":16,"../../Energy/EnergyProp":13},"path":"preview-scripts/assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl.js"},{"deps":{"../../Energy/EnergyProp":13,"../../Manager/DataManager":9,"../../BaseModel/Types":16,"../../BaseModel/MsgEvent":12,"../../App/Global":11},"path":"preview-scripts/assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl.js"},{"deps":{"../Manager/DataManager":9,"./EnergyProp":13,"../Utils/LocalDataAPI":22,"../BaseModel/Types":16},"path":"preview-scripts/assets/Script/Energy/FriendEnergyItem.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    