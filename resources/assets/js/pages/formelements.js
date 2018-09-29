
    $(document).ready(function() {
        $(
            'input#defaultconfig'
        ).maxlength({
            alwaysShow: true
        });

        $(
            'input#thresholdconfig'
        ).maxlength({
            threshold: 20,
            alwaysShow: true

        });
        $(
            'input#moreoptions'
        ).maxlength({
            alwaysShow: true,
            warningClass: "label label-success",
            limitReachedClass: "label label-danger"
        });

        $(
            'input#alloptions'
        ).maxlength({
            alwaysShow: true,
            warningClass: "label label-success",
            limitReachedClass: "label label-danger",
            separator: ' chars out of ',
            preText: 'You typed ',
            postText: ' chars.',
            vali
                : true
        });
        $(
            'textarea#textarea'
        ).maxlength({
            alwaysShow: true
        });

        $(".display-no").hide();

        $('input#placement')
            .maxlength({
                alwaysShow: true,
                placement: 'top'
            });

        $('#card').card({
            container: $('.card-wrapper')
        });

        $('.autogrow_area').autogrow({onInitialize: true});
    });
