<?php 

class GK_Utils {
	// returns count of the widgets in the sidebar
	static function count_sidebar_widgets($sidebar_id, $max = 3) {
	    $sidebars = wp_get_sidebars_widgets();
	    // check the sidebar ID
	    if(!isset($sidebars[$sidebar_id])) {
	    	return __('Invalid sidebar ID', 'photo');
	    }
	    // limit the max value
	    $count = count($sidebars[$sidebar_id]);
	    $count = $count > $max ? $max : $count;
	    
	    return $count;
	}
}

// EOF