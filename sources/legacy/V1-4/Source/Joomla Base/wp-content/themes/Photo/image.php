<?php
/**
 * The template for displaying image attachments
 *
 */

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


		<div id="content" class="site-content" role="main">	
			<?php do_action('photo_before_content'); ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'image-attachment' ); ?>>
			<header class="entry-header">
				<h1><?php the_title(); ?></h1>

				 <?php if (!post_password_required() && (comments_open() || get_comments_number())) : ?>
				    <span>
				        <i class="gk-icon-reviews"></i>
				        <span class="comments-link">
				            <?php comments_popup_link( __( '0 comments', 'photo' ), __( '1 comment', 'photo' ), __( '% comments', 'photo' ) ); ?>
				        </span>
				    </span>
				 <?php endif; ?>
			</header>
			<div class="entry-content entry-attachment">
					<div class="attachment">
						<?php photo_the_attached_image(); ?>

						<?php if ( has_excerpt() ) : ?>
						<div class="entry-caption">
							<?php the_excerpt(); ?>
						</div>
						<?php endif; ?>
					</div><!-- .attachment -->

					<?php if ( ! empty( $post->post_content ) ) : ?>
					<div class="entry-description">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'photo' ), 'after' => '</div>' ) ); ?>
					</div><!-- .entry-description -->
					<?php endif; ?>

					<nav id="image-navigation" class="paging-navigation" role="navigation">
						<span class="nav-previous"><?php previous_image_link( false, __( '<span class="meta-nav">&larr;</span> Previous', 'photo' ) ); ?></span>
						<span class="nav-next"><?php next_image_link( false, __( 'Next <span class="meta-nav">&rarr;</span>', 'photo' ) ); ?></span>
					</nav><!-- #image-navigation -->
				</div>
			</article>
			<?php do_action('photo_after_content'); ?>

			<?php comments_template(); ?>
		</div><!-- #content -->


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

<?php get_footer(); ?>
