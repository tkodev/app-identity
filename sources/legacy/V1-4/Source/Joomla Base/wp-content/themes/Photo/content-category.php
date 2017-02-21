<?php
/**
 * The default template for displaying content
 * Used for both single and index/archive/search.
 *
 */

$thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), apply_filters('photo_portfolio_thumb_size','portfolio-thumb'));
$image_url = $thumb[0];
$category = get_the_category(); 
$ids_content = explode(',', get_theme_mod('photo_category_ids_content',''));
$ids_content2 = explode(',', get_theme_mod('photo_category_ids_content2',''));
$content_state = 0;
$content_state2 = 0;
$title_switch = get_theme_mod('photo_category_switch_title','0');

// get the tags
$tag_slugs = '';
$posttags = get_the_tags();
if ($posttags) {
  foreach($posttags as $tag) {
    $tag_slugs .= ' ' . $tag->name;
  }
}

foreach ($ids_content as $cat) {
	if ($cat == $category[0]->cat_ID) {
		$content_state = 1;
	}
}

foreach ($ids_content2 as $cat) {
    if ($cat == $category[0]->cat_ID) {
        $content_state2 = 1;
    }
}

// check if the post has featured image
$bg = '';
if ( has_post_thumbnail()) {
	$bg = ' lazy" data-original="' . $image_url . '';
} else {
	$bg = ' no-image'; 
}

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('item-view gk-active'); ?> data-tags="<?php echo $tag_slugs; ?>" data-link="<?php echo get_permalink(get_the_ID()); ?>" data-text="Read more">
	<div class="item-image-block<?php echo $bg; ?>">
	<?php if ($content_state == 0) : ?>
		<?php if(is_sticky()) : ?>
	        <sup><i class="gk-icon-star"></i></sup>
	    <?php endif; ?>

	    <?php if(get_post_format() != '') : ?>
            <span class="format gk-format-<?php echo get_post_format(); ?>"></span>
        <?php endif; ?>

    	<div class="item-info<?php if($title_switch == 1) { echo ' switched'; }?>" >
    	<?php if(get_theme_mod('photo_category_show_excerpt', 0) == 1) : ?>
    		<p>
                <?php echo substr(get_the_excerpt(), 0, get_theme_mod('photo_category_excerpt_limit', '200')) .'...'; ?>
            </p>
    	<?php endif; ?>
	    <?php
            $avatar_size = apply_filters('photo_author_bio_avatar_size', 80);

            printf( '<span class="author vcard"><a class="url fn n" href="%1$s" title="%2$s" rel="author">%3$s</a></span>',
                esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
                esc_attr( sprintf( __( 'View all posts by %s', 'photo' ), get_the_author() ) ),
                get_avatar( get_the_author_meta( 'user_email' ), $avatar_size )
            );
        ?>
	    <?php if($title_switch == 0) : ?>
	    	<?php
	        	if ('post' == get_post_type() ) {
		            $date_format = get_the_date(get_theme_mod('photo_date_format_archive', 'j.m.Y'));

		            echo sprintf('<time class="entry-date" datetime="'. esc_attr(get_the_date('c')) . '">'. $date_format . '</time>');
		        }
	   		?>

		    <h2><a href="<?php the_permalink(); ?>" rel="bookmark" class="inverse"><?php the_title(); ?></a></h2>	
    	<?php else : ?>
    		<h2><a href="<?php the_permalink(); ?>" rel="bookmark" class="inverse"><?php the_title(); ?></a></h2>	
    		<?php
        	if ('post' == get_post_type() ) {
	            $date_format = get_the_date(get_theme_mod('photo_date_format_archive', 'j.m.Y'));

	            echo sprintf('<time class="entry-date" datetime="'. esc_attr(get_the_date('c')) . '">'. $date_format . '</time>');
	        }
	    	?>
    	<?php endif; ?>    

    	</div>
    <?php else : ?>
		<?php if ($content_state2 == 1) : ?>
			<?php if ( has_post_thumbnail() && !post_password_required() ) : ?>
				<?php do_action('photo_before_post_image'); ?>
				<div class="entry-thumbnail">
					<a href="<?php the_permalink(); ?>" class="entry-thumbnail-wrap">
						<?php the_post_thumbnail(apply_filters('photo_portfolio_thumb_size','portfolio-thumb')); ?>
					</a>
				</div>
			<?php endif; ?>
		<?php else : ?>
			<?php
			    $title_parts = explode('&#8212;', get_the_title());

			    if(count($title_parts) == 1) {
			        $title_parts = explode('&#8211;', get_the_title());
			    }
			?>
			<h2><?php echo trim($title_parts[0]); ?>
			<?php if(isset($title_parts[1])) : ?>
			<small><?php echo trim($title_parts[1]); ?></small>
			<?php endif; ?>
			</h2>
		<?php endif; ?>
        <?php if(is_sticky()) : ?>
	        <sup><i class="gk-icon-star"></i></sup>
	    <?php endif; ?>
	<?php endif; ?>
	</div>
</article><!-- #post -->

