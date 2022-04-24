Dropzone.autoDiscover = false;
let myDropZone = document.querySelector('#ProfileUpload');

let myDropzone = new Dropzone(myDropZone, {
    maxFiles: 1,
    url: "/",
    acceptedFiles: "image/*",
    addRemoveLinks: false,
    disablePreviews: true,
    thumbnailWidth: 488,
    thumbnailHeight: 488,
    thumbnailMethod: "contain",
    clickable: '.dropzone-click-target',
    autoProcessQueue: false

});
myDropzone.on("thumbnail", function (file, dataUrl) {
    document.querySelector('.profile_image').src = `${dataUrl}`;
});
myDropzone.on("complete", function (file, response) {
    console.log(file);

});