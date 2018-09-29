
$(document).ready(function() {
    $('#btn1').on('click',function(){
        swal("Here's your text message in the sweet alert!");
    });
    $('#btn2').on('click',function() {
        swal("Here's your text message in the sweet alert!");
    });
    $('#btn3').on('click',function(){
        swal("Good job!", "You clicked the button!", "success")
    });
    $('#btn4').on('click',function(){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55  ",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function () {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    });
    $('#btn5').on('click',function(){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55  ",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    });
    $('#btn6').on('click',function(){
        swal({   title: "Sweet!",   text: "Here's a custom image.",   imageUrl: "{{ asset('assets/images/13.jpg') }}" });
    });

    $('#btn7').on('click',function(){
        swal({   title: "Sweet!",   text: "Here's a custom image.",   imageUrl: "{{ asset('assets/images/c2.jpg') }}" });
    });
    $('#btn8').on('click',function(){
        swal({   title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,  showConfirmButton: false
        });
    });
    $('#btn9').on('click',function(){
        swal({
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function () {
            setTimeout(function () {
                swal("Ajax request finished!");
            }, 2000);
        });
    });

});

