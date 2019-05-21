$(function(){

    $('.botao').bind('mouseover', function(){
        document.getElementById("bolinhas").style.display = "block";
        
    });

    

    $('.botaooff').bind('mouseout', function(){
        document.getElementById("bolinhas").style.display = "none";
        
    },2000);

});