(function($) {
    $(window).load(function() {
        // Prepare events for checkboxes
        $('.gk-category-checklist-checkbox').each(function(i, checkbox) {
            checkbox = $(checkbox);

            checkbox.on('change', function(e) {
                e.stopPropagation();
                var id = $(this).attr('data-id');
                var category_id = $(this).attr('data-category-id');
         
                if(checkbox.prop('checked') == true ) {
                    add_checked_category(category_id, id);
                } else {
                    remove_checked_category(category_id, id);
                }
            });
        });
    });

    // Add category ID to the hidden field with value to store
    function add_checked_category(category, control) {
        var value = wp.customize.instance(control).get().split(',');
        value = value.filter(Number);

        if(value.indexOf(category) === -1) {
            value.push(category);
            wp.customize.instance(control).set(value.join());
        }
    }
 
    // Removes selected category from the hidden field with value to store
    function remove_checked_category(category, control) {
        var value = wp.customize.instance(control).get();
        value = value.split(',');
        var category_index = value.indexOf(category);
        if(category_index >= 0) {
            // Remove element from array of category IDs
            value.splice(category_index, 1);
            // Transform array into string
            value = value.join();
            // Update hidden field with value to store
            wp.customize.instance(control).set( value);
        }
    }
})(jQuery);