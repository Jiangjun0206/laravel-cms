$(document).ready(function() {
    $('#container1').jstree();

    $('#container2').jstree({
        "plugins": ["checkbox"]
    });

    $('#container3').jstree({
        "plugins": ["search"]
    });
    $("#search").submit(function(e) {
        e.preventDefault();
        $("#container3").jstree(true).search($("#hint").val());
    });
    $('input[type="checkbox"].custom-checkbox, input[type="radio"].custom-radio').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%'
    });
    // bootstrap tree view

    $(function() {

        var defaultData = [{
            text: 'Parent 1',
            href: '#parent1',
            tags: ['4'],
            nodes: [{
                text: 'Child 1',
                href: '#child1',
                tags: ['2'],
                nodes: [{
                    text: 'Grandchild 1',
                    href: '#grandchild1',
                    tags: ['0']
                }, {
                    text: 'Grandchild 2',
                    href: '#grandchild2',
                    tags: ['0']
                }]
            }, {
                text: 'Child 2',
                href: '#child2',
                tags: ['0']
            }]
        }, {
            text: 'Parent 2',
            href: '#parent2',
            tags: ['0']
        }, {
            text: 'Parent 3',
            href: '#parent3',
            tags: ['0']
        }, {
            text: 'Parent 4',
            href: '#parent4',
            tags: ['0']
        }, {
            text: 'Parent 5',
            href: '#parent5',
            tags: ['0']
        }];

        var alternateData = [{
            text: 'Parent 1',
            tags: ['2'],
            nodes: [{
                text: 'Child 1',
                tags: ['3'],
                nodes: [{
                    text: 'Grandchild 1',
                    tags: ['6']
                }, {
                    text: 'Grandchild 2',
                    tags: ['3']
                }]
            }, {
                text: 'Child 2',
                tags: ['3']
            }]
        }, {
            text: 'Parent 2',
            tags: ['7']
        }, {
            text: 'Parent 3',
            icon: 'glyphicon glyphicon-earphone',
            href: '#demo',
            tags: ['11']
        }, {
            text: 'Parent 4',
            icon: 'glyphicon glyphicon-cloud-download',
            href: '/demo.html',
            tags: ['19'],
            selected: true
        }, {
            text: 'Parent 5',
            icon: 'glyphicon glyphicon-certificate',
            color: 'pink',
            backColor: 'red',
            href: 'http://www.tesco.com',
            tags: ['available', '0']
        }];

        // Bootstrap Tree View 1

        $('#treeview5').treeview({
            color: "#418bca",
            expandIcon: 'glyphicon glyphicon-chevron-right',
            collapseIcon: 'glyphicon glyphicon-chevron-down',
            nodeIcon: 'glyphicon glyphicon-bookmark',
            data: defaultData
        });
        $('#treeview6').treeview({
            color: "#418bca",
            expandIcon: "glyphicon glyphicon-stop",
            collapseIcon: "glyphicon glyphicon-unchecked",
            nodeIcon: "glyphicon glyphicon-user",
            showTags: true,
            data: defaultData
        });
        // Bootstrap Tree View 2
        // treeview expandable
        var $expandibleTree = $('#treeview-expandible').treeview({
            data: defaultData,
            onNodeCollapsed: function(event, node) {
                $('#expandible-output').prepend('<p>' + node.text + ' was collapsed</p>');
            },
            onNodeExpanded: function(event, node) {
                $('#expandible-output').prepend('<p>' + node.text + ' was expanded</p>');
            }
        });

        var findExpandibleNodess = function() {
            return $expandibleTree.treeview('search', [$('#input-expand-node option:selected').text(), { ignoreCase: false, exactMatch: false }]);
        };
        var expandibleNodes = findExpandibleNodess();

        // Expand/collapse/toggle nodes
        $('#input-expand-node').on('change', function(e) {
            expandibleNodes = findExpandibleNodess();
            $('.expand-node').prop('disabled', !(expandibleNodes.length >= 1));
        });

        $('#btn-expand-node.expand-node').on('click', function(e) {
            var levels = $('#select-expand-node-levels').val();
            $expandibleTree.treeview('expandNode', [expandibleNodes, { levels: levels, silent: $('#chk-expand-silent').is(':checked') }]);
        });

        $('#btn-collapse-node.expand-node').on('click', function(e) {
            $expandibleTree.treeview('collapseNode', [expandibleNodes, { silent: $('#chk-expand-silent').is(':checked') }]);
        });

        $('#btn-toggle-expanded.expand-node').on('click', function(e) {
            $expandibleTree.treeview('toggleNodeExpanded', [expandibleNodes, { silent: $('#chk-expand-silent').is(':checked') }]);
        });

        // Expand/collapse all
        $('#btn-expand-all').on('click', function(e) {
            var levels = $('#select-expand-all-levels').val();
            $expandibleTree.treeview('expandAll', { levels: levels, silent: $('#chk-expand-silent').is(':checked') });
        });

        $('#btn-collapse-all').on('click', function(e) {
            $expandibleTree.treeview('collapseAll', { silent: $('#chk-expand-silent').is(':checked') });
        });

        // checkable tree
        var $checkableTree = $('#treeview-checkable').treeview({
            data: defaultData,
            showIcon: false,
            showCheckbox: true,
            onNodeChecked: function(event, node) {
                $('#checkable-output').prepend('<p>' + node.text + ' was checked</p>');
            },
            onNodeUnchecked: function(event, node) {
                $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
            }
        });

        var findCheckableNodess = function() {
            return $checkableTree.treeview('search', [$('#input-check-node option:selected').text(), { ignoreCase: false, exactMatch: false }]);
        };
        var checkableNodes = findCheckableNodess();

        // Check/uncheck/toggle nodes
        $('#input-check-node').on('change', function(e) {
            checkableNodes = findCheckableNodess();
            $('.check-node').prop('disabled', !(checkableNodes.length >= 1));
        });

        $('#btn-check-node.check-node').on('click', function(e) {
            $checkableTree.treeview('checkNode', [checkableNodes, { silent: $('#chk-check-silent').is(':checked') }]);
        });

        $('#btn-uncheck-node.check-node').on('click', function(e) {
            $checkableTree.treeview('uncheckNode', [checkableNodes, { silent: $('#chk-check-silent').is(':checked') }]);
        });

        $('#btn-toggle-checked.check-node').on('click', function(e) {
            $checkableTree.treeview('toggleNodeChecked', [checkableNodes, { silent: $('#chk-check-silent').is(':checked') }]);
        });

        // Check/uncheck all
        $('#btn-check-all').on('click', function(e) {
            $checkableTree.treeview('checkAll', { silent: $('#chk-check-silent').is(':checked') });
        });

        $('#btn-uncheck-all').on('click', function(e) {
            $checkableTree.treeview('uncheckAll', { silent: $('#chk-check-silent').is(':checked') });
        });


    });

});
