/* eslint-disable */
this.BX = this.BX || {};
(function (exports,ui_vue,vue2Dropzone) {
    'use strict';

    vue2Dropzone = vue2Dropzone && vue2Dropzone.hasOwnProperty('default') ? vue2Dropzone['default'] : vue2Dropzone;

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
      template: '<div style="margin-bottom: 10px">' + '<vue-dropzone ref="myVueDropzone" :options="dropzoneOptions" ' + ' :include-styling="true" :duplicateCheck="true"' + ' id="customdropzone"></vue-dropzone>' + '</div>'
    };

    var vueCollection = {
      fileloader: FileLoader
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
    var _vm = /*#__PURE__*/new WeakMap();
    var App = /*#__PURE__*/function () {
      function App(id) {
        babelHelpers.classCallCheck(this, App);
        _classPrivateFieldInitSpec(this, _vm, {
          writable: true,
          value: void 0
        });
        this.selector = id;
        this.init();
      }
      babelHelpers.createClass(App, [{
        key: "init",
        value: function init() {
          var context = this;
          babelHelpers.classPrivateFieldSet(this, _vm, ui_vue.BitrixVue.createApp({
            data: function data() {
              return {};
            },
            mounted: function mounted() {},
            components: vueCollection,
            beforeCreate: function beforeCreate() {
              this.$bitrix.Application.set(context);
            }
          }).mount(this.selector));
        }
      }]);
      return App;
    }();

    exports.App = App;

}((this.BX.Proklung = this.BX.Proklung || {}),BX,BX));
