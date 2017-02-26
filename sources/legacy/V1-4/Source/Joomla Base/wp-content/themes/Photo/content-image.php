<?php
/**
 * The default template for displaying Image post format
 *
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(is_single() ? 'single-page' : 'archive-page'); ?>>
	<?php get_template_part( 'content', 'header'); ?>

	<?php if ( is_home() || is_search() || is_archive() || is_tag()) : // Only display Excerpts for Search ?>
	<div class="entry entry-summary">
		<?php the_content(''); ?>

		<?php if(is_single()) : ?>
			<?php get_template_part( 'content', 'footer' ); ?>
		<?php endif; ?>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry entry-content">
		<?php the_content(''); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'photo' ) . '</span>', 'after' => '</div>', 'link_before' => '<span>', 'link_after' => '</span>' ) ); ?>

		<?php if(is_single()) : ?>
			<?php get_template_part( 'content', 'footer' ); ?>
		<?php endif; ?>
	</div><!-- .entry-content -->
	<?php endif; ?>
</article><!-- #post -->

