<?php
/**
 * The Header template for our theme
 *
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title('|', true, 'right'); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php do_action('photo_head'); ?>
	<?php header("Cache-Control: max-age=1"); ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); echo ' data-tablet-width="'. get_theme_mod('photo_tablet_width','1230') .'" '; ?>>
	<!--[if lte IE 8]>
	<div id="ie-toolbar"><div><?php _e('You\'re using an unsupported version of Internet Explorer. Please <a href="http://windows.microsoft.com/en-us/internet-explorer/products/ie/home">upgrade your browser</a> for the best user experience on our site. Thank you.', 'photo') ?></div></div>
	<![endif]-->
	<div id="gk-bg" class="gk-clearfix">
		<div id="gk-bg-wrap">
			<div id="gk-header" class="gk-clearfix">
				<div class="gk-logo-wrap gk-half-page">
					<div class="site">
		   			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="gk-logo-text inverse" >
						
						<?php if(get_theme_mod('photo_top_logo', '') != '') : ?>
							<span><div id="logo-top" class="logo">2</div></span>
						<?php else : ?>
							<span><?php echo get_bloginfo('name'); ?></span>
						<?php endif; ?>
							<span><?php echo get_bloginfo ( 'description' ); ?></span>
						
		   			</a>
		   			</div>
				</div>
		   		

                <a class="screen-reader-text skip-link" href="#content" title="<?php esc_attr_e( 'Skip to content', 'photo' ); ?>"><?php _e( 'Skip to content', 'photo' ); ?></a>

			</div>