Dropzone.autoDiscover = false;
let myDropZone = document.querySelector('#ProfileUpload');

let myDropzone = new Dropzone(myDropZone, {
    maxFiles: 1,
    url: "/file/post",
    acceptedFiles: "image/*",
    addRemoveLinks: false,
    disablePreviews: true,
    thumbnailWidth: 488,
    thumbnailHeight: 488,
    forceFallback: false,
    thumbnailMethod: "contain",
    clickable: '.dropzone-click-target'

});
myDropzone.on("thumbnail", function (file, dataUrl) {
    document.querySelector('.profile_image').src = `${dataUrl}`;
});
myDropzone.on("complete", function (file, response) {
    console.log(file);

});