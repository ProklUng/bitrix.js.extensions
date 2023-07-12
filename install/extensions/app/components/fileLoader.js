import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import './css/dropzone.css';

export const FileLoader = {
    data() {
        return {
            dropzoneOptions: {
                url: this.apiurl,
                thumbnailWidth: 250,
                maxFilesize: 0.5,
                // maxFiles: 1,
                dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>Загрузка",
                headers: {"My-Awesome-Header": "header value"},
            }
        }
    },
    props: {
        apiurl: String,
    },

    components: {
        vueDropzone: vue2Dropzone
    },
    template: '<div style="margin-bottom: 10px">' +
        '<vue-dropzone ref="myVueDropzone" :options="dropzoneOptions" ' +
        ' :include-styling="true" :duplicateCheck="true"' +
        ' id="customdropzone"></vue-dropzone>' +
        '</div>'
};