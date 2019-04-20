
$(document).on('submit', 'form', function (e) {
    e.preventDefault();
    //Receber os dados
    $form = $(this);
    var formdata = new FormData($form[0]);

    //Criar a conexao com o servidor
    var request = new XMLHttpRequest();

    //Progresso do Upload
    request.upload.addEventListener('progress', function (e) {
        var percent = Math.round(e.loaded / e.total * 100);
        $form.find('.progress-bar').width(percent + '%').html(percent + '%');
    });

    //Upload completo limpar a barra de progresso
    request.addEventListener('load', function (e) {
        $form.find('.progress-bar').addClass('progress-bar-success').html('100%');
        //Atualizar a página após o upload completo
        setTimeout("window.open(self.location, '_self');", 1000);
    });

    //Arquivo responsável em fazer o upload da imagem
    request.open('post', 'processa.php');
    request.send(formdata);
});

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}