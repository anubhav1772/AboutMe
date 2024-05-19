function setupModal(imgId, modalId, modalImgId, captionId) {
    var img = document.getElementById(imgId);
    var modal = document.getElementById(modalId);
    var modalImg = document.getElementById(modalImgId);
    var captionText = document.getElementById(captionId);

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementById("cls" + modalImgId.slice(-2));

    span.onclick = function() {
        modal.style.display = "none";
    }
}

setupModal("myImg", "myImgModal", "img01", "caption");
setupModal("controller", "controllerModal", "img02", "caption2");
setupModal("seg", "segModal", "img03", "caption3");
setupModal("octomap", "octomapModal", "img04", "caption4");