<?php
/**
 *
 * The template for displaying search form
 *
 **/
 
?>

<form method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label for="s"><?php _e( 'Search', 'photo' ); ?></label>
	<input type="search" class="search-field" name="s" id="s" placeholder="<?php esc_attr_e( 'Start typing...', 'photo' ); ?>" value="<?php echo wp_kses(get_search_query(), null); ?>" />
	
	<input type="submit" class="search-submit" value="<?php esc_attr_e( 'Search', 'photo' ); ?>" />
</form>