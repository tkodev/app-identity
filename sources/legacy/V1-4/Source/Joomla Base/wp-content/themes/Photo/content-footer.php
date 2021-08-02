<?php

	/*
		Template for the content item footer
	*/

?>

<?php do_action('photo_before_post_meta'); ?>
<footer class="entry-meta">
	<?php if(is_single()) : ?>
	<?php do_action('photo_before_post_tags'); ?>
	<div class="entry-tags">
		<?php
			// Translators: used between list items, there is a space after the comma.
			$tag_list = get_the_tag_list('', ' ');
			if ( $tag_list ) {
				echo '<span class="tags-links">' . $tag_list . '</span>';
			}
		?>
	</div>
	<?php do_action('photo_after_post_tags'); ?>
	<?php endif; ?>

    <?php if(is_singular() && get_theme_mod('photo_'.(is_page() ? 'page' : 'post').'_social_icons', '1') == '1') : ?>
        <?php do_action('photo_before_social_icons'); ?>
        <div class="entry-social-sharing">
            <?php do_action('photo_before_twitter_icon'); ?>

            <div class="entry-twitter-button">
                <a href="https://twitter.com/share" class="twitter-share-button" data-count="vertical">Tweet</a>
                <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
            </div>

            <?php do_action('photo_after_twitter_icon'); ?>

            <div class="entry-facebook-button">
                <script type="text/javascript">
                    jQuery(window).load(function(){
                        var root = document.createElement('div');
                        root.id = 'fb-root';
                        jQuery('.entry-facebook-button')[0].appendChild(root);
                        (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) {return;}
                            js = d.createElement(s); js.id = id;
                            js.src = document.location.protocol + "//connect.facebook.net/en_US/all.js#xfbml=1";
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                    });
                </script>
                <div class="fb-like" data-width="150" data-layout="box_count" data-action="like" data-show-faces="false"></div>
            </div>

            <?php do_action('photo_after_fb_icon'); ?>

            <div class="entry-gplus-button">
                <div class="g-plusone" data-size="tall"></div>
                <?php
                	$lang = explode('-', get_bloginfo('language'));
					$lang = $lang[0];
                ?>
                <script type="text/javascript">
                window.___gcfg = {lang: '<?php echo $lang; ?>'};

                (function() {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'https://apis.google.com/js/platform.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                })();
                </script>
            </div>

            <?php do_action('photo_after_gplus_icon'); ?>
        </div>
        <?php do_action('photo_after_social_icons'); ?>
    <?php endif; ?>

	<?php
		if ('post' == get_post_type() && get_theme_mod('photo_related_posts', '1') == '1') {
			//for use in the loop, list 5 post titles related to first tag on current post
			$tags = wp_get_post_tags($post->ID);
			if ($tags) {
				do_action('photo_before_related_posts');
				$first_tag = $tags[0]->term_id;
				$args=array(
					'tag__in' => array($first_tag),
					'post__not_in' => array($post->ID),
					'posts_per_page' => 5,
					'ignore_sticky_posts' => 1
				);
				$my_query = new WP_Query($args);
				if( $my_query->have_posts() ) {
					echo '<div class="entry-related">';
					echo '<h3>' . __('Related Posts', 'photo') . '</h3>';

					while ($my_query->have_posts()) {
						$my_query->the_post();
						?>
						<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Permanent Link to ', 'photo'); ?><?php the_title_attribute(); ?>" class="inverse">
							<?php the_post_thumbnail('medium'); ?>
							<strong><?php the_title(); ?></strong>
						</a>
						<?php
					}

					echo '</div>';
				}
				wp_reset_query();
				do_action('photo_after_related_posts');
			}
		}
	?>
</footer><!-- .entry-meta -->
<?php do_action('photo_after_post_meta'); ?>
<?php

// EOF
