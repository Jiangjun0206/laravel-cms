/*Created by lorvent on 1/20/2016.*/

$("textarea.editor-cls").wysihtml5();
$("#summernote").summernote({
    fontNames: ['Lato', 'Arial', 'Courier New']
});
$('body').on('click', '.btn-codeview', function (e) {

    if ( $('.note-editor').hasClass("fullscreen") ) {
        var windowHeight = $(window).height();
        $('.note-editable').css('min-height',windowHeight);
    }else{
        $('.note-editable').css('min-height','300px');
    }
});
$('body').on('click','.btn-fullscreen', function (e) {
    setTimeout (function(){
        if ( $('.note-editor').hasClass("fullscreen") ) {
            var windowHeight = $(window).height();
            $('.note-editable').css('min-height',windowHeight);
        }else{
            $('.note-editable').css('min-height','300px');
        }
    },500);

});
$('.note-link-url').on('keyup', function() {
    if($('.note-link-text').val() != '') {
        $('.note-link-btn').attr('disabled', false).removeClass('disabled');
    }
});
jQuery.trumbowyg.langs.fr = {
    _dir: "ltr", // This line is optionnal, but usefull to override the `dir` option

    bold: "Gras",
    close: "Fermer"
};
$("textarea#split_editor").trumbowyg({
    btnsDef: {
        // Customizables dropdowns
        image: {
            dropdown: ['insertImage', 'upload', 'base64', 'noembed'],
            ico: 'insertImage'
        }
    },
    btns: [
        ['viewHTML'],
        ['undo', 'redo'],
        ['formatting'],
        'btnGrp-design',
        ['link'],
        ['image'],
        'btnGrp-justify',
        'btnGrp-lists',
        ['foreColor', 'backColor'],
        ['preformatted'],
        ['horizontalRule'],
        ['fullscreen']
    ],
    plugins: {
        upload: {
            serverPath: 'https://api.imgur.com/3/image',
            fileFieldName: 'image',
            headers: {
                'Authorization': 'Client-ID 9e57cb1c4791cea'
            },
            urlPropertyName: 'data.link'
        }
    }

});