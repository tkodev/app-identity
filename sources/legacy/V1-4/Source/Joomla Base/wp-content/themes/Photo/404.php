<?php
/**
 *
 * 404 Page
 *
 **/


get_header(); ?>

	<div id="gk-content" class="hfeed site">
		<?php if (is_active_sidebar('top')) : ?>
		<?php do_action('photo_before_top'); ?>
		<div id="gk-top" role="complementary">
			<div class="widget-area gk-3-cols" data-cols="<?php echo GK_Utils::count_sidebar_widgets('top', 3); ?>">
				<?php dynamic_sidebar('top'); ?>
			</div>
		</div>
		<?php do_action('photo_after_top'); ?>
		<?php endif; ?>

		<?php do_action('photo_before_content'); ?>
		<article id="post" <?php post_class(); ?>>
			<div>
				<header class="bigtitle no-desc">
					<h1 class="header">
                        <span>
                            <?php _e( 'Not Found', 'photo' ); ?>
                        </span>
                    </h1>
				</header>

				<div class="page-wrapper">
					<div class="page-content">
						<h2><?php _e( 'This is somewhat embarrassing, isn&rsquo;t it?', 'photo' ); ?></h2>
						<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'photo' ); ?></p>

						<?php get_search_form(); ?>
					</div><!-- .page-content -->
				</div><!-- .page-wrapper -->
			</div>
		</article><!-- #post -->
		<?php do_action('photo_after_content'); ?>

		<?php if (is_active_sidebar('bottom')) : ?>
		<?php do_action('photo_before_bottom'); ?>
		<div id="gk-bottom" role="complementary">
			<div class="widget-area gk-3-cols" data-cols="<?php echo GK_Utils::count_sidebar_widgets('bottom', 3); ?>">
				<?php dynamic_sidebar('bottom'); ?>
			</div>
		</div>
		<?php do_action('photo_after_bottom'); ?>
		<?php endif; ?>
	</div><!-- #gk-content -->
	
	<?php get_template_part( 'sidebar' ); ?>

<?php get_footer(); ?>
