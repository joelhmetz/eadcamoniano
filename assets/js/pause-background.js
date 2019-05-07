$(function() {
  $(".modal_ajax").on("click", function(e) {
    e.preventDefault();

    $(".modal_bg_cover").show();
    $(".modal_cover").show();
  });  



});

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
};