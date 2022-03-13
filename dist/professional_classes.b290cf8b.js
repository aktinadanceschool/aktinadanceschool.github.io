// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/professional_classes.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var teacherBios = {
  betty: "She was born in Patras in 1976. He graduated from the National School Of Dance (KSOT) in 1997. He has collaborated with various dance groups and since 2002 he has been a permanent member of the Sinequanon group. From 1998 until today he teaches modern dance technique and improvisation to children and adults (\"Hill\" School, \"Child's Smile\", \"Isidora Raymond Duncan\" Dance Study Center, K.Th.B.E., Vocational Dance School \"Rallou Manou \",\" Fix Dance Studio \",\" Horokinisi \",\" Kratiras \",\" DAN.C.CE \",\" Baile de Barrio \"etc.). At the same time, she works in the theater as a kinesiologist having collaborated with S. Hatzakis, A. Aza, St. Fasouli, A. Riga, etc., while since 2008 she has been collaborating permanently with Roula Pateraki. In 2013 she founded the Higher Private Vocational School of Dance \"AKTINA\".",
  mpaka: "She graduated in 1992 from the State School of Orchestral Art with honors. With a scholarship from the Koulas Pratsika Foundation, she continued her studies in New York for a year, studying modern dance techniques - Alexander Technique, contact improvisation, release technique. She is a founding member of the contemporary dance group \"SINE QUA NON\", with which she has collaborated as a dancer and choreographer since 1992. She has taught contemporary dance and movement to amateur, children, professional dancers and actors, giving special weight to body use by studying its anatomy. She works in theater as a choreographer - kinesiologist.",
  rouka: "She was born and raised in Athens. In 1998 she graduated from the \"Higher Vocational School of Dance of Despina Grigoriadou\" and from 1999 to 2005 she collaborated as a dancer with the National Opera. At the same time she participates in performances of Isidoros Sideris, Maro Grigoriou, Giannis Bagourdis and other choreographers while she assists choreographer Kyriakos Kosmidis in TV shows and theatrical performances. At the same time she attends ballet and musical jazz seminars in Greece and abroad. From 2004 until today she teaches ballet, pointes and musical jazz in state-recognized dance schools such as \"Horokinisi\", \"Modulor Dance Space\", the school of P.M.T.P and \"Studio Fix\". Since 2013, she teaches ballet and pointes at the Higher Vocational School of Dance \"AKTINA\".",
  topalidou: "She graduated from the National School of Dance (KSOT). She has collaborated with the dance theater \"OKTANA\", by Konstantinos Rigos, the \"Omada Edafous\", by Dimitris Papaioannou, the State Theater of Northern Greece, the National Theater, the Cyclades Street Theater, the Theater of the South, etc. She has taught ballet at \"Horokinisi\", at the dance school of Michalis Nalbantis \"Fix Dance Studio\", at the dance studio \"Baile de Barrio\" and at the Higher Professional School \"Rallou Manou\".",
  korfia: "She was born in Athens where she started dancing and at the age of 9 she was admitted to the Nursery of the National School of Dance. At the age of 16 she was admitted to the National Dance Academy in Budapest where she continued her studies. Shortly afterwards she danced with the Ballet of the Hungarian National Theater in Petz with director and choreographer Istvan Herczog and soon became the first dancer. As the first dancer of the National Ballet, she danced many classical and neoclassical roles such as Swanilda in the Coppelia ballet, Juliet in the Romeo and Juliet ballet and others. Since 2001 she has been teaching Ballet for professionals and Bare a terre at DANCCE and Ballet at the Nikis Kontaxakis-Nikolettas Bakali Higher School of Dance until 2020. Since 2019 he has been teaching in the professional departments of KSOT. She teaches seminars in groups and schools in Greece and abroad such as the Roes Dance Theater, the State Contemporary Dance Group of Wales Diversions, the DV8 Physical Dance Theater, the Dance Center of the Municipality of Limassol in Cyprus, the State Contemporary Dance Group of Denmark ( Danish Dance Theater), the Primary Dance School of Kalamata etc.",
  stellatou: "She was born in Athens in 1963. He graduated with honors from the State School of Orchestral Art. With a scholarship of the Onassis Foundation continued her studies in New York, at Merce Cunningham Dance Studios. At the same time she attended Contact Improvisation and Release Techniques seminars with K.J. Holmes, Jeremy Nelson, Daniel Lepkoff, Sarah Pearsons, Sarah Rudner and others. In 1987, together with Dimitris Papaioannou, they founded \"Omada Edafous, from which she left in 2001. She was honored with the award for best dancer for her solo \"Skalopatia\", from the performance \"Anthropini Dipsa\". In 2008 she was honored with the \"Koula Pratsika\" award of the Center for the Study and Research of the Greek Theater for the editing of the movement in the play Motortown (Theater of the New World). She has collaborated with various dance groups: Sine Qua Non, Analia, Chorika by Z. Nikoloudi, amorphy.org etc."
};
var horizontalLine = document.querySelector(".hor_line");
gsap.to(horizontalLine, {
  width: "28vw",
  duration: 1.2,
  ease: "expo.inOut"
});
var teachersDetailsContainers = document.querySelectorAll(".teacher_details_container");
var teacherBioContainer = document.querySelector(".teacher_bio_container");
var teacherBioHeadar = document.querySelector(".teacher_bio_header");
var teacherBioDetails = document.querySelector(".teacher_bio_details");

var _iterator = _createForOfIteratorHelper(teachersDetailsContainers),
    _step;

try {
  var _loop = function _loop() {
    var teacherDetailsContainer = _step.value;
    teacherDetailsContainer.addEventListener("mouseenter", teacherDetailsContainerMouseEnterListener);
    teacherDetailsContainer.addEventListener("mouseleave", teacherDetailsContainerMouseLeaveListener);
    teacherDetailsContainer.children[0].addEventListener("click", function (e) {
      var selectedTeacherImage = e.target;
      var selectedTeacherDetailsContainer = e.target.parentElement;
      var selectedTeacherDetailsContainerPosition = {
        left: window.getComputedStyle(selectedTeacherDetailsContainer).getPropertyValue("left"),
        top: window.getComputedStyle(selectedTeacherDetailsContainer).getPropertyValue("top")
      };
      var selectedTeacherImageDimensions = {
        width: window.getComputedStyle(selectedTeacherImage).getPropertyValue("width"),
        height: window.getComputedStyle(selectedTeacherImage).getPropertyValue("height"),
        zIndex: window.getComputedStyle(selectedTeacherImage).getPropertyValue("z-index")
      };
      selectedTeacherImage.style.zIndex = 4;
      teacherBioHeadar.innerHTML = teacherDetailsContainer.children[1].innerHTML.toUpperCase();

      if (teacherDetailsContainer.id == "teacher_details_container_1") {
        teacherBioDetails.innerHTML = teacherBios.betty;
      } else if (teacherDetailsContainer.id == "teacher_details_container_2") {
        teacherBioDetails.innerHTML = teacherBios.mpaka;
      } else if (teacherDetailsContainer.id == "teacher_details_container_3") {
        teacherBioDetails.innerHTML = teacherBios.rouka;
      } else if (teacherDetailsContainer.id == "teacher_details_container_4") {
        teacherBioDetails.innerHTML = teacherBios.topalidou;
      } else if (teacherDetailsContainer.id == "teacher_details_container_5") {
        teacherBioDetails.innerHTML = teacherBios.korfia;
      } else if (teacherDetailsContainer.id == "teacher_details_container_6") {
        teacherBioDetails.innerHTML = teacherBios.stellatou;
      }

      teacherDetailsContainer.removeEventListener("mouseenter", teacherDetailsContainerMouseEnterListener);
      teacherDetailsContainer.removeEventListener("mouseleave", teacherDetailsContainerMouseLeaveListener);
      document.body.classList.add("noscroll");
      gsap.to(teacherBioContainer, {
        left: "0%",
        opacity: 1,
        display: "block",
        duration: 1,
        ease: "expo.inOut"
      });
      gsap.to(selectedTeacherDetailsContainer, {
        left: 0,
        top: 0,
        delay: 1,
        duration: 1,
        ease: "expo.inOut"
      });
      gsap.to(selectedTeacherImage, {
        width: "45vw",
        height: "100vh",
        delay: 1,
        duration: 1,
        ease: "expo.inOut"
      });
      gsap.to(teacherBioHeadar, {
        display: "block",
        opacity: 1,
        delay: 1.5,
        duration: 0.3,
        ease: "expo.inOut"
      });
      gsap.to(teacherBioDetails, {
        display: "block",
        opacity: 1,
        delay: 1.5,
        duration: 0.3,
        ease: "expo.inOut"
      });
      teacherBioContainer.addEventListener("click", function () {
        teacherBioHeadar.innerHTML = "";
        teacherBioDetails.innerHTML = "";
        teacherDetailsContainer.addEventListener("mouseenter", teacherDetailsContainerMouseEnterListener);
        teacherDetailsContainer.addEventListener("mouseleave", teacherDetailsContainerMouseLeaveListener);
        document.body.classList.remove("noscroll");
        gsap.to(teacherBioHeadar, {
          display: "none",
          opacity: 0,
          duration: 0.3,
          ease: "expo.inOut"
        });
        gsap.to(teacherBioDetails, {
          display: "none",
          opacity: 0,
          duration: 0.3,
          ease: "expo.inOut"
        });
        gsap.to(selectedTeacherDetailsContainer, {
          left: selectedTeacherDetailsContainerPosition.left,
          top: selectedTeacherDetailsContainerPosition.top,
          delay: 0.3,
          duration: 1,
          ease: "expo.inOut"
        });
        gsap.to(selectedTeacherImage, {
          width: selectedTeacherImageDimensions.width,
          height: selectedTeacherImageDimensions.height,
          zIndex: selectedTeacherImageDimensions.zIndex,
          delay: 1,
          duration: 1,
          ease: "expo.inOut"
        });
        gsap.to(selectedTeacherDetailsContainer.children[1], {
          opacity: 1,
          display: "block",
          duration: 0.3,
          delay: 1,
          ease: "expo.inOut"
        });
        gsap.to(teacherBioContainer, {
          left: "100%",
          opacity: 0,
          display: "none",
          duration: 1,
          delay: 0.8,
          ease: "expo.inOut"
        });
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var teacherImageZindex;

function teacherDetailsContainerMouseEnterListener(e) {
  teacherImageZindex = window.getComputedStyle(e.target).getPropertyValue("z-index"); // e.target.children[0].style.zIndex = 4;

  gsap.to(e.target.children[0], {
    x: -20,
    y: -20,
    scale: 1.1,
    duration: 0.3
  });
  gsap.to(e.target.children[1], {
    scale: 1.1,
    y: -10,
    duration: 0.3
  });
}

function teacherDetailsContainerMouseLeaveListener(e) {
  // e.target.children[0].style.zIndex = teacherImageZindex;
  gsap.to(e.target.children[0], {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.3
  });
  gsap.to(e.target.children[1], {
    scale: 1,
    y: 0,
    duration: 0.3
  });
}
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64258" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/professional_classes.js"], null)
//# sourceMappingURL=/professional_classes.b290cf8b.js.map