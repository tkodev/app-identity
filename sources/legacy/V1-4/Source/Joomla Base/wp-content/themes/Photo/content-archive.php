<?php
/**
 * The default template for displaying content
 * Used for archive pages.
 *
 */

$thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), apply_filters('photo_portfolio_thumb_size','portfolio-thumb'));
$image_url = $thumb[0];
$content_front = get_theme_mod('photo_front_content_layout','1');
$content_tag = get_theme_mod('photo_tag_content_layout','1');
$content_search = get_theme_mod('photo_search_content_layout','1');
$content_author = get_theme_mod('photo_author_content_layout','1');
$content_archive = get_theme_mod('photo_archive_content_layout','1');
$title_switch = get_theme_mod('photo_category_switch_title','0');

// get the tags
$tag_slugs = '';
$posttags = get_the_tags();
if ($posttags) {
  foreach($posttags as $tag) {
    $tag_slugs .= ' ' . $tag->name;
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
	<?php if (
			(is_tag() && $content_tag == 0 ) || 
			(is_home() && $content_front == 0) ||
			(is_search() && $content_search == 0) ||
			(is_author() && $content_author == 0) ||
			(is_archive() && !is_author() && $content_archive == 0)
		) : ?>
		<?php if(is_sticky()) : ?>
	        <sup><i class="gk-icon-star"></i></sup>
	    <?php endif; ?>

    	<div class="item-info<?php if($title_switch == 1) { echo ' switched'; }?>" >
	    
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

        <?php if(is_sticky()) : ?>
	        <sup><i class="gk-icon-star"></i></sup>
	    <?php endif; ?>
	<?php endif; ?>
	</div>
</article><!-- #post -->

