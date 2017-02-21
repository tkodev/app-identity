<?php
/**
 * The template for displaying Category pages
 *
 */

// get category options
$ids_width = explode(',', get_theme_mod('photo_category_ids',''));
$ids_grid = explode(',', get_theme_mod('photo_category_ids_grid',''));
$ids_content = explode(',', get_theme_mod('photo_category_ids_content',''));
$ids_content2 = explode(',', get_theme_mod('photo_category_ids_content2',''));
$category = get_the_category(); 
$full_width_state = 0;
$grid_state = 0;
$content_state = 0;
$content_state2 = 0;

foreach ($ids_width as $cat) {
    if ($cat == $category[0]->cat_ID) {
        $full_width_state = 1;
    } 
}

foreach ($ids_grid as $cat) {
    if ($cat == $category[0]->cat_ID) {
        $grid_state = 1;
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

get_header(); ?>

    <div id="primary" class="hfeed <?php 
    if($full_width_state == 0) { echo ' site'; } 
    if($grid_state == 1) { echo ' grid'; }
    if($content_state == 1) { echo ' simple'; }
    if($content_state2 == 1) { echo ' simple-second'; }
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

        <div id="content" class="site-content portfolio <?php if($content_state == 0) : echo ' blog-grid'; endif;?>" role="main">                             

                <?php do_action('photo_before_content'); ?>
                <?php if ( have_posts() ) : ?>

                <header class="bigtitle<?php if(!category_description()) : ?> no-desc<?php endif; ?>">
                <h1 class="header">
                    <span>
                        <?php echo single_cat_title( '', false ); ?>
                        <sup>(<?php
                            $category = get_the_category();
                            echo $category[0]->category_count;
                        ?>)</sup>
                    </span>

                    <?php if ( category_description() ) : ?>
                    <small><?php echo strip_tags(category_description()); ?></small>
                    <?php endif; ?>
                </h1>

                <?php if(function_exists('gk_taxonomy_image')) : ?>
                    <?php $img = gk_taxonomy_image($category[0]->term_id, 'category-image', '', false); ?>

                    <?php if($img) : ?>
                        <?php echo '<div class="category-image-wrap">'; ?>
                        <?php echo $img; ?>
                        <?php echo '</div>'; ?>
                    <?php endif; ?>
                <?php endif; ?>
                </header><!-- .archive-header -->

                <div class="site">      
                    <?php
                        $cat = get_the_category();
                        $args_global = array( 
                            'cat' => $cat[0]->cat_ID,
                            'post_type'   => 'post',
                        );
                        $loop_global = new WP_Query( $args_global );
                        if ($loop_global->have_posts()) {
                            while ($loop_global->have_posts()) {
                                $loop_global->the_post();
                                $posttags = get_the_tags();
                                if ($posttags) {
                                    foreach($posttags as $tag) {
                                        $all_tags_arr[] = $tag -> name;    
                                    }
                                } 
                            }
                        } 
                        wp_reset_query();
                        if (count($all_tags_arr) > 0) : ?>

                            <?php $tags_arr = array_unique($all_tags_arr); ?>

                            <div class="item-filter gk-half-page">
                                <?php _e('Filter:','photo'); ?> <strong id="item-filter-selected" data-value=""><?php _e('All','photo'); ?></strong>
                                
                                <ol id="item-filter-dropdown">
                                    <li data-value=""><?php _e('All','photo'); ?></li>
                                    <?php foreach($tags_arr as $tag) : ?>
                                    <li data-value="<?php echo $tag; ?>"><?php echo $tag; ?></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                        <?php endif; ?>
                </div>

                <div id="article-wrap" class="item-list" data-cols="<?php echo get_theme_mod('photo_category_columns', '2'); ?>">

                    <?php while ( have_posts() ) : the_post(); ?>
                        
                        <?php get_template_part( 'content-category', get_post_format() ); ?>

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