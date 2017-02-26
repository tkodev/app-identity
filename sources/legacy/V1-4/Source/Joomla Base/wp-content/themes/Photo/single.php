<?php
/**
 * The template for displaying all single posts
 */

get_header(); ?>

	<div id="primary" class="hfeed">
		<?php if (is_active_sidebar('top')) : ?>
		<?php do_action('photo_before_top'); ?>
		<div id="gk-top" role="complementary">
			<div class="widget-area gk-3-cols" data-cols="<?php echo GK_Utils::count_sidebar_widgets('top', 3); ?>">
				<?php dynamic_sidebar('top'); ?>
			</div>
		</div>
		<?php do_action('photo_after_top'); ?>
		<?php endif; ?>

		<?php if ( have_posts() ) : ?>
		<div id="content" class="site-content" role="main">		
			<?php do_action('photo_before_content'); ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', get_post_format() ); ?>
				<?php comments_template(); ?>
			<?php endwhile; ?>
			<?php do_action('photo_after_content'); ?>
			
		</div><!-- #content -->
		<?php endif; ?>

		<?php if (is_active_sidebar('bottom')) : ?>
		<?php do_action('photo_before_bottom'); ?>
		<div id="gk-bottom" role="complementary">
			<div class="widget-area gk-3-cols" data-cols="<?php echo GK_Utils::count_sidebar_widgets('bottom', 3); ?>">
				<?php dynamic_sidebar('bottom'); ?>
			</div>
		</div>
		<?php do_action('photo_after_bottom'); ?>
		<?php endif; ?>

		<?php if (is_active_sidebar('bottom2')) : ?>
		<?php do_action('photo_before_bottom2'); ?>
		<div id="gk-bottom2" role="complementary">
			<div class="widget-area gk-3-cols" data-cols="<?php echo GK_Utils::count_sidebar_widgets('bottom2', 3); ?>">
				<?php dynamic_sidebar('bottom2'); ?>
			</div>
		</div>
		<?php do_action('photo_after_bottom2'); ?>
		<?php endif; ?>
	</div><!-- #primary -->

<?php get_footer(); ?>