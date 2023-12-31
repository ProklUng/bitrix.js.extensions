/* eslint-disable */
this.BX = this.BX || {};
(function (exports,ui_vue) {
    'use strict';

    var ExampleComponent = {
      data: function data() {
        return {
          greatings: 'I am vue component'
        };
      },
      mounted: function mounted() {},
      components: {},
      template: '<div> {{ greatings }}</div>'
    };

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    function createCommonjsModule(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }

    var vue2Dropzone = createCommonjsModule(function (module, exports) {
    !function (e, t) {
      "object" == (babelHelpers["typeof"](exports)) && "undefined" != 'object' ? module.exports = t() : (e = e || self).vue2Dropzone = t();
    }(commonjsGlobal, function () {

      var e,
        t = (function (e) {
          var t = function () {
            function e(e, t) {
              for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
              }
            }
            return function (t, i, n) {
              return i && e(t.prototype, i), n && e(t, n), t;
            };
          }();
          function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != babelHelpers["typeof"](t) && "function" != typeof t ? e : t;
          }
          function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }
          var r = function () {
              function e() {
                n(this, e);
              }
              return t(e, [{
                key: "on",
                value: function value(e, t) {
                  return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this;
                }
              }, {
                key: "emit",
                value: function value(e) {
                  this._callbacks = this._callbacks || {};
                  var t = this._callbacks[e];
                  if (t) {
                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    for (var o = 0, s = s = t;;) {
                      if (o >= s.length) break;
                      s[o++].apply(this, n);
                    }
                  }
                  return this;
                }
              }, {
                key: "off",
                value: function value(e, t) {
                  if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                  var i = this._callbacks[e];
                  if (!i) return this;
                  if (1 === arguments.length) return delete this._callbacks[e], this;
                  for (var n = 0; n < i.length; n++) {
                    if (i[n] === t) {
                      i.splice(n, 1);
                      break;
                    }
                  }
                  return this;
                }
              }]), e;
            }(),
            o = function (e) {
              function o(e, t) {
                n(this, o);
                var r,
                  s = i(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this)),
                  a = void 0;
                if (s.element = e, s.version = o.version, s.defaultOptions.previewTemplate = s.defaultOptions.previewTemplate.replace(/\n*/g, ""), s.clickableElements = [], s.listeners = [], s.files = [], "string" == typeof s.element && (s.element = document.querySelector(s.element)), !s.element || null == s.element.nodeType) throw new Error("Invalid dropzone element.");
                if (s.element.dropzone) throw new Error("Dropzone already attached.");
                o.instances.push(s), s.element.dropzone = s;
                var l,
                  u = null != (r = o.optionsForElement(s.element)) ? r : {};
                if (s.options = o.extend({}, s.defaultOptions, u, null != t ? t : {}), s.options.forceFallback || !o.isBrowserSupported()) return l = s.options.fallback.call(s), i(s, l);
                if (null == s.options.url && (s.options.url = s.element.getAttribute("action")), !s.options.url) throw new Error("No URL provided.");
                if (s.options.acceptedFiles && s.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                if (s.options.uploadMultiple && s.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
                return s.options.acceptedMimeTypes && (s.options.acceptedFiles = s.options.acceptedMimeTypes, delete s.options.acceptedMimeTypes), null != s.options.renameFilename && (s.options.renameFile = function (e) {
                  return s.options.renameFilename.call(s, e.name, e);
                }), s.options.method = s.options.method.toUpperCase(), (a = s.getExistingFallback()) && a.parentNode && a.parentNode.removeChild(a), !1 !== s.options.previewsContainer && (s.options.previewsContainer ? s.previewsContainer = o.getElement(s.options.previewsContainer, "previewsContainer") : s.previewsContainer = s.element), s.options.clickable && (!0 === s.options.clickable ? s.clickableElements = [s.element] : s.clickableElements = o.getElements(s.options.clickable, "clickable")), s.init(), s;
              }
              return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + babelHelpers["typeof"](t));
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
              }(o, r), t(o, null, [{
                key: "initClass",
                value: function value() {
                  this.prototype.Emitter = r, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: !1,
                    timeout: 3e4,
                    parallelUploads: 2,
                    uploadMultiple: !1,
                    chunking: !1,
                    forceChunking: !1,
                    chunkSize: 2e6,
                    parallelChunkUploads: !1,
                    retryChunks: !1,
                    retryChunksLimit: 3,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: !0,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 120,
                    thumbnailHeight: 120,
                    thumbnailMethod: "crop",
                    resizeWidth: null,
                    resizeHeight: null,
                    resizeMimeType: null,
                    resizeQuality: .8,
                    resizeMethod: "contain",
                    filesizeBase: 1e3,
                    maxFiles: null,
                    headers: null,
                    clickable: !0,
                    ignoreHiddenFiles: !0,
                    acceptedFiles: null,
                    acceptedMimeTypes: null,
                    autoProcessQueue: !0,
                    autoQueue: !0,
                    addRemoveLinks: !1,
                    previewsContainer: null,
                    hiddenInputContainer: "body",
                    capture: null,
                    renameFilename: null,
                    renameFile: null,
                    forceFallback: !1,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictUploadCanceled: "Upload canceled.",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: "You can not upload any more files.",
                    dictFileSizeUnits: {
                      tb: "TB",
                      gb: "GB",
                      mb: "MB",
                      kb: "KB",
                      b: "b"
                    },
                    init: function init() {},
                    params: function params(e, t, i) {
                      if (i) return {
                        dzuuid: i.file.upload.uuid,
                        dzchunkindex: i.index,
                        dztotalfilesize: i.file.size,
                        dzchunksize: this.options.chunkSize,
                        dztotalchunkcount: i.file.upload.totalChunkCount,
                        dzchunkbyteoffset: i.index * this.options.chunkSize
                      };
                    },
                    accept: function accept(e, t) {
                      return t();
                    },
                    chunksUploaded: function chunksUploaded(e, t) {
                      t();
                    },
                    fallback: function fallback() {
                      var e = void 0;
                      this.element.className = this.element.className + " dz-browser-not-supported";
                      for (var t = 0, i = i = this.element.getElementsByTagName("div");;) {
                        if (t >= i.length) break;
                        var n = i[t++];
                        if (/(^| )dz-message($| )/.test(n.className)) {
                          e = n, n.className = "dz-message";
                          break;
                        }
                      }
                      e || (e = o.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                      var r = e.getElementsByTagName("span")[0];
                      return r && (null != r.textContent ? r.textContent = this.options.dictFallbackMessage : null != r.innerText && (r.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm());
                    },
                    resize: function resize(e, t, i, n) {
                      var r = {
                          srcX: 0,
                          srcY: 0,
                          srcWidth: e.width,
                          srcHeight: e.height
                        },
                        o = e.width / e.height;
                      null == t && null == i ? (t = r.srcWidth, i = r.srcHeight) : null == t ? t = i * o : null == i && (i = t / o);
                      var s = (t = Math.min(t, r.srcWidth)) / (i = Math.min(i, r.srcHeight));
                      if (r.srcWidth > t || r.srcHeight > i) if ("crop" === n) o > s ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * s) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / s);else {
                        if ("contain" !== n) throw new Error("Unknown resizeMethod '" + n + "'");
                        o > s ? i = t / o : t = i * o;
                      }
                      return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = i, r;
                    },
                    transformFile: function transformFile(e, t) {
                      return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e);
                    },
                    previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                    drop: function drop(e) {
                      return this.element.classList.remove("dz-drag-hover");
                    },
                    dragstart: function dragstart(e) {},
                    dragend: function dragend(e) {
                      return this.element.classList.remove("dz-drag-hover");
                    },
                    dragenter: function dragenter(e) {
                      return this.element.classList.add("dz-drag-hover");
                    },
                    dragover: function dragover(e) {
                      return this.element.classList.add("dz-drag-hover");
                    },
                    dragleave: function dragleave(e) {
                      return this.element.classList.remove("dz-drag-hover");
                    },
                    paste: function paste(e) {},
                    reset: function reset() {
                      return this.element.classList.remove("dz-started");
                    },
                    addedfile: function addedfile(e) {
                      var t = this;
                      if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                        e.previewElement = o.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement);
                        for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-name]");;) {
                          if (i >= n.length) break;
                          var r = n[i++];
                          r.textContent = e.name;
                        }
                        for (var s = 0, a = a = e.previewElement.querySelectorAll("[data-dz-size]"); !(s >= a.length);) (r = a[s++]).innerHTML = this.filesize(e.size);
                        this.options.addRemoveLinks && (e._removeLink = o.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink));
                        for (var l = function l(i) {
                            return i.preventDefault(), i.stopPropagation(), e.status === o.UPLOADING ? o.confirm(t.options.dictCancelUploadConfirmation, function () {
                              return t.removeFile(e);
                            }) : t.options.dictRemoveFileConfirmation ? o.confirm(t.options.dictRemoveFileConfirmation, function () {
                              return t.removeFile(e);
                            }) : t.removeFile(e);
                          }, u = 0, d = d = e.previewElement.querySelectorAll("[data-dz-remove]");;) {
                          if (u >= d.length) break;
                          d[u++].addEventListener("click", l);
                        }
                      }
                    },
                    removedfile: function removedfile(e) {
                      return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass();
                    },
                    thumbnail: function thumbnail(e, t) {
                      if (e.previewElement) {
                        e.previewElement.classList.remove("dz-file-preview");
                        for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-thumbnail]");;) {
                          if (i >= n.length) break;
                          var r = n[i++];
                          r.alt = e.name, r.src = t;
                        }
                        return setTimeout(function () {
                          return e.previewElement.classList.add("dz-image-preview");
                        }, 1);
                      }
                    },
                    error: function error(e, t) {
                      if (e.previewElement) {
                        e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
                        for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-errormessage]");;) {
                          if (i >= n.length) break;
                          n[i++].textContent = t;
                        }
                      }
                    },
                    errormultiple: function errormultiple() {},
                    processing: function processing(e) {
                      if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload;
                    },
                    processingmultiple: function processingmultiple() {},
                    uploadprogress: function uploadprogress(e, t, i) {
                      if (e.previewElement) for (var n = 0, r = r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;) {
                        if (n >= r.length) break;
                        var o = r[n++];
                        "PROGRESS" === o.nodeName ? o.value = t : o.style.width = t + "%";
                      }
                    },
                    totaluploadprogress: function totaluploadprogress() {},
                    sending: function sending() {},
                    sendingmultiple: function sendingmultiple() {},
                    success: function success(e) {
                      if (e.previewElement) return e.previewElement.classList.add("dz-success");
                    },
                    successmultiple: function successmultiple() {},
                    canceled: function canceled(e) {
                      return this.emit("error", e, this.options.dictUploadCanceled);
                    },
                    canceledmultiple: function canceledmultiple() {},
                    complete: function complete(e) {
                      if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete");
                    },
                    completemultiple: function completemultiple() {},
                    maxfilesexceeded: function maxfilesexceeded() {},
                    maxfilesreached: function maxfilesreached() {},
                    queuecomplete: function queuecomplete() {},
                    addedfiles: function addedfiles() {}
                  }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1;
                }
              }, {
                key: "extend",
                value: function value(e) {
                  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                  for (var r = 0, o = o = i;;) {
                    if (r >= o.length) break;
                    var s = o[r++];
                    for (var a in s) {
                      var l = s[a];
                      e[a] = l;
                    }
                  }
                  return e;
                }
              }]), t(o, [{
                key: "getAcceptedFiles",
                value: function value() {
                  return this.files.filter(function (e) {
                    return e.accepted;
                  }).map(function (e) {
                    return e;
                  });
                }
              }, {
                key: "getRejectedFiles",
                value: function value() {
                  return this.files.filter(function (e) {
                    return !e.accepted;
                  }).map(function (e) {
                    return e;
                  });
                }
              }, {
                key: "getFilesWithStatus",
                value: function value(e) {
                  return this.files.filter(function (t) {
                    return t.status === e;
                  }).map(function (e) {
                    return e;
                  });
                }
              }, {
                key: "getQueuedFiles",
                value: function value() {
                  return this.getFilesWithStatus(o.QUEUED);
                }
              }, {
                key: "getUploadingFiles",
                value: function value() {
                  return this.getFilesWithStatus(o.UPLOADING);
                }
              }, {
                key: "getAddedFiles",
                value: function value() {
                  return this.getFilesWithStatus(o.ADDED);
                }
              }, {
                key: "getActiveFiles",
                value: function value() {
                  return this.files.filter(function (e) {
                    return e.status === o.UPLOADING || e.status === o.QUEUED;
                  }).map(function (e) {
                    return e;
                  });
                }
              }, {
                key: "init",
                value: function value() {
                  var e = this;
                  if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(o.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length) {
                    !function t() {
                      return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", o.getElement(e.options.hiddenInputContainer, "hiddenInputContainer").appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function () {
                        var i = e.hiddenFileInput.files;
                        if (i.length) for (var n = 0, r = r = i; !(n >= r.length);) {
                          var o = r[n++];
                          e.addFile(o);
                        }
                        return e.emit("addedfiles", i), t();
                      });
                    }();
                  }
                  this.URL = null !== window.URL ? window.URL : window.webkitURL;
                  for (var t = 0, i = i = this.events;;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    this.on(n, this.options[n]);
                  }
                  this.on("uploadprogress", function () {
                    return e.updateTotalUploadProgress();
                  }), this.on("removedfile", function () {
                    return e.updateTotalUploadProgress();
                  }), this.on("canceled", function (t) {
                    return e.emit("complete", t);
                  }), this.on("complete", function (t) {
                    if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function () {
                      return e.emit("queuecomplete");
                    }, 0);
                  });
                  var r = function r(e) {
                    return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                  };
                  return this.listeners = [{
                    element: this.element,
                    events: {
                      dragstart: function dragstart(t) {
                        return e.emit("dragstart", t);
                      },
                      dragenter: function dragenter(t) {
                        return r(t), e.emit("dragenter", t);
                      },
                      dragover: function dragover(t) {
                        var i = void 0;
                        try {
                          i = t.dataTransfer.effectAllowed;
                        } catch (e) {}
                        return t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", r(t), e.emit("dragover", t);
                      },
                      dragleave: function dragleave(t) {
                        return e.emit("dragleave", t);
                      },
                      drop: function drop(t) {
                        return r(t), e.drop(t);
                      },
                      dragend: function dragend(t) {
                        return e.emit("dragend", t);
                      }
                    }
                  }], this.clickableElements.forEach(function (t) {
                    return e.listeners.push({
                      element: t,
                      events: {
                        click: function click(i) {
                          return (t !== e.element || i.target === e.element || o.elementInside(i.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0;
                        }
                      }
                    });
                  }), this.enable(), this.options.init.call(this);
                }
              }, {
                key: "destroy",
                value: function value() {
                  return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, o.instances.splice(o.instances.indexOf(this), 1);
                }
              }, {
                key: "updateTotalUploadProgress",
                value: function value() {
                  var e = void 0,
                    t = 0,
                    i = 0;
                  if (this.getActiveFiles().length) {
                    for (var n = 0, r = r = this.getActiveFiles();;) {
                      if (n >= r.length) break;
                      var o = r[n++];
                      t += o.upload.bytesSent, i += o.upload.total;
                    }
                    e = 100 * t / i;
                  } else e = 100;
                  return this.emit("totaluploadprogress", e, i, t);
                }
              }, {
                key: "_getParamName",
                value: function value(e) {
                  return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "");
                }
              }, {
                key: "_renameFile",
                value: function value(e) {
                  return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e);
                }
              }, {
                key: "getFallbackForm",
                value: function value() {
                  var e,
                    t = void 0;
                  if (e = this.getExistingFallback()) return e;
                  var i = '<div class="dz-fallback">';
                  this.options.dictFallbackText && (i += "<p>" + this.options.dictFallbackText + "</p>"), i += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>';
                  var n = o.createElement(i);
                  return "FORM" !== this.element.tagName ? (t = o.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(n) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : n;
                }
              }, {
                key: "getExistingFallback",
                value: function value() {
                  for (var e = function e(_e) {
                      for (var t = 0, i = i = _e;;) {
                        if (t >= i.length) break;
                        var n = i[t++];
                        if (/(^| )fallback($| )/.test(n.className)) return n;
                      }
                    }, t = ["div", "form"], i = 0; i < t.length; i++) {
                    var n,
                      r = t[i];
                    if (n = e(this.element.getElementsByTagName(r))) return n;
                  }
                }
              }, {
                key: "setupEventListeners",
                value: function value() {
                  return this.listeners.map(function (e) {
                    return function () {
                      var t = [];
                      for (var i in e.events) {
                        var n = e.events[i];
                        t.push(e.element.addEventListener(i, n, !1));
                      }
                      return t;
                    }();
                  });
                }
              }, {
                key: "removeEventListeners",
                value: function value() {
                  return this.listeners.map(function (e) {
                    return function () {
                      var t = [];
                      for (var i in e.events) {
                        var n = e.events[i];
                        t.push(e.element.removeEventListener(i, n, !1));
                      }
                      return t;
                    }();
                  });
                }
              }, {
                key: "disable",
                value: function value() {
                  var e = this;
                  return this.clickableElements.forEach(function (e) {
                    return e.classList.remove("dz-clickable");
                  }), this.removeEventListeners(), this.disabled = !0, this.files.map(function (t) {
                    return e.cancelUpload(t);
                  });
                }
              }, {
                key: "enable",
                value: function value() {
                  return delete this.disabled, this.clickableElements.forEach(function (e) {
                    return e.classList.add("dz-clickable");
                  }), this.setupEventListeners();
                }
              }, {
                key: "filesize",
                value: function value(e) {
                  var t = 0,
                    i = "b";
                  if (e > 0) {
                    for (var n = ["tb", "gb", "mb", "kb", "b"], r = 0; r < n.length; r++) {
                      var o = n[r];
                      if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                        t = e / Math.pow(this.options.filesizeBase, 4 - r), i = o;
                        break;
                      }
                    }
                    t = Math.round(10 * t) / 10;
                  }
                  return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[i];
                }
              }, {
                key: "_updateMaxFilesReachedClass",
                value: function value() {
                  return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
                }
              }, {
                key: "drop",
                value: function value(e) {
                  if (e.dataTransfer) {
                    this.emit("drop", e);
                    for (var t = [], i = 0; i < e.dataTransfer.files.length; i++) t[i] = e.dataTransfer.files[i];
                    if (this.emit("addedfiles", t), t.length) {
                      var n = e.dataTransfer.items;
                      n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t);
                    }
                  }
                }
              }, {
                key: "paste",
                value: function value(e) {
                  if (null != (t = null != e ? e.clipboardData : void 0, i = function i(e) {
                    return e.items;
                  }, null != t ? i(t) : void 0)) {
                    var t, i;
                    this.emit("paste", e);
                    var n = e.clipboardData.items;
                    return n.length ? this._addFilesFromItems(n) : void 0;
                  }
                }
              }, {
                key: "handleFiles",
                value: function value(e) {
                  for (var t = 0, i = i = e;;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    this.addFile(n);
                  }
                }
              }, {
                key: "_addFilesFromItems",
                value: function value(e) {
                  var t = this;
                  return function () {
                    for (var i = [], n = 0, r = r = e;;) {
                      if (n >= r.length) break;
                      var o,
                        s = r[n++];
                      null != s.webkitGetAsEntry && (o = s.webkitGetAsEntry()) ? o.isFile ? i.push(t.addFile(s.getAsFile())) : o.isDirectory ? i.push(t._addFilesFromDirectory(o, o.name)) : i.push(void 0) : null != s.getAsFile && (null == s.kind || "file" === s.kind) ? i.push(t.addFile(s.getAsFile())) : i.push(void 0);
                    }
                    return i;
                  }();
                }
              }, {
                key: "_addFilesFromDirectory",
                value: function value(e, t) {
                  var i = this,
                    n = e.createReader(),
                    r = function r(e) {
                      return t = console, i = "log", n = function n(t) {
                        return t.log(e);
                      }, null != t && "function" == typeof t[i] ? n(t, i) : void 0;
                      var t, i, n;
                    };
                  return function e() {
                    return n.readEntries(function (n) {
                      if (n.length > 0) {
                        for (var r = 0, o = o = n; !(r >= o.length);) {
                          var s = o[r++];
                          s.isFile ? s.file(function (e) {
                            if (!i.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = t + "/" + e.name, i.addFile(e);
                          }) : s.isDirectory && i._addFilesFromDirectory(s, t + "/" + s.name);
                        }
                        e();
                      }
                      return null;
                    }, r);
                  }();
                }
              }, {
                key: "accept",
                value: function value(e, t) {
                  return this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : o.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType);
                }
              }, {
                key: "addFile",
                value: function value(e) {
                  var t = this;
                  return e.upload = {
                    uuid: o.uuidv4(),
                    progress: 0,
                    total: e.size,
                    bytesSent: 0,
                    filename: this._renameFile(e),
                    chunked: this.options.chunking && (this.options.forceChunking || e.size > this.options.chunkSize),
                    totalChunkCount: Math.ceil(e.size / this.options.chunkSize)
                  }, this.files.push(e), e.status = o.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function (i) {
                    return i ? (e.accepted = !1, t._errorProcessing([e], i)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass();
                  });
                }
              }, {
                key: "enqueueFiles",
                value: function value(e) {
                  for (var t = 0, i = i = e;;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    this.enqueueFile(n);
                  }
                  return null;
                }
              }, {
                key: "enqueueFile",
                value: function value(e) {
                  var t = this;
                  if (e.status !== o.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                  if (e.status = o.QUEUED, this.options.autoProcessQueue) return setTimeout(function () {
                    return t.processQueue();
                  }, 0);
                }
              }, {
                key: "_enqueueThumbnail",
                value: function value(e) {
                  var t = this;
                  if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function () {
                    return t._processThumbnailQueue();
                  }, 0);
                }
              }, {
                key: "_processThumbnailQueue",
                value: function value() {
                  var e = this;
                  if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                    this._processingThumbnail = !0;
                    var t = this._thumbnailQueue.shift();
                    return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function (i) {
                      return e.emit("thumbnail", t, i), e._processingThumbnail = !1, e._processThumbnailQueue();
                    });
                  }
                }
              }, {
                key: "removeFile",
                value: function value(e) {
                  if (e.status === o.UPLOADING && this.cancelUpload(e), this.files = s(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset");
                }
              }, {
                key: "removeAllFiles",
                value: function value(e) {
                  null == e && (e = !1);
                  for (var t = 0, i = i = this.files.slice();;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    (n.status !== o.UPLOADING || e) && this.removeFile(n);
                  }
                  return null;
                }
              }, {
                key: "resizeImage",
                value: function value(e, t, i, n, r) {
                  var s = this;
                  return this.createThumbnail(e, t, i, n, !0, function (t, i) {
                    if (null == i) return r(e);
                    var n = s.options.resizeMimeType;
                    null == n && (n = e.type);
                    var a = i.toDataURL(n, s.options.resizeQuality);
                    return "image/jpeg" !== n && "image/jpg" !== n || (a = u.restore(e.dataURL, a)), r(o.dataURItoBlob(a));
                  });
                }
              }, {
                key: "createThumbnail",
                value: function value(e, t, i, n, r, o) {
                  var s = this,
                    a = new FileReader();
                  return a.onload = function () {
                    if (e.dataURL = a.result, "image/svg+xml" !== e.type) return s.createThumbnailFromUrl(e, t, i, n, r, o);
                    null != o && o(a.result);
                  }, a.readAsDataURL(e);
                }
              }, {
                key: "createThumbnailFromUrl",
                value: function value(e, t, i, n, r, o, s) {
                  var a = this,
                    u = document.createElement("img");
                  return s && (u.crossOrigin = s), u.onload = function () {
                    var s = function s(e) {
                      return e(1);
                    };
                    return "undefined" != typeof EXIF && null !== EXIF && r && (s = function s(e) {
                      return EXIF.getData(u, function () {
                        return e(EXIF.getTag(this, "Orientation"));
                      });
                    }), s(function (r) {
                      e.width = u.width, e.height = u.height;
                      var s = a.options.resize.call(a, e, t, i, n),
                        d = document.createElement("canvas"),
                        c = d.getContext("2d");
                      switch (d.width = s.trgWidth, d.height = s.trgHeight, r > 4 && (d.width = s.trgHeight, d.height = s.trgWidth), r) {
                        case 2:
                          c.translate(d.width, 0), c.scale(-1, 1);
                          break;
                        case 3:
                          c.translate(d.width, d.height), c.rotate(Math.PI);
                          break;
                        case 4:
                          c.translate(0, d.height), c.scale(1, -1);
                          break;
                        case 5:
                          c.rotate(.5 * Math.PI), c.scale(1, -1);
                          break;
                        case 6:
                          c.rotate(.5 * Math.PI), c.translate(0, -d.width);
                          break;
                        case 7:
                          c.rotate(.5 * Math.PI), c.translate(d.height, -d.width), c.scale(-1, 1);
                          break;
                        case 8:
                          c.rotate(-.5 * Math.PI), c.translate(-d.height, 0);
                      }
                      l(c, u, null != s.srcX ? s.srcX : 0, null != s.srcY ? s.srcY : 0, s.srcWidth, s.srcHeight, null != s.trgX ? s.trgX : 0, null != s.trgY ? s.trgY : 0, s.trgWidth, s.trgHeight);
                      var p = d.toDataURL("image/png");
                      if (null != o) return o(p, d);
                    });
                  }, null != o && (u.onerror = o), u.src = e.dataURL;
                }
              }, {
                key: "processQueue",
                value: function value() {
                  var e = this.options.parallelUploads,
                    t = this.getUploadingFiles().length,
                    i = t;
                  if (!(t >= e)) {
                    var n = this.getQueuedFiles();
                    if (n.length > 0) {
                      if (this.options.uploadMultiple) return this.processFiles(n.slice(0, e - t));
                      for (; i < e;) {
                        if (!n.length) return;
                        this.processFile(n.shift()), i++;
                      }
                    }
                  }
                }
              }, {
                key: "processFile",
                value: function value(e) {
                  return this.processFiles([e]);
                }
              }, {
                key: "processFiles",
                value: function value(e) {
                  for (var t = 0, i = i = e;;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    n.processing = !0, n.status = o.UPLOADING, this.emit("processing", n);
                  }
                  return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e);
                }
              }, {
                key: "_getFilesWithXhr",
                value: function value(e) {
                  return this.files.filter(function (t) {
                    return t.xhr === e;
                  }).map(function (e) {
                    return e;
                  });
                }
              }, {
                key: "cancelUpload",
                value: function value(e) {
                  if (e.status === o.UPLOADING) {
                    for (var t = this._getFilesWithXhr(e.xhr), i = 0, n = n = t;;) {
                      if (i >= n.length) break;
                      n[i++].status = o.CANCELED;
                    }
                    void 0 !== e.xhr && e.xhr.abort();
                    for (var r = 0, s = s = t;;) {
                      if (r >= s.length) break;
                      var a = s[r++];
                      this.emit("canceled", a);
                    }
                    this.options.uploadMultiple && this.emit("canceledmultiple", t);
                  } else e.status !== o.ADDED && e.status !== o.QUEUED || (e.status = o.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                  if (this.options.autoProcessQueue) return this.processQueue();
                }
              }, {
                key: "resolveOption",
                value: function value(e) {
                  if ("function" == typeof e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    return e.apply(this, i);
                  }
                  return e;
                }
              }, {
                key: "uploadFile",
                value: function value(e) {
                  return this.uploadFiles([e]);
                }
              }, {
                key: "uploadFiles",
                value: function value(e) {
                  var t = this;
                  this._transformFiles(e, function (i) {
                    if (e[0].upload.chunked) {
                      var n = e[0],
                        r = i[0];
                      n.upload.chunks = [];
                      var s = function s() {
                        for (var i = 0; void 0 !== n.upload.chunks[i];) i++;
                        if (!(i >= n.upload.totalChunkCount)) {
                          var s = i * t.options.chunkSize,
                            a = Math.min(s + t.options.chunkSize, n.size),
                            l = {
                              name: t._getParamName(0),
                              data: r.webkitSlice ? r.webkitSlice(s, a) : r.slice(s, a),
                              filename: n.upload.filename,
                              chunkIndex: i
                            };
                          n.upload.chunks[i] = {
                            file: n,
                            index: i,
                            dataBlock: l,
                            status: o.UPLOADING,
                            progress: 0,
                            retries: 0
                          }, t._uploadData(e, [l]);
                        }
                      };
                      if (n.upload.finishedChunkUpload = function (i) {
                        var r = !0;
                        i.status = o.SUCCESS, i.dataBlock = null, i.xhr = null;
                        for (var a = 0; a < n.upload.totalChunkCount; a++) {
                          if (void 0 === n.upload.chunks[a]) return s();
                          n.upload.chunks[a].status !== o.SUCCESS && (r = !1);
                        }
                        r && t.options.chunksUploaded(n, function () {
                          t._finished(e, "", null);
                        });
                      }, t.options.parallelChunkUploads) for (var a = 0; a < n.upload.totalChunkCount; a++) s();else s();
                    } else {
                      for (var l = [], u = 0; u < e.length; u++) l[u] = {
                        name: t._getParamName(u),
                        data: i[u],
                        filename: e[u].upload.filename
                      };
                      t._uploadData(e, l);
                    }
                  });
                }
              }, {
                key: "_getChunk",
                value: function value(e, t) {
                  for (var i = 0; i < e.upload.totalChunkCount; i++) if (void 0 !== e.upload.chunks[i] && e.upload.chunks[i].xhr === t) return e.upload.chunks[i];
                }
              }, {
                key: "_uploadData",
                value: function value(e, t) {
                  for (var i = this, n = new XMLHttpRequest(), r = 0, s = s = e;;) {
                    if (r >= s.length) break;
                    s[r++].xhr = n;
                  }
                  e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = n);
                  var a = this.resolveOption(this.options.method, e),
                    l = this.resolveOption(this.options.url, e);
                  n.open(a, l, !0), n.timeout = this.resolveOption(this.options.timeout, e), n.withCredentials = !!this.options.withCredentials, n.onload = function (t) {
                    i._finishedUploading(e, n, t);
                  }, n.onerror = function () {
                    i._handleUploadError(e, n);
                  }, (null != n.upload ? n.upload : n).onprogress = function (t) {
                    return i._updateFilesUploadProgress(e, n, t);
                  };
                  var u = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                  };
                  for (var d in this.options.headers && o.extend(u, this.options.headers), u) {
                    var c = u[d];
                    c && n.setRequestHeader(d, c);
                  }
                  var p = new FormData();
                  if (this.options.params) {
                    var h = this.options.params;
                    for (var f in "function" == typeof h && (h = h.call(this, e, n, e[0].upload.chunked ? this._getChunk(e[0], n) : null)), h) {
                      var m = h[f];
                      p.append(f, m);
                    }
                  }
                  for (var v = 0, g = g = e;;) {
                    if (v >= g.length) break;
                    var k = g[v++];
                    this.emit("sending", k, n, p);
                  }
                  this.options.uploadMultiple && this.emit("sendingmultiple", e, n, p), this._addFormElementData(p);
                  for (var y = 0; y < t.length; y++) {
                    var b = t[y];
                    p.append(b.name, b.data, b.filename);
                  }
                  this.submitRequest(n, p, e);
                }
              }, {
                key: "_transformFiles",
                value: function value(e, t) {
                  for (var i = this, n = [], r = 0, o = function o(_o) {
                      i.options.transformFile.call(i, e[_o], function (i) {
                        n[_o] = i, ++r === e.length && t(n);
                      });
                    }, s = 0; s < e.length; s++) o(s);
                }
              }, {
                key: "_addFormElementData",
                value: function value(e) {
                  if ("FORM" === this.element.tagName) for (var t = 0, i = i = this.element.querySelectorAll("input, textarea, select, button");;) {
                    if (t >= i.length) break;
                    var n = i[t++],
                      r = n.getAttribute("name"),
                      o = n.getAttribute("type");
                    if (o && (o = o.toLowerCase()), null != r) if ("SELECT" === n.tagName && n.hasAttribute("multiple")) for (var s = 0, a = a = n.options;;) {
                      if (s >= a.length) break;
                      var l = a[s++];
                      l.selected && e.append(r, l.value);
                    } else (!o || "checkbox" !== o && "radio" !== o || n.checked) && e.append(r, n.value);
                  }
                }
              }, {
                key: "_updateFilesUploadProgress",
                value: function value(e, t, i) {
                  var n = void 0;
                  if (void 0 !== i) {
                    if (n = 100 * i.loaded / i.total, e[0].upload.chunked) {
                      var r = e[0],
                        o = this._getChunk(r, t);
                      o.progress = n, o.total = i.total, o.bytesSent = i.loaded, r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0;
                      for (var s = 0; s < r.upload.totalChunkCount; s++) void 0 !== r.upload.chunks[s] && void 0 !== r.upload.chunks[s].progress && (r.upload.progress += r.upload.chunks[s].progress, r.upload.total += r.upload.chunks[s].total, r.upload.bytesSent += r.upload.chunks[s].bytesSent);
                      r.upload.progress = r.upload.progress / r.upload.totalChunkCount;
                    } else for (var a = 0, l = l = e;;) {
                      if (a >= l.length) break;
                      var u = l[a++];
                      u.upload.progress = n, u.upload.total = i.total, u.upload.bytesSent = i.loaded;
                    }
                    for (var d = 0, c = c = e;;) {
                      if (d >= c.length) break;
                      var p = c[d++];
                      this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent);
                    }
                  } else {
                    var h = !0;
                    n = 100;
                    for (var f = 0, m = m = e;;) {
                      if (f >= m.length) break;
                      var v = m[f++];
                      100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (h = !1), v.upload.progress = n, v.upload.bytesSent = v.upload.total;
                    }
                    if (h) return;
                    for (var g = 0, k = k = e;;) {
                      if (g >= k.length) break;
                      var y = k[g++];
                      this.emit("uploadprogress", y, n, y.upload.bytesSent);
                    }
                  }
                }
              }, {
                key: "_finishedUploading",
                value: function value(e, t, i) {
                  var n = void 0;
                  if (e[0].status !== o.CANCELED && 4 === t.readyState) {
                    if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (n = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
                      n = JSON.parse(n);
                    } catch (e) {
                      i = e, n = "Invalid JSON response from server.";
                    }
                    this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, n, i) : this._handleUploadError(e, t, n);
                  }
                }
              }, {
                key: "_handleUploadError",
                value: function value(e, t, i) {
                  if (e[0].status !== o.CANCELED) {
                    if (e[0].upload.chunked && this.options.retryChunks) {
                      var n = this._getChunk(e[0], t);
                      if (n.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [n.dataBlock]);
                      console.warn("Retried this chunk too often. Giving up.");
                    }
                    for (var r = 0, s = s = e;;) {
                      if (r >= s.length) break;
                      s[r++], this._errorProcessing(e, i || this.options.dictResponseError.replace("{{statusCode}}", t.status), t);
                    }
                  }
                }
              }, {
                key: "submitRequest",
                value: function value(e, t, i) {
                  e.send(t);
                }
              }, {
                key: "_finished",
                value: function value(e, t, i) {
                  for (var n = 0, r = r = e;;) {
                    if (n >= r.length) break;
                    var s = r[n++];
                    s.status = o.SUCCESS, this.emit("success", s, t, i), this.emit("complete", s);
                  }
                  if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue();
                }
              }, {
                key: "_errorProcessing",
                value: function value(e, t, i) {
                  for (var n = 0, r = r = e;;) {
                    if (n >= r.length) break;
                    var s = r[n++];
                    s.status = o.ERROR, this.emit("error", s, t, i), this.emit("complete", s);
                  }
                  if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue();
                }
              }], [{
                key: "uuidv4",
                value: function value() {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16);
                  });
                }
              }]), o;
            }();
          o.initClass(), o.version = "5.5.1", o.options = {}, o.optionsForElement = function (e) {
            return e.getAttribute("id") ? o.options[a(e.getAttribute("id"))] : void 0;
          }, o.instances = [], o.forElement = function (e) {
            if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
            return e.dropzone;
          }, o.autoDiscover = !0, o.discover = function () {
            var e = void 0;
            if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");else {
              e = [];
              var t = function t(_t) {
                return function () {
                  for (var i = [], n = 0, r = r = _t;;) {
                    if (n >= r.length) break;
                    var o = r[n++];
                    /(^| )dropzone($| )/.test(o.className) ? i.push(e.push(o)) : i.push(void 0);
                  }
                  return i;
                }();
              };
              t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"));
            }
            return function () {
              for (var t = [], i = 0, n = n = e;;) {
                if (i >= n.length) break;
                var r = n[i++];
                !1 !== o.optionsForElement(r) ? t.push(new o(r)) : t.push(void 0);
              }
              return t;
            }();
          }, o.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], o.isBrowserSupported = function () {
            var e = !0;
            if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
              if ("classList" in document.createElement("a")) for (var t = 0, i = i = o.blacklistedBrowsers;;) {
                if (t >= i.length) break;
                i[t++].test(navigator.userAgent) && (e = !1);
              } else e = !1;
            } else e = !1;
            return e;
          }, o.dataURItoBlob = function (e) {
            for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], n = new ArrayBuffer(t.length), r = new Uint8Array(n), o = 0, s = t.length, a = 0 <= s; a ? o <= s : o >= s; a ? o++ : o--) r[o] = t.charCodeAt(o);
            return new Blob([n], {
              type: i
            });
          };
          var s = function s(e, t) {
              return e.filter(function (e) {
                return e !== t;
              }).map(function (e) {
                return e;
              });
            },
            a = function a(e) {
              return e.replace(/[\-_](\w)/g, function (e) {
                return e.charAt(1).toUpperCase();
              });
            };
          o.createElement = function (e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.childNodes[0];
          }, o.elementInside = function (e, t) {
            if (e === t) return !0;
            for (; e = e.parentNode;) if (e === t) return !0;
            return !1;
          }, o.getElement = function (e, t) {
            var i = void 0;
            if ("string" == typeof e ? i = document.querySelector(e) : null != e.nodeType && (i = e), null == i) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
            return i;
          }, o.getElements = function (e, t) {
            var i = void 0,
              n = void 0;
            if (e instanceof Array) {
              n = [];
              try {
                for (var r = 0, o = o = e; !(r >= o.length);) i = o[r++], n.push(this.getElement(i, t));
              } catch (e) {
                n = null;
              }
            } else if ("string" == typeof e) {
              n = [];
              for (var s = 0, a = a = document.querySelectorAll(e); !(s >= a.length);) i = a[s++], n.push(i);
            } else null != e.nodeType && (n = [e]);
            if (null == n || !n.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
            return n;
          }, o.confirm = function (e, t, i) {
            return window.confirm(e) ? t() : null != i ? i() : void 0;
          }, o.isValidFile = function (e, t) {
            if (!t) return !0;
            t = t.split(",");
            for (var i = e.type, n = i.replace(/\/.*$/, ""), r = 0, o = o = t;;) {
              if (r >= o.length) break;
              var s = o[r++];
              if ("." === (s = s.trim()).charAt(0)) {
                if (-1 !== e.name.toLowerCase().indexOf(s.toLowerCase(), e.name.length - s.length)) return !0;
              } else if (/\/\*$/.test(s)) {
                if (n === s.replace(/\/.*$/, "")) return !0;
              } else if (i === s) return !0;
            }
            return !1;
          }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
            return this.each(function () {
              return new o(this, e);
            });
          }), null !== e ? e.exports = o : window.Dropzone = o, o.ADDED = "added", o.QUEUED = "queued", o.ACCEPTED = o.QUEUED, o.UPLOADING = "uploading", o.PROCESSING = o.UPLOADING, o.CANCELED = "canceled", o.ERROR = "error", o.SUCCESS = "success";
          var l = function l(e, t, i, n, r, o, s, a, _l, u) {
              var d = function (e) {
                e.naturalWidth;
                var t = e.naturalHeight,
                  i = document.createElement("canvas");
                i.width = 1, i.height = t;
                var n = i.getContext("2d");
                n.drawImage(e, 0, 0);
                for (var r = n.getImageData(1, 0, 1, t).data, o = 0, s = t, a = t; a > o;) 0 === r[4 * (a - 1) + 3] ? s = a : o = a, a = s + o >> 1;
                var l = a / t;
                return 0 === l ? 1 : l;
              }(t);
              return e.drawImage(t, i, n, r, o, s, a, _l, u / d);
            },
            u = function () {
              function e() {
                n(this, e);
              }
              return t(e, null, [{
                key: "initClass",
                value: function value() {
                  this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                }
              }, {
                key: "encode64",
                value: function value(e) {
                  for (var t = "", i = void 0, n = void 0, r = "", o = void 0, s = void 0, a = void 0, l = "", u = 0; o = (i = e[u++]) >> 2, s = (3 & i) << 4 | (n = e[u++]) >> 4, a = (15 & n) << 2 | (r = e[u++]) >> 6, l = 63 & r, isNaN(n) ? a = l = 64 : isNaN(r) && (l = 64), t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(l), i = n = r = "", o = s = a = l = "", u < e.length;);
                  return t;
                }
              }, {
                key: "restore",
                value: function value(e, t) {
                  if (!e.match("data:image/jpeg;base64,")) return t;
                  var i = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                    n = this.slice2Segments(i),
                    r = this.exifManipulation(t, n);
                  return "data:image/jpeg;base64," + this.encode64(r);
                }
              }, {
                key: "exifManipulation",
                value: function value(e, t) {
                  var i = this.getExifArray(t),
                    n = this.insertExif(e, i);
                  return new Uint8Array(n);
                }
              }, {
                key: "getExifArray",
                value: function value(e) {
                  for (var t = void 0, i = 0; i < e.length;) {
                    if (255 === (t = e[i])[0] & 225 === t[1]) return t;
                    i++;
                  }
                  return [];
                }
              }, {
                key: "insertExif",
                value: function value(e, t) {
                  var i = e.replace("data:image/jpeg;base64,", ""),
                    n = this.decode64(i),
                    r = n.indexOf(255, 3),
                    o = n.slice(0, r),
                    s = n.slice(r),
                    a = o;
                  return a = (a = a.concat(t)).concat(s);
                }
              }, {
                key: "slice2Segments",
                value: function value(e) {
                  for (var t = 0, i = [];;) {
                    if (255 === e[t] & 218 === e[t + 1]) break;
                    if (255 === e[t] & 216 === e[t + 1]) t += 2;else {
                      var n = t + (256 * e[t + 2] + e[t + 3]) + 2,
                        r = e.slice(t, n);
                      i.push(r), t = n;
                    }
                    if (t > e.length) break;
                  }
                  return i;
                }
              }, {
                key: "decode64",
                value: function value(e) {
                  var t = void 0,
                    i = void 0,
                    n = "",
                    r = void 0,
                    o = void 0,
                    s = "",
                    a = 0,
                    l = [];
                  for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(a++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(a++))) >> 4, i = (15 & r) << 4 | (o = this.KEY_STR.indexOf(e.charAt(a++))) >> 2, n = (3 & o) << 6 | (s = this.KEY_STR.indexOf(e.charAt(a++))), l.push(t), 64 !== o && l.push(i), 64 !== s && l.push(n), t = i = n = "", r = o = s = "", a < e.length;);
                  return l;
                }
              }]), e;
            }();
          u.initClass(), o._autoDiscoverFunction = function () {
            if (o.autoDiscover) return o.discover();
          }, function (e, t) {
            var i = !1,
              n = !0,
              r = e.document,
              o = r.documentElement,
              s = r.addEventListener ? "addEventListener" : "attachEvent",
              a = r.addEventListener ? "removeEventListener" : "detachEvent",
              l = r.addEventListener ? "" : "on",
              u = function n(o) {
                if ("readystatechange" !== o.type || "complete" === r.readyState) return ("load" === o.type ? e : r)[a](l + o.type, n, !1), !i && (i = !0) ? t.call(e, o.type || o) : void 0;
              };
            if ("complete" !== r.readyState) {
              if (r.createEventObject && o.doScroll) {
                try {
                  n = !e.frameElement;
                } catch (e) {}
                n && function e() {
                  try {
                    o.doScroll("left");
                  } catch (t) {
                    return void setTimeout(e, 50);
                  }
                  return u("poll");
                }();
              }
              r[s](l + "DOMContentLoaded", u, !1), r[s](l + "readystatechange", u, !1), e[s](l + "load", u, !1);
            }
          }(window, o._autoDiscoverFunction);
        }(e = {
          exports: {}
        }, e.exports), e.exports),
        i = {
          getSignedURL: function getSignedURL(e, t) {
            var i = {
              filePath: e.name,
              contentType: e.type
            };
            return new Promise(function (n, r) {
              var o = new FormData();
              var s = new XMLHttpRequest(),
                a = "function" == typeof t.signingURL ? t.signingURL(e) : t.signingURL;
              s.open("POST", a), s.onload = function () {
                200 == s.status ? n(JSON.parse(s.response)) : r(s.statusText);
              }, s.onerror = function (e) {
                console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"), r(e);
              }, !0 === t.withCredentials && (s.withCredentials = !0), Object.entries(t.headers || {}).forEach(function (_ref) {
                var _ref2 = babelHelpers.slicedToArray(_ref, 2),
                  e = _ref2[0],
                  t = _ref2[1];
                s.setRequestHeader(e, t);
              }), i = Object.assign(i, t.params || {}), Object.entries(i).forEach(function (_ref3) {
                var _ref4 = babelHelpers.slicedToArray(_ref3, 2),
                  e = _ref4[0],
                  t = _ref4[1];
                o.append(e, t);
              }), s.send(o);
            });
          },
          sendFile: function sendFile(e, t, i) {
            var n = i ? this.setResponseHandler : this.sendS3Handler;
            return this.getSignedURL(e, t).then(function (t) {
              return n(t, e);
            })["catch"](function (e) {
              return e;
            });
          },
          setResponseHandler: function setResponseHandler(e, t) {
            t.s3Signature = e.signature, t.s3Url = e.postEndpoint;
          },
          sendS3Handler: function sendS3Handler(e, t) {
            var i = new FormData(),
              n = e.signature;
            return Object.keys(n).forEach(function (e) {
              i.append(e, n[e]);
            }), i.append("file", t), new Promise(function (t, n) {
              var r = new XMLHttpRequest();
              r.open("POST", e.postEndpoint), r.onload = function () {
                if (201 == r.status) {
                  var e = new window.DOMParser().parseFromString(r.response, "text/xml").firstChild.children[0].innerHTML;
                  t({
                    success: !0,
                    message: e
                  });
                } else {
                  var i = new window.DOMParser().parseFromString(r.response, "text/xml").firstChild.children[0].innerHTML;
                  n({
                    success: !1,
                    message: i + ". Request is marked as resolved when returns as status 201"
                  });
                }
              }, r.onerror = function (e) {
                var t = new window.DOMParser().parseFromString(r.response, "text/xml").firstChild.children[1].innerHTML;
                n({
                  success: !1,
                  message: t
                });
              }, r.send(i);
            });
          }
        };
      t.autoDiscover = !1;
      return function (e, t, i, n, r, o, s, a, l, u) {
        "boolean" != typeof s && (l = a, a = s, s = !1);
        var d,
          c = "function" == typeof i ? i.options : i;
        if (e && e.render && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0, r && (c.functional = !0)), n && (c._scopeId = n), o ? (d = function d(e) {
          (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(o);
        }, c._ssrRegister = d) : t && (d = s ? function () {
          t.call(this, u(this.$root.$options.shadowRoot));
        } : function (e) {
          t.call(this, a(e));
        }), d) if (c.functional) {
          var p = c.render;
          c.render = function (e, t) {
            return d.call(t), p(e, t);
          };
        } else {
          var h = c.beforeCreate;
          c.beforeCreate = h ? [].concat(h, d) : [d];
        }
        return i;
      }({
        render: function render() {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            ref: "dropzoneElement",
            "class": {
              "vue-dropzone dropzone": this.includeStyling
            },
            attrs: {
              id: this.id
            }
          }, [this.useCustomSlot ? t("div", {
            staticClass: "dz-message"
          }, [this._t("default", [this._v("Drop files here to upload")])], 2) : this._e()]);
        },
        staticRenderFns: []
      }, void 0, {
        props: {
          id: {
            type: String,
            required: !0,
            "default": "dropzone"
          },
          options: {
            type: Object,
            required: !0
          },
          includeStyling: {
            type: Boolean,
            "default": !0,
            required: !1
          },
          awss3: {
            type: Object,
            required: !1,
            "default": null
          },
          destroyDropzone: {
            type: Boolean,
            "default": !0,
            required: !1
          },
          duplicateCheck: {
            type: Boolean,
            "default": !1,
            required: !1
          },
          useCustomSlot: {
            type: Boolean,
            "default": !1,
            required: !1
          }
        },
        data: function data() {
          return {
            isS3: !1,
            isS3OverridesServerPropagation: !1,
            wasQueueAutoProcess: !0
          };
        },
        computed: {
          dropzoneSettings: function dropzoneSettings() {
            var e = {
              thumbnailWidth: 200,
              thumbnailHeight: 200
            };
            return Object.keys(this.options).forEach(function (t) {
              e[t] = this.options[t];
            }, this), null !== this.awss3 && (e.autoProcessQueue = !1, this.isS3 = !0, this.isS3OverridesServerPropagation = !1 === this.awss3.sendFileToServer, void 0 !== this.options.autoProcessQueue && (this.wasQueueAutoProcess = this.options.autoProcessQueue), this.isS3OverridesServerPropagation && (e.url = function (e) {
              return e[0].s3Url;
            })), e;
          }
        },
        mounted: function mounted() {
          if (this.$isServer && this.hasBeenMounted) return;
          this.hasBeenMounted = !0, this.dropzone = new t(this.$refs.dropzoneElement, this.dropzoneSettings);
          var e = this;
          this.dropzone.on("thumbnail", function (t, i) {
            e.$emit("vdropzone-thumbnail", t, i);
          }), this.dropzone.on("addedfile", function (t) {
            var i, n;
            if (e.duplicateCheck && this.files.length) for (i = 0, n = this.files.length; i < n - 1; i++) this.files[i].name === t.name && this.files[i].size === t.size && this.files[i].lastModifiedDate.toString() === t.lastModifiedDate.toString() && (this.removeFile(t), e.$emit("vdropzone-duplicate-file", t));
            e.$emit("vdropzone-file-added", t), e.isS3 && e.wasQueueAutoProcess && !t.manuallyAdded && e.getSignedAndUploadToS3(t);
          }), this.dropzone.on("addedfiles", function (t) {
            e.$emit("vdropzone-files-added", t);
          }), this.dropzone.on("removedfile", function (t) {
            e.$emit("vdropzone-removed-file", t), t.manuallyAdded && null !== e.dropzone.options.maxFiles && e.dropzone.options.maxFiles++;
          }), this.dropzone.on("success", function (t, i) {
            if (e.$emit("vdropzone-success", t, i), e.isS3) {
              if (e.isS3OverridesServerPropagation) {
                var n = new window.DOMParser().parseFromString(i, "text/xml").firstChild.children[0].innerHTML;
                e.$emit("vdropzone-s3-upload-success", n);
              }
              e.wasQueueAutoProcess && e.setOption("autoProcessQueue", !1);
            }
          }), this.dropzone.on("successmultiple", function (t, i) {
            e.$emit("vdropzone-success-multiple", t, i);
          }), this.dropzone.on("error", function (t, i, n) {
            e.$emit("vdropzone-error", t, i, n), this.isS3 && e.$emit("vdropzone-s3-upload-error");
          }), this.dropzone.on("errormultiple", function (t, i, n) {
            e.$emit("vdropzone-error-multiple", t, i, n);
          }), this.dropzone.on("sending", function (t, i, n) {
            if (e.isS3) if (e.isS3OverridesServerPropagation) {
              var _e2 = t.s3Signature;
              Object.keys(_e2).forEach(function (t) {
                n.append(t, _e2[t]);
              });
            } else n.append("s3ObjectLocation", t.s3ObjectLocation);
            e.$emit("vdropzone-sending", t, i, n);
          }), this.dropzone.on("sendingmultiple", function (t, i, n) {
            e.$emit("vdropzone-sending-multiple", t, i, n);
          }), this.dropzone.on("complete", function (t) {
            e.$emit("vdropzone-complete", t);
          }), this.dropzone.on("completemultiple", function (t) {
            e.$emit("vdropzone-complete-multiple", t);
          }), this.dropzone.on("canceled", function (t) {
            e.$emit("vdropzone-canceled", t);
          }), this.dropzone.on("canceledmultiple", function (t) {
            e.$emit("vdropzone-canceled-multiple", t);
          }), this.dropzone.on("maxfilesreached", function (t) {
            e.$emit("vdropzone-max-files-reached", t);
          }), this.dropzone.on("maxfilesexceeded", function (t) {
            e.$emit("vdropzone-max-files-exceeded", t);
          }), this.dropzone.on("processing", function (t) {
            e.$emit("vdropzone-processing", t);
          }), this.dropzone.on("processingmultiple", function (t) {
            e.$emit("vdropzone-processing-multiple", t);
          }), this.dropzone.on("uploadprogress", function (t, i, n) {
            e.$emit("vdropzone-upload-progress", t, i, n);
          }), this.dropzone.on("totaluploadprogress", function (t, i, n) {
            e.$emit("vdropzone-total-upload-progress", t, i, n);
          }), this.dropzone.on("reset", function () {
            e.$emit("vdropzone-reset");
          }), this.dropzone.on("queuecomplete", function () {
            e.$emit("vdropzone-queue-complete");
          }), this.dropzone.on("drop", function (t) {
            e.$emit("vdropzone-drop", t);
          }), this.dropzone.on("dragstart", function (t) {
            e.$emit("vdropzone-drag-start", t);
          }), this.dropzone.on("dragend", function (t) {
            e.$emit("vdropzone-drag-end", t);
          }), this.dropzone.on("dragenter", function (t) {
            e.$emit("vdropzone-drag-enter", t);
          }), this.dropzone.on("dragover", function (t) {
            e.$emit("vdropzone-drag-over", t);
          }), this.dropzone.on("dragleave", function (t) {
            e.$emit("vdropzone-drag-leave", t);
          }), e.$emit("vdropzone-mounted");
        },
        beforeDestroy: function beforeDestroy() {
          this.destroyDropzone && this.dropzone.destroy();
        },
        methods: {
          manuallyAddFile: function manuallyAddFile(e, t) {
            e.manuallyAdded = !0, this.dropzone.emit("addedfile", e);
            var i = !1;
            if ((t.indexOf(".svg") > -1 || t.indexOf(".png") > -1 || t.indexOf(".jpg") > -1 || t.indexOf(".jpeg") > -1 || t.indexOf(".gif") > -1 || t.indexOf(".webp") > -1) && (i = !0), this.dropzone.options.createImageThumbnails && i && e.size <= 1024 * this.dropzone.options.maxThumbnailFilesize * 1024) {
              t && this.dropzone.emit("thumbnail", e, t);
              for (var n = e.previewElement.querySelectorAll("[data-dz-thumbnail]"), r = 0; r < n.length; r++) n[r].style.width = this.dropzoneSettings.thumbnailWidth + "px", n[r].style.height = this.dropzoneSettings.thumbnailHeight + "px", n[r].style["object-fit"] = "contain";
            }
            this.dropzone.emit("complete", e), this.dropzone.options.maxFiles && this.dropzone.options.maxFiles--, this.dropzone.files.push(e), this.$emit("vdropzone-file-added-manually", e);
          },
          setOption: function setOption(e, t) {
            this.dropzone.options[e] = t;
          },
          removeAllFiles: function removeAllFiles(e) {
            this.dropzone.removeAllFiles(e);
          },
          processQueue: function processQueue() {
            var _this = this;
            var e = this.dropzone;
            this.isS3 && !this.wasQueueAutoProcess ? this.getQueuedFiles().forEach(function (e) {
              _this.getSignedAndUploadToS3(e);
            }) : this.dropzone.processQueue(), this.dropzone.on("success", function () {
              e.options.autoProcessQueue = !0;
            }), this.dropzone.on("queuecomplete", function () {
              e.options.autoProcessQueue = !1;
            });
          },
          init: function init() {
            return this.dropzone.init();
          },
          destroy: function destroy() {
            return this.dropzone.destroy();
          },
          updateTotalUploadProgress: function updateTotalUploadProgress() {
            return this.dropzone.updateTotalUploadProgress();
          },
          getFallbackForm: function getFallbackForm() {
            return this.dropzone.getFallbackForm();
          },
          getExistingFallback: function getExistingFallback() {
            return this.dropzone.getExistingFallback();
          },
          setupEventListeners: function setupEventListeners() {
            return this.dropzone.setupEventListeners();
          },
          removeEventListeners: function removeEventListeners() {
            return this.dropzone.removeEventListeners();
          },
          disable: function disable() {
            return this.dropzone.disable();
          },
          enable: function enable() {
            return this.dropzone.enable();
          },
          filesize: function filesize(e) {
            return this.dropzone.filesize(e);
          },
          accept: function accept(e, t) {
            return this.dropzone.accept(e, t);
          },
          addFile: function addFile(e) {
            return this.dropzone.addFile(e);
          },
          removeFile: function removeFile(e) {
            this.dropzone.removeFile(e);
          },
          getAcceptedFiles: function getAcceptedFiles() {
            return this.dropzone.getAcceptedFiles();
          },
          getRejectedFiles: function getRejectedFiles() {
            return this.dropzone.getRejectedFiles();
          },
          getFilesWithStatus: function getFilesWithStatus() {
            return this.dropzone.getFilesWithStatus();
          },
          getQueuedFiles: function getQueuedFiles() {
            return this.dropzone.getQueuedFiles();
          },
          getUploadingFiles: function getUploadingFiles() {
            return this.dropzone.getUploadingFiles();
          },
          getAddedFiles: function getAddedFiles() {
            return this.dropzone.getAddedFiles();
          },
          getActiveFiles: function getActiveFiles() {
            return this.dropzone.getActiveFiles();
          },
          getSignedAndUploadToS3: function getSignedAndUploadToS3(e) {
            var _this2 = this;
            var t = i.sendFile(e, this.awss3, this.isS3OverridesServerPropagation);
            this.isS3OverridesServerPropagation ? t.then(function () {
              setTimeout(function () {
                return _this2.dropzone.processFile(e);
              });
            }) : t.then(function (t) {
              t.success ? (e.s3ObjectLocation = t.message, setTimeout(function () {
                return _this2.dropzone.processFile(e);
              }), _this2.$emit("vdropzone-s3-upload-success", t.message)) : void 0 !== t.message ? _this2.$emit("vdropzone-s3-upload-error", t.message) : _this2.$emit("vdropzone-s3-upload-error", "Network Error : Could not send request to AWS. (Maybe CORS error)");
            }), t["catch"](function (e) {
              alert(e);
            });
          },
          setAWSSigningURL: function setAWSSigningURL(e) {
            this.isS3 && (this.awss3.signingURL = e);
          }
        }
      }, void 0, !1, void 0, void 0, void 0);
    });
    });

    var FileLoader = {
      data: function data() {
        return {
          dropzoneOptions: {
            url: this.apiurl,
            thumbnailWidth: 250,
            maxFilesize: 0.5,
            // maxFiles: 1,
            dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>Загрузка",
            headers: {
              "My-Awesome-Header": "header value"
            }
          }
        };
      },
      props: {
        apiurl: String
      },
      components: {
        vueDropzone: vue2Dropzone
      },
      name: 'fileloader',
      template: '<div style="margin-bottom: 10px">' + '<vue-dropzone ref="myVueDropzone" :options="dropzoneOptions" ' + ' :include-styling="true" :duplicateCheck="true"' + ' id="customdropzone"></vue-dropzone>' + '</div>'
    };

    var components = {
      ExampleComponent: ExampleComponent,
      FileLoader: FileLoader
    };

    /**
     * Модуль для автоматической инициализации Vue компонентов на странице сайта
     *
     * Метод `init(Vue, components)` Загружает компоненты в соответствующие элементы на странице
     * и передает в них изначальные данные
     *
     * Например, вместо блока:
     *
     * <div class="vue-component" data-component="DemoApp" data-initial='{"test": "data"}'></div>
     *
     * Будет подключен компонент DemoApp (если тот присутствует в объекте-коллекции `components`)
     *
     * и в его свойство initial будет передан JSON-объект {"test": "data"}
     *
     * Передача в метод экземпляра `Vue` позволяет предварительно его сконфигурировать:
     * например, добавить Vuex-store и/или разнообразные плагины и миксины.
     */
    var Vueinvoker = /*#__PURE__*/function () {
      function Vueinvoker() {
        babelHelpers.classCallCheck(this, Vueinvoker);
        this.options = {
          selector: '.vue-component',
          componentDataAttr: 'component',
          initialDataAttr: 'initial'
        };
        this.run();
      }
      babelHelpers.createClass(Vueinvoker, [{
        key: "run",
        value: function run() {
          this.init(ui_vue.BitrixVue, components, this.options);
        }
      }, {
        key: "init",
        value: function init(Vue, components$$1, options) {
          var _this = this;
          this.options = Object.assign(this.options, options);
          var nodes = Array.from(document.querySelectorAll(this.options.selector));
          var collection = [];
          nodes.forEach(function (item) {
            var initialData = item.dataset[_this.options.initialDataAttr];
            if (initialData !== undefined) {
              try {
                initialData = JSON.parse(initialData);
              } catch (e) {}
            }
            if (components$$1[item.dataset[_this.options.componentDataAttr]] !== undefined) {
              collection.push(_this.createComponentInstance(Vue, item, components$$1[item.dataset[_this.options.componentDataAttr]], initialData));
            }
          });
          return collection;
        }
      }, {
        key: "createComponentInstance",
        value: function createComponentInstance(Vue, element, component, data) {
          return Vue.createApp({
            el: element,
            render: function render(h) {
              return h(component, {
                props: data
              });
            }
          });
        }
      }]);
      return Vueinvoker;
    }();

    exports.Vueinvoker = Vueinvoker;

}((this.BX.Proklung = this.BX.Proklung || {}),BX));
