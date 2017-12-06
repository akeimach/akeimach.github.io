
$(document.body).ready(function() {

    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);

    $("#open-about").on("click", function(event) {
        document.getElementById("toggle-about").style.height = "80%";
    });

    $("#close-about").on("click", function(event) {
        document.getElementById("toggle-about").style.height = "0%";
    });
});