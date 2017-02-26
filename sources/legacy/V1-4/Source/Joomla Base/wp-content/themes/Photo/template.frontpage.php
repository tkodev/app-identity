<?php
/*
Template Name: Frontpage
*/

//create arguments for custom main loop
$args_global = array( 
    'post_parent' => $post->ID,
    'post_type'   => 'page',
    'order' => 'ASC',
    'orderby' => 'menu_order',
    'post_status' => 'publish' 
);
$loop_global = new WP_Query( $args_global );

// set counter
$counter_slides = 0;

// settings connected with the slider
$autoanim = 'off';
if (get_theme_mod('photo_slider_autoanimation', 1) == 1) {
    $autoanim = 'on';
}
$interval = get_theme_mod('photo_slider_interval', '5000');

get_header('frontpage'); ?>
    
    <?php do_action('photo_before_content'); ?>
        <div id="frontpage-wrap" role="main">
                    
                    <?php if ( $loop_global->have_posts() ) : ?>
                
                    <div id="gk-header-mod">
                        <div id="gk-is-photo" class="gk-is-wrapper-gk-photo" data-speed="200" data-interval="<?php echo $interval; ?>" data-autoanim="<?php echo $autoanim; ?>">
                            <div class="gk-is-preloader"><span></span></div>
                            
                           <?php while ( $loop_global->have_posts() ) : $loop_global->the_post(); ?>   
                                <?php $link = get_post_meta( $post->ID, 'slide_url', true ); ?>           
                                <figure data-zindex="<?php echo $counter_slides + 1; ?>" data-url="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" data-link="<?php echo $link; ?>" data-title="<?php the_title(); ?>">
                                    <figcaption <?php if(get_theme_mod('photo_slider_dark_colors', 0) == 1) { echo 'data-theme="dark"'; } ?>>
                                        
                                        <?php if (get_theme_mod('photo_slider_show_title', 1) == 1) : ?>
                                            <h2><?php the_title(); ?></h2>
                                            <?php the_content(); ?>
                                        <?php endif; ?>

                                        <?php if( $link != ''): ?>
                                        <?php 
                                            $link_text = '';
                                            // parsing custom texts
                                            $link_match_text = array();
                                            
                                            if(preg_match('@^\[(.*?)\]@mis', $link, $link_match_text) == 1) {
                                                $link = preg_replace('@^\[.*?\]@mis', '', $link);
                                                $link_text = $link_match_text[1];
                                            } else {
                                                $link_text = __('Read more', 'photo');
                                            }
                                        ?>
                                        <a href="<?php echo $link; ?>"><?php echo $link_text; ?></a>
                                        <?php endif; ?>
                                    </figcaption>
                                </figure>
                                <?php $counter_slides++; ?>
                            <?php endwhile; ?>  
                
                            <?php if (get_theme_mod('photo_slider_show_pagination', 1) == 1) : ?>
                            <ul class="gk-is-pagination">               
                            <?php 
                                for($j = 0; $j < $counter_slides; $j++) {
                                    echo '<li'.($j == 0 ? ' class="active"' : '').'>'.($j+1).'</li>';
                                }
                            ?>          
                            </ul>
                            <?php endif; ?>
                                
                        </div>
                    </div>
                    
                    <?php else : ?> 
                    <div class="frontpage-block">
                    
                        <h3><?php _e('There are no available slides, please add subpages (with featured images) into your frontpage template.', 'photo'); ?></h3>
                      
                    </div>
                        
                    <?php wp_reset_query(); ?>
                    <?php endif; ?>
        </div><!-- frontpage-wrap -->
    <?php do_action('photo_after_content'); ?>
<?php get_footer('frontpage'); ?>
