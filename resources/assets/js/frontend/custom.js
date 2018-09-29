$(document).ready(function() {

$(document).on('click', '.panel-heading .removepanel', function(){
    var $this = $(this);
    $this.parents('.panel').hide("slow");
});
//panel hide
$('.showhide').attr('title','Hide Panel content');
$(document).on('click', '.panel-heading .clickable', function(e){
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        $('.showhide').attr('title','Show Panel content');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        $('.showhide').attr('title','Hide Panel content');
    }
});

});

