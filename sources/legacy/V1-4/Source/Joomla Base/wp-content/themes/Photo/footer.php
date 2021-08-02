<?php
/**
 * The template for displaying the footer
 *
 */

?>
    </div><!-- #gk-bg-wrap -->
    </div><!-- #gk-bg -->

    <div id="page-nav" class="active">
	   	<div class="site">
		   	<nav id="overlay-menu">
		   			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="gk-logo-text" >
						<?php if(get_theme_mod('photo_menu_logo', '') != '') : ?>
							<span id="logo-bottom" class="logo">2</span>
						<?php else : ?>
							<span><?php echo get_bloginfo ( 'name' ); ?></span>
						<?php endif; ?>
							<span><?php echo get_bloginfo ( 'description' ); ?></span>
		   			</a>
					
				<span id="gk-menu-button"><strong><?php _e('Open menu','photo'); ?></strong><span data-text="<?php _e('Close','photo'); ?>"><?php _e('Menu','photo'); ?></span></span>

					<?php wp_nav_menu( array( 'theme_location' => 'social', 'menu_class' => 'social-menu', 'container_class' => 'gk-social' ,'fallback_cb' => false ) ); ?>

		   	</nav>
		   	
		   	<footer id="gk-footer">				
				<div id="gk-copyrights">
    				<p class="copyright"><?php echo get_theme_mod('photo_copyright_text', '&copy; 2014 GavickPro. All rights reserved.'); ?></p>
    			</div>
		   	</footer>
		</div>
   	</div>
   	
   	<div id="overlay-menu-content">  
   		<div id="overlay-menu-content-wrap1" class="site">
			<div id="overlay-menu-content-wrap2" class="overthrow">
				<?php do_action('photo_before_mainmenu'); ?>
		            <?php wp_nav_menu( array( 'theme_location' => 'mainmenu', 'menu_class' => 'level0', 'container_class' => 'gk-overlay-menu', 'fallback_cb' => false ) ); ?>
	            <?php do_action('photo_after_mainmenu'); ?>
			</div>
		</div>
	</div>

	<script>	
		jQuery(document).ready(function(){
		    // Target your .container, .wrapper, .post, etc.
		    jQuery("#gk-bg").fitVids();
		});

	</script>

	<?php wp_footer(); ?>
</body>
</html>
