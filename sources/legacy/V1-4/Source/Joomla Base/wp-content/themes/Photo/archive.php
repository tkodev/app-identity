<?php
/**
 *
 * Archive page
 *
 **/

// get category options
$width = get_theme_mod('photo_archive_layout','1');
$type = get_theme_mod('photo_archive_type_layout','1');
$content = get_theme_mod('photo_archive_content_layout','1');

get_header(); ?>

    <div id="primary" class="hfeed <?php 
    if($width == 0) { echo ' site'; } 
    if($type == 1) { echo ' grid'; }
    if($content == 1) { echo ' simple'; }
    ?>" >
        <?php if (is_active_sidebar('top')) : ?>
        <?php do_action('photo_before_top'); ?>
        <div id="gk-top" role="complementary">
            <div class="widget-area gk-3-cols" data-cols="<?php echo GK_Utils::count_sidebar_widgets('top', 3); ?>">
                <?php dynamic_sidebar('top'); ?>
            </div>
        </div>
        <?php do_action('photo_after_top'); ?>
        <?php endif; ?>

        <div id="content" class="site-content portfolio <?php if($content == 0) : echo ' blog-grid'; endif;?>" role="main">     

                <?php do_action('photo_before_content'); ?>
                <?php if ( have_posts() ) : ?>

                <header class="bigtitle no-desc">
                    <h1 class="header">
                        <span>
                            <?php if ( is_day() ) : ?>
                                <?php printf( __( '<span>Daily Archives:</span> %s', 'photo' ), get_the_date() ); ?>
                            <?php elseif ( is_month() ) : ?>
                                <?php printf( __( '<span>Monthly Archives:</span> %s', 'photo' ), get_the_date( 'F Y' ) ); ?>
                            <?php elseif ( is_year() ) : ?>
                                <?php printf( __( '<span>Yearly Archives:</span> %s', 'photo' ),  get_the_date( 'Y' ) ); ?>
                            <?php else : ?>
                                <?php _e( 'Blog Archives', 'photo' ); ?>
                            <?php endif; ?>
                        </span>
                    </h1>
                </header>
                <div id="article-wrap" class="item-list" data-cols="<?php echo get_theme_mod('photo_category_columns', '2'); ?>">

                    <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'content-archive', get_post_format() ); ?>
                    <?php endwhile; ?>
                </div>
        
                    <?php photo_paging_nav(); ?>
                <?php else : ?>
                    <?php get_template_part( 'content', 'none' ); ?>
                <?php endif; ?>
                <?php do_action('photo_after_content'); ?>
            
        </div><!-- #content -->

        <?php if (is_active_sidebar('sidebar')) : ?>
        <?php do_action('photo_before_sidebar'); ?>
        <aside id="sidebar" role="complementary">
            <?php dynamic_sidebar('sidebar'); ?>
        </aside>
        <?php do_action('photo_after_sidebar'); ?>
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
    </div><!-- #primary -->

<?php get_footer(); ?>
