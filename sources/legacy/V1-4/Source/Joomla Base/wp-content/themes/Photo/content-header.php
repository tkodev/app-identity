<?php

	/*
		Template for the entry header
	*/

    $thumb_full = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full');
    $image_url = $thumb_full[0];

?>

<?php if ( is_singular() ) : ?>
<?php if (!is_active_sidebar('top')) : ?>
<header class="entry-header<?php if ( '' == get_the_post_thumbnail()) : ?> no-image<?php endif; ?>"  <?php if ( has_post_thumbnail()) : ?> style="background-image: url('<?php echo $image_url ?>');"<?php endif; ?>>
    <?php if ( has_post_thumbnail() && !post_password_required() ) : ?>
    <?php do_action('photo_before_post_image'); ?>
        <div class="entry-thumbnail">
            <?php if(is_single() || is_page()) : ?>
                <?php echo gk_post_thumbnail_caption(); ?>
            <?php endif; ?>
        </div>
        <?php do_action('photo_after_post_image'); ?>
    <?php endif; ?>

    <?php if(is_sticky()) : ?>
        <sup><i class="gk-icon-star"></i></sup>
    <?php endif; ?>
</header>
<?php endif; ?>
    <?php if (get_post_meta( $post->ID, 'project-description', true ) != '') : ?>
    <div class="item-header gk-clearfix site">
        <div class="item-basic-info">
            <?php
                $title_parts = explode('&#8212;', get_the_title());

                if(count($title_parts) == 1) {
                    $title_parts = explode('&#8211;', get_the_title());
                }
            ?>
            <h1><?php echo trim($title_parts[0]); ?>
            <?php if(isset($title_parts[1])) : ?>
            <small><?php echo trim($title_parts[1]); ?></small>
            <?php endif; ?>
            </h1>
        </div>
        <div class="item-intro-text">
            <div class="project-info">
                <div class="project-description">
                    <?php echo get_post_meta( $post->ID, 'project-description', true ); ?>
                </div>
                <dl class="project-details">
                  <dt><?php _e('Size:','photo'); ?></dt>
                  <dd><?php echo get_post_meta( $post->ID, 'project-size', true ); ?></dd>
                  <dt><?php _e('Completion Date:','photo'); ?></dt>
                  <dd><?php echo get_post_meta( $post->ID, 'project-completion-date', true ); ?></dd>
                  <dt><?php _e('Credits:','photo'); ?></dt>
                  <dd><?php echo get_post_meta( $post->ID, 'project-credits', true ); ?></dd>
                </dl>
                <div class="project-link"> <a href="<?php echo get_post_meta( $post->ID, 'project-link', true ); ?>"><?php _e('Launch Project','photo'); ?></a> </div>
            </div>
        </div>
    </div>
    <?php else : ?>
    <div class="item-content gk-clearfix">
        <p class="item-author">
            <?php
                $avatar_size = apply_filters('photo_author_bio_avatar_size', 85);

                printf( '<span class="author vcard"><a class="url fn n" href="%1$s" title="%2$s" rel="author">%3$s</a></span>',
                    esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
                    esc_attr( sprintf( __( 'View all posts by %s', 'photo' ), get_the_author() ) ),
                    get_avatar( get_the_author_meta( 'user_email' ), $avatar_size )
                );
            ?>
        </p>

        <h<?php echo is_singular() ? '1' : '2'; ?> class="entry-title<?php if(is_sticky()) : ?> sticky<?php endif; ?>">
            <?php if(!is_singular()) : ?><a href="<?php the_permalink(); ?>" rel="bookmark" class="inverse"><?php endif; ?>
            <?php the_title(); ?>
            <?php if(!is_singular()) : ?></a><?php endif; ?>
        </h<?php echo is_singular() ? '1' : '2'; ?>>
        <div class="item-info">
        <?php if(get_post_format() != '') : ?>
            <span class="format gk-format-<?php echo get_post_format(); ?>"></span>
        <?php endif; ?>

        <?php
            if ('post' == get_post_type() ) {
                $date_format = esc_html(get_the_date('l, j F Y'));

                if(get_theme_mod('photo_date_format', 'default') == 'wordpress') {
                    $date_format = get_the_date(get_option('date_format'));
                }

                echo sprintf('<time class="entry-date" datetime="'. esc_attr(get_the_date('c')) . '">'. $date_format . '</time>');
            }
        ?>
        </div>
    </div>
    <?php endif; ?>

<?php endif; ?>

<?php if(is_singular() && (current_user_can('edit_posts') || current_user_can('edit_pages'))) : ?>
<ul class="item-single">
    <li>
        <?php edit_post_link(__( 'Edit', 'photo'), '<span class="edit-link">', '</span>'); ?>
    </li>
</ul>
<?php endif; ?>
