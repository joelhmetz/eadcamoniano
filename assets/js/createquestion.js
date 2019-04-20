$('.select').on({ change: listChildren }).trigger('change');

function listChildren() {

    if ($(this).val() != '') {
        children = $('option').val();
        $(".input").hide();
        $("#" + $(this).val()).show();
    }

}