<?php

	/*
		Template for the entry featured image/video
	*/

	$video_code = photo_video_code();

?>

<?php if ( has_post_thumbnail() && !post_password_required() ) : ?>
	<?php do_action('photo_before_post_image'); ?>
	<div class="entry-thumbnail">
		<?php if(!is_singular()) : ?>
		<a href="<?php the_permalink(); ?>" class="entry-thumbnail-wrap">
		<?php endif; ?>
			<?php the_post_thumbnail(); ?>
		<?php if(!is_singular()) : ?>
		</a>
		<?php endif; ?>
	</div>
	<?php do_action('photo_after_post_image'); ?>
<?php elseif($video_code) : ?>
	<?php do_action('photo_before_post_video'); ?>
	<div class="video-wrapper">
		<?php echo $video_code; ?>
	</div>
	<?php do_action('photo_after_post_video'); ?>
<?php endif; ?>
