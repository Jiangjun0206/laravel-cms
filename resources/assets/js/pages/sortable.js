$(document).ready(function(){
    $('.li-sortable').sortable();
    $('#sortable-with-handles').sortable({
        handle: '.handle',
        bodyClass:'vnfl'
    });
 //nested rows
    var oldContainer;
    $("ul#sortable10").sortable({
        group: 'nested',
        afterMove: function (placeholder, container) {
            if(oldContainer != container){
                if(oldContainer)
                    oldContainer.el.removeClass("active");
                container.el.addClass("active");

                oldContainer = container;
            }
        },
        onDrop: function ($item, container, _super) {
            container.el.removeClass("active");
            _super($item, container);
        }
    });


//multiple lists
    var adjustment;

    $("ul.simple_with_animation").sortable({
        group: 'simple_with_animation',
        pullPlaceholder: false,
        // animation on drop
        onDrop: function  ($item, container, _super) {
            var $clonedItem = $('<li/>').css({height: 0});
            $item.before($clonedItem);
            $clonedItem.animate({'height': $item.height()});

            $item.animate($clonedItem.position(), function  () {
                $clonedItem.detach();
                _super($item, container);
            });
        },

        // set $item relative to cursor position
        onDragStart: function ($item, container, _super) {
            var offset = $item.offset(),
                pointer = container.rootGroup.pointer;

            adjustment = {
                left: pointer.left - offset.left,
                top: pointer.top - offset.top
            };

            _super($item, container);
        },
        onDrag: function ($item, position) {
            $item.css({
                left: position.left - adjustment.left,
                top: position.top - adjustment.top
            });
        }
    });

    // Sortable rows
    $('.sorted_table').sortable({
        containerSelector: 'table',
        itemPath: '> tbody',
        itemSelector: 'tr',
        placeholder: '<tr class="placeholder"/>'
    });

// Sortable column heads
    var oldIndex;
    $('.sorted_head tr').sortable({
        containerSelector: 'tr',
        itemSelector: 'th',
        placeholder: '<th class="placeholder"/>',
        vertical: false,
        onDragStart: function ($item, container, _super) {
            oldIndex = $item.index();
            $item.appendTo($item.parent());
            _super($item, container);
        },
        onDrop: function  ($item, container, _super) {
            var field,
                newIndex = $item.index();
            $("body").addClass("");
            if(newIndex != oldIndex) {
                $item.closest('table').find('tbody tr').each(function (i, row) {
                    row = $(row);
                    if(newIndex < oldIndex) {
                        row.children().eq(newIndex).before(row.children()[oldIndex]);
                    } else if (newIndex > oldIndex) {
                        row.children().eq(newIndex).after(row.children()[oldIndex]);
                    }
                });
            }

            _super($item, container);
        }
    });

});