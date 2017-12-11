
$(document.body).ready(function() {

  particleground(document.getElementById('particles'), {
    lineColor: '#0d4f48',
    dotColor: '#299c90'
  });

  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

  $("#open-about").on("click", function(event) {
    document.getElementById("toggle-about").style.height = "80%";
  });

  $("#close-about").on("click", function(event) {
    document.getElementById("toggle-about").style.height = "0%";
  });

});


