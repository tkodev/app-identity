<?php

global $wp_customize;

get_template_part('theme-customizer-extensions/color-utils');
get_template_part('theme-customizer-extensions/category-checklist');

if (isset($wp_customize)) {

	/* Add additional options to Theme Customizer */
	function photo_init_customizer( $wp_customize ) {
		// Used fonts
		$body_font = '//fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700';
		$header_font = '';
		$other_font = '';

		// Selectors for the used fonts
		$body_font_selectors = 'body,
button,
.button,
input,
select,
textarea';

	$header_font_selectors = '';
	
	$other_font_selectors = '';

        // Add new settings sections
        $wp_customize->add_panel( 
        	'photo_advanced_layout', 
        	array(
		    'priority'       => 350,
		    'capability'     => 'edit_theme_options',
		    'theme_supports' => '',
		    'title'          => 'Advanced layout',
		    'description'    => 'Options connected with archive pages layout',
			) 
		);

	    $wp_customize->add_section(
		    'photo_font_options',
		    array(
		        'title'     => __('Font options', 'photo'),
		        'capability' => 'edit_theme_options',
		        'priority'  => 200
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_layout_options',
		    array(
		        'title'     => __('Layout', 'photo'),
		        'capability' => 'edit_theme_options',
		        'priority'  => 300
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_features_options',
		    array(
		        'title'     => __('Features', 'photo'),
		        'capability' => 'edit_theme_options',
		        'priority'  => 400
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_frontpage_options',
		    array(
		        'title'     => __('Frontpage', 'photo'),
		        'capability' => 'edit_theme_options',
		        'description' => 'Frontpage settings are visible only on your frontpage.',
		        'priority'  => 500
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_category_type_options',
		    array(
		        'title'     => __('Layout type', 'photo'),
		        'capability' => 'edit_theme_options',
		        'description' => __('Selected archive pages and categories will have grid layout, the rest will have layout width margins between articles', 'photo'),
		        'panel'  => 'photo_advanced_layout',
		        'priority'  => 600
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_category_width_options',
		    array(
		        'title'     => __('Layout width', 'photo'),
		        'capability' => 'edit_theme_options',
		        'description' => __('Selected archive pages and categories will have fullwidth layout, the rest will have layout width specified in the Theme Layout section', 'photo'),
		        'panel'  => 'photo_advanced_layout',
		        'priority'  => 700
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_category_content_options',
		    array(
		        'title'     => __('Archive content', 'photo'),
		        'capability' => 'edit_theme_options',
		        'description' => __('Selected archive pages and categories will have simple content with title and dark overlay only, the rest will have advanced content with light overlay','photo'),
		        'panel'  => 'photo_advanced_layout',
		        'priority'  => 800
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_category_other_options',
		    array(
		        'title'     => __('Other category options', 'photo'),
		        'capability' => 'edit_theme_options',
		        'description' => __('These options are common for all category layouts','photo'),
		        'panel'  => 'photo_advanced_layout',
		        'priority'  => 900
	    	)
	    );

	    $wp_customize->add_section(
		    'photo_template_contact',
		    array(
		        'title'     => __('Contact Page', 'photo'),
		        'capability' => 'edit_theme_options',
		        'description' => __('These options are visible only on the contact template page.','photo'),
		        'priority'  => 1000
	    	)
	    );

	    // Add new settings
	    $wp_customize->add_setting(
	    	'photo_primary_color',
	    	array(
	    		'default' => '#cc6060',
	    		'capability' => 'edit_theme_options',
	    		'transport' => 'postMessage',
	    		'sanitize_callback' => 'sanitize_hex_color'
	    	)
	    );

	    $wp_customize->add_setting(
	    	'photo_secondary_color',
	    	array(
	    		'default' => '#212529',
	    		'capability' => 'edit_theme_options',
	    		'transport' => 'postMessage',
	    		'sanitize_callback' => 'sanitize_hex_color'
	    	)
	    );

        $wp_customize->add_setting(
            'photo_body_font',
            array(
                'default'   => 'google',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'photo_sanitize_font'
            )
        );

        $wp_customize->add_setting(
            'photo_body_google_font',
            array(
                'default'   => $body_font,
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'esc_url_raw'
            )
        );

        $wp_customize->add_setting(
            'photo_body_font_selectors',
            array(
                'default'   => $body_font_selectors,
                'capability' => 'edit_theme_options',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'esc_textarea'
            )
        );

		$wp_customize->add_setting(
			'photo_headers_font',
			array(
			    'default'   => 'google',
			    'capability' => 'edit_theme_options',
			    'sanitize_callback' => 'photo_sanitize_font'
			)
		);

		$wp_customize->add_setting(
		    'photo_headers_google_font',
		    array(
		        'default'   => $header_font,
		        'capability' => 'edit_theme_options',
		        'sanitize_callback' => 'esc_url_raw'
		    )
		);

		$wp_customize->add_setting(
			'photo_headers_font_selectors',
			array(
			    'default'   => $header_font_selectors,
			    'capability' => 'edit_theme_options',
			    'sanitize_callback' => 'esc_textarea'
			)
		);

        $wp_customize->add_setting(
            'photo_other_font',
            array(
                'default'   => 'google',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'photo_sanitize_font'
            )
        );

        $wp_customize->add_setting(
            'photo_other_google_font',
            array(
                'default'   => $other_font,
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'esc_url_raw'
            )
        );

        $wp_customize->add_setting(
            'photo_other_font_selectors',
            array(
                'default'   => $other_font_selectors,
                'capability' => 'edit_theme_options',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'esc_textarea'
            )
        );

		$wp_customize->add_setting(
			'photo_theme_width',
			array(
				'default'   => '1900',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_tablet_width',
			array(
				'default'   => '1240',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_small_tablet_width',
			array(
				'default'   => '840',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_mobile_width',
			array(
				'default'   => '640',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_sidebar_width',
			array(
				'default'   => '33.333333',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_sidebar_pos',
			array(
				'default'   => 'right',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_sidebar_pos'
			)
		);

		$wp_customize->add_setting(
			'photo_narrow_width',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

        $wp_customize->add_setting(
            'photo_menu_logo',
            array(
                'default' => '',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'esc_url_raw'
            )
        );

        $wp_customize->add_setting(
            'photo_top_logo',
            array(
                'default' => '',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'esc_url_raw'
            )
        );

        $wp_customize->add_setting(
            'photo_word_break',
            array(
                'default'   => '0',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'photo_sanitize_switch'
            )
        );

        $wp_customize->add_setting(
			'photo_scroll_reveal',
			array( 
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_related_posts',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_post_social_icons',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_page_social_icons',
			array(
				'default'   => '0',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_date_format',
			array(
				'default'   => 'default',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_date_format'
			)
		);

		$wp_customize->add_setting(
			'photo_date_format_archive',
			array(
				'default'   => 'j.m.Y',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		$wp_customize->add_setting(
			'photo_copyright_text',
			array(
				'default'   => '&copy; 2014 GavickPro. All rights reserved.',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		$wp_customize->add_setting(
			'photo_slider_autoanimation',
			array(
				'default'   => 1,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_slider_interval',
			array(
				'default'   => '5000',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_slider_background',
			array(
				'default'   => '#f1f1f1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_hex_color'
			)
		);

		$wp_customize->add_setting(
			'photo_slider_dark_colors',
			array(
				'default'   => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_slider_show_title',
			array(
				'default'   => 1,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_slider_show_pagination',
			array(
				'default'   => 1,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_category_ids',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_validate_category_checklist'
			)
		);

		$wp_customize->add_setting(
			'photo_category_ids_grid',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_validate_category_checklist'
			)
		);

		$wp_customize->add_setting(
			'photo_category_ids_content2',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_validate_category_checklist'
			)
		);

		$wp_customize->add_setting(
			'photo_category_ids_content',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_validate_category_checklist'
			)
		);

		$wp_customize->add_setting(
			'photo_category_columns',
			array(
				'default'   => '2',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_image',
			array(
				'default'   => '800',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_image2',
			array(
				'default'   => '640',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_image3',
			array(
				'default'   => '480',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_image4',
			array(
				'default'   => '320',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_image5',
			array(
				'default'   => '240',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_switch_title',
			array(
				'default'   => '0',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_category_show_excerpt',
			array(
				'default'   => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);
		
		$wp_customize->add_setting(
			'photo_category_excerpt_limit',
			array(
				'default'   => 150,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_category_image5',
			array(
				'default'   => '240',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_front_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_tag_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_search_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_author_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_archive_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_tag_type_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_front_type_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_search_type_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_author_type_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_archive_type_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_front_content_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_tag_content_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_search_content_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_author_content_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_archive_content_layout',
			array(
				'default'   => '1',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_enable_captcha',
			array(
				'default'   => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_public_key',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_private_key',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_email',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_enable_map',
			array(
				'default'   => 1,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_enable_ui',
			array(
				'default'   => 1,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_switch'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_map_zoom',
			array(
				'default'   => '8',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'photo_sanitize_number'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_latitude',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		$wp_customize->add_setting(
			'photo_contact_longitude',
			array(
				'default'   => '',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_text_field'
			)
		);

		// Add control for the settings
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'photo_primary_color',
				array(
					'label' => __('Primary Color', 'photo'),
					'section' => 'colors',
					'settings' => 'photo_primary_color'
				)
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'photo_secondary_color',
				array(
					'label' => __('Secondary Color', 'photo'),
					'section' => 'colors',
					'settings' => 'photo_secondary_color'
				)
			)
		);

		$wp_customize->add_control(
		    'photo_body_font',
		    array(
		        'section'  => 'photo_font_options',
		        'label'    => __('Body Font', 'photo'),
		        'type'     => 'select',
		        'choices'  => array(
		        	'google'    		=> 'Google Font',
		        	'verdana'   		=> 'Verdana',
		        	'georgia'    		=> 'Georgia',
		        	'arial'      		=> 'Arial',
		        	'impact'     		=> 'Impact',
		        	'tahoma'     		=> 'Tahoma',
		            'times'      		=> 'Times New Roman',
		            'comic sans ms'     => 'Comic Sans MS',
		            'courier new'   	=> 'Courier New',
		            'helvetica'  		=> 'Helvetica'
		        ),
		        'priority' => 0
		   	 )
		);

		$wp_customize->add_control(
		    'photo_body_google_font',
		    array(
		        'section'  => 'photo_font_options',
		        'label'    => __('Google Font URL for the Body', 'photo'),
		        'active_callback' => 'photo_show_font_field',
		        'type'     => 'text',
		        'priority' => 1
	    	)
		);

		$wp_customize->add_control(
			'photo_body_font_selectors',
			array(
		    	'type' => 'textarea',
		    	'label' => __('Selectors for the body font', 'photo'),
		    	'section' => 'photo_font_options',
		    	'priority' => 2
			)
		);

        $wp_customize->add_control(
            'photo_headers_font',
            array(
                'section'  => 'photo_font_options',
                'label'    => __('Header Font', 'photo'),
                'type'     => 'select',
                'choices'  => array(
                    'google'            => 'Google Font',
                    'verdana'           => 'Verdana',
                    'georgia'           => 'Georgia',
                    'arial'             => 'Arial',
                    'impact'            => 'Impact',
                    'tahoma'            => 'Tahoma',
                    'times'             => 'Times New Roman',
                    'comic sans ms'     => 'Comic Sans MS',
                    'courier new'       => 'Courier New',
                    'helvetica'         => 'Helvetica'
                ),
                'priority' => 3
             )
        );

        $wp_customize->add_control(
            'photo_headers_google_font',
            array(
                'section'  => 'photo_font_options',
                'label'    => __('Google Font URL for Header', 'photo'),
                'type'     => 'text',
                'active_callback' => 'photo_show_font_headers',
                'priority' => 4
            )
        );

        $wp_customize->add_control(
            'photo_headers_font_selectors',
            array(
                'label' => __('Selectors for the header font', 'photo'),
                'section' => 'photo_font_options',
                'type' => 'textarea',
                'priority' => 5
            )
        );

        $wp_customize->add_control(
            'photo_other_font',
            array(
                'section'  => 'photo_font_options',
                'label'    => __('Other Elements Font', 'photo'),
                'type'     => 'select',
                'choices'  => array(
                    'google'            => 'Google Font',
                    'verdana'           => 'Verdana',
                    'georgia'           => 'Georgia',
                    'arial'             => 'Arial',
                    'impact'            => 'Impact',
                    'tahoma'            => 'Tahoma',
                    'times'             => 'Times New Roman',
                    'comic sans ms'     => 'Comic Sans MS',
                    'courier new'       => 'Courier New',
                    'helvetica'         => 'Helvetica'
                ),
                'priority' => 6
             )
        );

        $wp_customize->add_control(
            'photo_other_google_font',
            array(
                'section'  => 'photo_font_options',
                'label'    => __('Google Font URL for the other elements', 'photo'),
                'type'     => 'text',
                'active_callback' => 'photo_show_font_other',
                'priority' => 7
            )
        );

        $wp_customize->add_control(
            'photo_other_font_selectors',
            array(
                'label' => __('Selectors for the other elements font', 'photo'),
                'section' => 'photo_font_options',
                'type' => 'textarea',
                'priority' => 8
            )
        );

		$wp_customize->add_control(
		    'photo_theme_width',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Theme width (px)', 'photo'),
		        'type'     => 'text',
		        'priority' => 0
			)
		);

		$wp_customize->add_control(
		    'photo_tablet_width',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Tablet width (px)', 'photo'),
		        'type'     => 'text',
		        'priority' => 1
			)
		);

		$wp_customize->add_control(
		    'photo_small_tablet_width',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Small tablet width (px)', 'photo'),
		        'type'     => 'text',
		        'priority' => 2
			)
		);

		$wp_customize->add_control(
		    'photo_mobile_width',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Mobile width (px)', 'photo'),
		        'type'     => 'text',
		        'priority' => 3
			)
		);

		$wp_customize->add_control(
		    'photo_sidebar_width',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Sidebar width (%)', 'photo'),
		        'type'     => 'text',
		        'priority' => 4
			)
		);

		$wp_customize->add_control(
		    'photo_sidebar_pos',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Sidebar position', 'photo'),
		        'type'     => 'select',
		        'choices'  => array(
		            'left'     => __('Left', 'photo'),
		            'right'    => __('Right', 'photo')
		        ),
		        'priority' => 5
		    )
		);

		$wp_customize->add_control(
		    'photo_narrow_width',
		    array(
		        'section'  => 'photo_layout_options',
		        'label'    => __('Narrow width', 'photo'),
		        'description' => __('Creates more narrow version of the page', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 6
		    )
		);

        $wp_customize->add_control(
           new WP_Customize_Image_Control(
               $wp_customize,
               'photo_menu_logo',
               array(
                   'label'      => __('Upload an image logo for the bottom menu', 'photo'),
                   'section'    => 'photo_features_options',
                   'settings'   => 'photo_menu_logo',
                   'priority'   => 1
               )
           )
        );

        $wp_customize->add_control(
           new WP_Customize_Image_Control(
               $wp_customize,
               'photo_top_logo',
               array(
                   'label'      => __('Upload top image logo', 'photo'),
                   'section'    => 'photo_features_options',
                   'settings'   => 'photo_top_logo',
                   'priority'   => 1
               )
           )
        );

        $wp_customize->add_control(
            'photo_word_break',
            array(
                'section'  => 'photo_features_options',
                'label'    => __('Enable word-break', 'photo'),
                'type'     => 'checkbox',
                'priority' => 2
            )
        );

        $wp_customize->add_control(
		    'photo_scroll_reveal',
		    array(
		        'section'  => 'photo_features_options',
		        'label'    => __('Use Scroll Reveal', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 1
		    )
		);

		$wp_customize->add_control(
		    'photo_related_posts',
		    array(
		        'section'  => 'photo_features_options',
		        'label'    => __('Display related posts', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 4
		    )
		);

		$wp_customize->add_control(
		    'photo_post_social_icons',
		    array(
		        'section'  => 'photo_features_options',
		        'label'    => __('Post Social Icons', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 6
		    )
		);

		$wp_customize->add_control(
		    'photo_page_social_icons',
		    array(
		        'section'  => 'photo_features_options',
		        'label'    => __('Page Social Icons', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 7
		    )
		);

		$wp_customize->add_control(
		    'photo_date_format',
		    array(
		        'section'  => 'photo_features_options',
		        'label'    => __('Date format', 'photo'),
		        'type'     => 'select',
		        'choices'  => array(
		            'default'     => __('Default theme format', 'photo'),
		            'wordpress'     => __('WordPress Date Format', 'photo')
		        ),
		        'priority' => 9
		    )
		);

		$wp_customize->add_control(
            'photo_date_format_archive',
            array(
                'section'  => 'photo_category_other_options',
                'label'    => __('Archives date format', 'photo'),
                'type'     => 'text',
                'priority' => 10
            )
        );

		$wp_customize->add_control(
		    'photo_copyright_text',
		    array(
		        'section'  => 'photo_features_options',
		        'label'    => __('Copyright text', 'photo'),
		        'type'     => 'text',
		        'priority' => 11
			)
		);

		$wp_customize->add_control(
		    'photo_slider_autoanimation',
		    array(
		        'section'  => 'photo_frontpage_options',
		        'label'    => __('Enable autoanimation', 'photo'),
		        'type'     => 'checkbox',
		        'active_callback' => 'photo_show_on_slider',
		        'priority' => 1
		    )
		);

		$wp_customize->add_control(
		    'photo_slider_interval',
		    array(
		        'section'  => 'photo_frontpage_options',
		        'label'    => __('Animation interval (ms)', 'photo'),
		        'type'     => 'text',
		        'active_callback' => 'photo_show_slider_interval',
		        'priority' => 2
		    )
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'photo_slider_background',
				array(
					'label' => __('Background Color', 'photo'),
					'section' => 'photo_frontpage_options',
					'settings' => 'photo_slider_background',
					'active_callback' => 'photo_show_on_slider',
					'priority' => 3
				)
			)
		);

        $wp_customize->add_control(
            'photo_slider_dark_colors',
            array(
                'section'  => 'photo_frontpage_options',
                'label'    => __('Use dark color scheme', 'photo'),
                'type'     => 'checkbox',
                'active_callback' => 'photo_show_on_slider',
                'priority' => 5
            )
        );

        $wp_customize->add_control(
            'photo_slider_show_title',
            array(
                'section'  => 'photo_frontpage_options',
                'label'    => __('Show title block', 'photo'),
                'type'     => 'checkbox',
                'active_callback' => 'photo_show_on_slider',
                'priority' => 7
            )
        );

        $wp_customize->add_control(
		    'photo_slider_show_pagination',
		    array(
		        'section'  => 'photo_frontpage_options',
		        'label'    => __('Show pagination', 'photo'),
		        'type'     => 'checkbox',
		        'active_callback' => 'photo_show_on_slider',
		        'priority' => 8
			)
		);

        $wp_customize->add_control(
            new Photo_Customize_Category_Checklist(
		        $wp_customize,
		        'photo_category_ids',
		        array(
		            'label'   => __('Select categories', 'photo'),
		            'section' => 'photo_category_width_options'
		        )
		    )
        );

        $wp_customize->add_control(
            new Photo_Customize_Category_Checklist(
		        $wp_customize,
		        'photo_category_ids_grid',
		        array(
		            'label'   => __('Select categories', 'photo'),
		            'section' => 'photo_category_type_options'
		        )
		    )
        );

        $wp_customize->add_control(
            new Photo_Customize_Category_Checklist(
		        $wp_customize,
		        'photo_category_ids_content2',
		        array(
		            'label'   => __('Select categories', 'photo'),
		            'section' => 'photo_category_content_options',
		            'description' => __('Selected categories will have different version of simple content (with lower images, hover effect and without title, like example Portfolio II category)', 'photo'),
		            'priority' => 7
		        )
		    )
        );

        $wp_customize->add_control(
            new Photo_Customize_Category_Checklist(
		        $wp_customize,
		        'photo_category_ids_content',
		        array(
		            'label'   => __('Select categories', 'photo'),
		            'section' => 'photo_category_content_options',
		            'priority' => 6
		        )
		    )
        );

		$wp_customize->add_control(
		    'photo_category_columns',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Number of columns', 'photo'),
		        'type'     => 'text',
		        'priority' => 1
			)
		);

		$wp_customize->add_control(
		    'photo_category_image',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Image height (px)', 'photo'),
		        'type'     => 'text',
		        'priority' => 3
			)
		);

		$wp_customize->add_control(
		    'photo_category_image2',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Image height (px) - small desktop', 'photo'),
		        'type'     => 'text',
		        'priority' => 4
			)
		);

		$wp_customize->add_control(
		    'photo_category_image3',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Image height (px) - tablet', 'photo'),
		        'type'     => 'text',
		        'priority' => 5
			)
		);

		$wp_customize->add_control(
		    'photo_category_image4',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Image height (px) - small tablet', 'photo'),
		        'type'     => 'text',
		        'priority' => 6
			)
		);

		$wp_customize->add_control(
		    'photo_category_image5',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Image height (px) - mobile', 'photo'),
		        'type'     => 'text',
		        'priority' => 7
			)
		);

		$wp_customize->add_control(
		    'photo_category_switch_title',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Switch title with the date', 'photo'),
		        'description' => __('In advanced layout, you can enable this option to change place and size of the title with the date', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 15
			)
		);

		$wp_customize->add_control(
		    'photo_category_show_excerpt',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Show post excerpt', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 17
			)
		);

		$wp_customize->add_control(
		    'photo_category_excerpt_limit',
		    array(
		        'section'  => 'photo_category_other_options',
		        'label'    => __('Excerpt limit', 'photo'),
		        'description' => __('Add amount of excerpt chars visible on archive pages.', 'photo'),
		        'active_callback' => 'show_on_excerpt_enable',
		        'type'     => 'text',
		        'priority' => 18
			)
		);

		$wp_customize->add_control(
		    'photo_front_layout',
		    array(
		        'section'  => 'photo_category_width_options',
		        'label'    => __('Frontpage', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 1
			)
		);

		$wp_customize->add_control(
		    'photo_tag_layout',
		    array(
		        'section'  => 'photo_category_width_options',
		        'label'    => __('Tag archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 2
			)
		);

		$wp_customize->add_control(
		    'photo_search_layout',
		    array(
		        'section'  => 'photo_category_width_options',
		        'label'    => __('Search archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 3
			)
		);

		$wp_customize->add_control(
		    'photo_author_layout',
		    array(
		        'section'  => 'photo_category_width_options',
		        'label'    => __('Author archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 4
			)
		);

		$wp_customize->add_control(
		    'photo_archive_layout',
		    array(
		        'section'  => 'photo_category_width_options',
		        'label'    => __('Other archive pages', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 5
			)
		);

		$wp_customize->add_control(
		    'photo_front_type_layout',
		    array(
		        'section'  => 'photo_category_type_options',
		        'label'    => __('Frontpage', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 1
			)
		);

		$wp_customize->add_control(
		    'photo_tag_type_layout',
		    array(
		        'section'  => 'photo_category_type_options',
		        'label'    => __('Tag archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 2
			)
		);

		$wp_customize->add_control(
		    'photo_search_type_layout',
		    array(
		        'section'  => 'photo_category_type_options',
		        'label'    => __('Search archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 3
			)
		);

		$wp_customize->add_control(
		    'photo_author_type_layout',
		    array(
		        'section'  => 'photo_category_type_options',
		        'label'    => __('Author archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 4
			)
		);

		$wp_customize->add_control(
		    'photo_archive_type_layout',
		    array(
		        'section'  => 'photo_category_type_options',
		        'label'    => __('Other archive pages', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 5
			)
		);

		$wp_customize->add_control(
		    'photo_front_content_layout',
		    array(
		        'section'  => 'photo_category_content_options',
		        'label'    => __('Frontpage', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 1
			)
		);

		$wp_customize->add_control(
		    'photo_tag_content_layout',
		    array(
		        'section'  => 'photo_category_content_options',
		        'label'    => __('Tag archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 2
			)
		);

		$wp_customize->add_control(
		    'photo_search_content_layout',
		    array(
		        'section'  => 'photo_category_content_options',
		        'label'    => __('Search archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' =>3
			)
		);

		$wp_customize->add_control(
		    'photo_author_content_layout',
		    array(
		        'section'  => 'photo_category_content_options',
		        'label'    => __('Author archives', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 4
			)
		);

		$wp_customize->add_control(
		    'photo_archive_content_layout',
		    array(
		        'section'  => 'photo_category_content_options',
		        'label'    => __('Other archive pages', 'photo'),
		        'type'     => 'checkbox',
		        'priority' => 5
			)
		);

		$wp_customize->add_control(
		    'photo_contact_enable_captcha',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Enable reCaptcha', 'photo'),
		        'active_callback' => 'photo_show_on_contact',
		        'type'     => 'checkbox',
		        'priority' => 2
			)
		);

		$wp_customize->add_control(
		    'photo_contact_public_key',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Captcha public key', 'photo'),
		        'active_callback' => 'photo_show_on_captcha_enabled',
		        'type'     => 'text',
		        'priority' => 3
			)
		);

		$wp_customize->add_control(
		    'photo_contact_private_key',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Captcha private key', 'photo'),
		        'active_callback' => 'photo_show_on_captcha_enabled',
		        'type'     => 'text',
		        'priority' => 4
			)
		);

		$wp_customize->add_control(
		    'photo_contact_email',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Email source', 'photo'),
		        'description'    => __('Leave this field empty to use WordPress administrator email adress', 'photo'),
		        'active_callback' => 'photo_show_on_contact',
		        'type'     => 'text',
		        'priority' => 5
			)
		);

		$wp_customize->add_control(
		    'photo_contact_enable_map',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Display google map', 'photo'),
		        'active_callback' => 'photo_show_on_contact',
		        'type'     => 'checkbox',
		        'priority' => 6
			)
		);

		$wp_customize->add_control(
		    'photo_contact_latitude',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Latitude value', 'photo'),
		        'active_callback' => 'photo_show_on_map_enabled',
		        'type'     => 'text',
		        'priority' => 7
			)
		);

		$wp_customize->add_control(
		    'photo_contact_longitude',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Longitude value', 'photo'),
		        'active_callback' => 'photo_show_on_map_enabled',
		        'type'     => 'text',
		        'priority' => 8
			)
		);

		$wp_customize->add_control(
		    'photo_contact_enable_ui',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Enable User Interface on the map', 'photo'),
		        'active_callback' => 'photo_show_on_map_enabled',
		        'type'     => 'checkbox',
		        'priority' => 9
			)
		);

		$wp_customize->add_control(
		    'photo_contact_map_zoom',
		    array(
		        'section'  => 'photo_template_contact',
		        'label'    => __('Level of map zoom (1-20)', 'photo'),
		        'active_callback' => 'photo_show_on_map_enabled',
		        'type'     => 'range',
		        'input_attrs' => array(
			        'min'   => 0,
			        'max'   => 20,
			        'step'  => 1,
			    ),
		        'priority' => 10
			)
		);
	}

	add_action( 'customize_register', 'photo_init_customizer' );
}

function photo_customizer_fonts($group, $font, $selectors) {
    // Check the type of the font
    if (get_theme_mod('photo_'.$group.'_google_font', $font) !== '' && get_theme_mod('photo_'.$group.'_font', $font) == 'google') {
        // Parse the google font
        $google = esc_attr(get_theme_mod('photo_'.$group.'_google_font', $font));
        $fname = array();
        preg_match('@family=(.+)$@is', $google, $fname);
        $font = "'" . str_replace('+', ' ', preg_replace('@:.+@', '', preg_replace('@&.+@', '', $fname[1]))) . "'";
    } else {
    	$font = esc_attr(get_theme_mod('photo_'.$group.'_font', 'arial'));
    }
    // Set the font selectors
    $font_selectors = esc_textarea(get_theme_mod('photo_'.$group.'_font_selectors', $selectors));
    // Output the CSS code
    $filtered_selectors = str_replace('&amp;', '&', $font_selectors);
    $filtered_selectors = str_replace('&quot;', '"', $filtered_selectors);
    echo $filtered_selectors . ' { font-family: '.$font.'; }';
}

function photo_sanitize_number($value) {
	if(is_numeric($value)) {
		return $value;
	}
	
	return null;
}

function photo_sanitize_text_color($value) {
	if($value == 'light' || $value == 'dark') {
		return $value;
	}
	
	return null;
}

function photo_sanitize_switch($value) {
	if($value == '0' || $value == '1') {
		return $value;
	}
	
	return null;
}

function photo_sanitize_font($value) {
	$fonts = array(
		'google', 
		'verdana', 
		'georgia', 
		'arial', 
		'impact', 
		'tahoma', 
		'times',
		'comic sans ms',
		'courier new',
		'helvetica'
	);
	
	if(in_array($value, $fonts)) {
		return $value;
	}
	
	return null;
}

function photo_sanitize_date_format($value) {
	if($value === 'default' || $value === 'wordpress') {
		return $value;
	}
	return null;
}

function photo_sanitize_sidebar_pos($value) {
	if($value === 'left' || $value === 'right') {
		return $value;
	}
	return null;
}

function photo_validate_category_checklist($input) {
		$temp = explode(',', $input);

		if(count($temp) === count(array_filter($temp, 'is_numeric'))) {
			return $input;
		}

		return null;
	}

function photo_show_on_slider() {
    $condition = is_page_template( 'template.frontpage.php' );
    return $condition;
}

function photo_show_on_contact() {
    $condition = is_page_template( 'template.contact.php' );
    return $condition;
}

function photo_show_slider_interval($control) {
    $option = $control->manager->get_setting('photo_slider_autoanimation');
    $condition = is_page_template( 'template.frontpage.php' );
    return $option->value() == '1' && $condition;
}

function photo_show_on_captcha_enabled($control) {
	$option = $control->manager->get_setting('photo_contact_enable_captcha');
    $condition = is_page_template( 'template.contact.php' );
    return $option->value() == 1 && $condition;
}

function photo_show_on_map_enabled($control) {
	$option = $control->manager->get_setting('photo_contact_enable_map');
    $condition = is_page_template( 'template.contact.php' );
    return $option->value() == 1 && $condition;
}

function show_on_excerpt_enable($control) {
	$option = $control->manager->get_setting('photo_category_show_excerpt') ;
    return $option->value() == 1;
}

function photo_show_font_field($control) {
    $option = $control->manager->get_setting('photo_body_font') ;
    return $option->value() == 'google';
}

function photo_show_font_headers($control) {
    $option = $control->manager->get_setting('photo_headers_font') ;
    return $option->value() == 'google';
}

function photo_show_font_other($control) {
    $option = $control->manager->get_setting('photo_other_font') ;
    return $option->value() == 'google';
}

// Add CSS styles generated from GK Cusotmizer settings
function photo_customizer_css() {
	// Used fonts
	$body_font = '//fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700';
	$header_font = '';
	$other_font = '';
	
	// Selectors for the used fonts
	$body_font_selectors = 'body,
button,
.button,
input,
select,
textarea';

	$header_font_selectors = '';
	
	$other_font_selectors = '';

    // get colors
    $primary_color = esc_attr(get_theme_mod('photo_primary_color', '#cc6060'));
    $secondary_color = esc_attr(get_theme_mod('photo_secondary_color', '#212529'));
    // get theme dimensions
    $theme_width = preg_replace('@[^0-9]@mi', '', esc_attr(get_theme_mod('photo_theme_width', '1900')));
    $sidebar_width = preg_replace('@[^0-9\.]@mi', '', esc_attr(get_theme_mod('photo_sidebar_width', '25')));
    $sidebar_pos = esc_attr(get_theme_mod('photo_sidebar_pos', 'right'));

    ?>
    <style type="text/css">
    	/* Font settings */
    	
    	<?php photo_customizer_fonts('body', $body_font, $body_font_selectors); ?>
    	
        <?php photo_customizer_fonts('headers', $header_font, $header_font_selectors); ?>
        
        <?php photo_customizer_fonts('other', $other_font, $other_font_selectors); ?>

        <?php if(get_theme_mod('photo_word_break', '1') == '1') : ?>
        body {
            -ms-word-break: break-all;
            word-break: break-all;
            word-break: break-word;
            -webkit-hyphens: auto;
            -moz-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
        }
        <?php endif; ?>

    	/* Layout settings */
    	.gk-is-wrapper-gk-photo,
    	.gk-is-wrapper-gk-photo .gk-is-preloader {
    		background-color: <?php echo get_theme_mod('photo_slider_background','#f1f1f1'); ?>;
    	}
    	.site,
    	#gk-header-nav-wrap,
    	.site-content > .bigtitle {
            margin: 0 auto;
    		max-width: <?php echo $theme_width ?>px;
    		width: 100%;
    	}
    	.gk-half-page {
		  max-width: <?php echo $theme_width/2 ?>px;
		}

    	<?php if(get_theme_mod('photo_narrow_width','1') == '1') : ?>
    	#gk-top,
    	#gk-bottom,
    	#gk-bottom2 {
    		max-width: 960px;
    		margin-left: auto;
    		margin-right: auto;
    	}
    	<?php endif; ?>

    	#primary.gk-page {
    		max-width: <?php echo $theme_width ?>px;
    	}

    	<?php if(is_active_sidebar('sidebar') && !is_singular()) : ?>
    	#content {
    		float: <?php echo ($sidebar_pos == 'right') ? 'left' : 'right' ?>;
    		width: <?php echo 100 - $sidebar_width; ?>%;
    	}
    	#sidebar {
    		float: <?php echo ($sidebar_pos == 'right') ? 'right' : 'left' ?>;
    		padding-<?php echo ($sidebar_pos == 'right') ? 'left' : 'right' ?>: 100px;
    		width: <?php echo $sidebar_width; ?>%;
    	}
    	<?php else : ?>
    	#content,
    	#sidebar {
    		width: 100%;
    	}
    	<?php endif; ?>


    	@media screen and (min-width: 1900px) {
	    	.portfolio .item-image-block {
	    		height: <?php echo get_theme_mod('photo_category_image', '800'); ?>px;
	    	}
	    	.single .entry-header,
	    	.page .entry-header {
	    		height: 800px;
	    	}
    	}
    	@media screen and (max-width: 1900px) {
    		.portfolio .item-image-block {
	    		height: <?php echo get_theme_mod('photo_category_image2', '640'); ?>px;
	    	}
    	}
    	@media screen and (max-width: 1240px) {
    		.portfolio .item-image-block {
	    		height: <?php echo get_theme_mod('photo_category_image3', '480'); ?>px;
	    	}
    	}
    	@media screen and (max-width: 840px) {
    		.portfolio .item-image-block {
	    		height: <?php echo get_theme_mod('photo_category_image4', '320'); ?>px;
	    	}
    	}
    	@media screen and (max-width: 640px) {
    		.portfolio .item-image-block {
	    		height: <?php echo get_theme_mod('photo_category_image5', '240'); ?>px;
	    	}
    	}

    	/* Primary color */
    	a,
    	a.inverse:active, 
    	a.inverse:focus, 
    	a.inverse:hover,
    	.gk-overlay-menu > ul > li > a:hover,
    	#overlay-menu-content .sub-menu > li > a:hover,
    	.item-content > span > i, 
		.item-content > time > i,
		.portfolio .item-filter li:hover,
		.blog-grid .item-info > h2 > a:hover,
		pre:after,
		p.num-2 span,
		p.num-2 em,
		.gk-block-text-left,
		.gk-block-text-right,
		.gk-block-text-center,
    	blockquote.gk-blockquote1:before,
		blockquote.gk-blockquote1:after,
    	.bigtitle .header > a:active, 
    	.bigtitle .header > a:focus, 
    	.bigtitle .header > a:hover,
    	.bigtitle .widget-title > a:active,
    	.bigtitle .widget-title > a:focus,
    	.bigtitle .widget-title > a:hover,
    	.gk-nsp-next:hover:after,
    	.gk-nsp-prev:hover:after,
		.widget.dark a:hover,
		.menu li a:hover,
		.none .gk-tabs-wrap > ol li:hover {
    	  color: <?php echo $primary_color; ?>;
    	}
    	.author-url a:after,
    	.entry-content ul.gk-bullet3 li:before,
    	p.gk-warning,
    	.gk-nsp-arts-nav ul li.active,
		.gk-nsp-links-nav ul li.active,
		.gk-nsp-arts-nav ul li:hover,
		.gk-nsp-links-nav ul li:hover,
		.entry-content ul.gk-bullet3 li:before {
    		background: <?php echo $primary_color; ?>;
    	}

    	.gk-is-wrapper-gk-photo figcaption a:hover,
    	.portfolio.blog-grid .gk-overlay > strong,
    	p.num-2 span {
    	   color: <?php echo $primary_color; ?>;
    	   border-color: <?php echo $primary_color; ?>;
    	}
    	.author-url a:before,
    	.entry-content ul.gk-bullet4 li:before,
    	.gk-photo-overlay-prev:active,
		.gk-photo-overlay-prev:focus,
		.gk-photo-overlay-prev:hover,
		.gk-photo-overlay-next:active,
		.gk-photo-overlay-next:focus,
		.gk-photo-overlay-next:hover,
		.gk-nsp-next:hover:after,
		.gk-nsp-prev:hover:after {
  		  border-color: <?php echo $primary_color; ?>; 
    	}
    	.gk-nsp-header a:active, 
    	.gk-nsp-header a:focus, 
    	.gk-nsp-header a:hover,
    	.gk-nsp-news_grid figcaption a:active,
    	.gk-nsp-news_grid figcaption a:focus,
    	.gk-nsp-news_grid figcaption a:hover,
    	.portfolio .no-image .item-info > h2 > a:hover {
    	  color: <?php echo $primary_color; ?>!important;
    	} 
    	.none .gk-tabs-wrap > ol li.active, 
    	.none .gk-tabs-wrap > ol li.active:hover {
    	  border-color: <?php echo $primary_color; ?>!important;
    	}

    	.portfolio .item-filter:after {
    		border-top-color: <?php echo $primary_color; ?>;
    	}

    	.entry-content pre,
    	.entry-content code {
    		border-left-color: <?php echo $primary_color; ?>;
    	}
    	.gk-nsp-arts-nav ul li.active,
		.gk-nsp-links-nav ul li.active,
		.gk-nsp-arts-nav ul li:hover,
		.gk-nsp-links-nav ul li:hover {
			background-color: <?php echo $primary_color; ?>!important;
		}

    	/* secondary color */
    	#page-nav,
    	#gk-menu-button > span:before,
    	#overlay-menu-content,
    	.single .item-author a:before,
		.page .item-author a:before {
    		background-color: <?php echo $secondary_color; ?>;
    	}
    </style>
    <?php
}

add_action( 'wp_head', 'photo_customizer_css' );

function photo_customize_register($wp_customize) {
	if ( $wp_customize->is_preview() && ! is_admin() ) {
		add_action( 'wp_footer', 'photo_customize_preview', 21);
    }
}

add_action( 'customize_register', 'photo_customize_register' );

function photo_customize_preview() {
    ?>
    <script>
    (function($){
    	// helper color change function
    	function color_change(color, diff_r, diff_g, diff_b) {
    		// validate the string
    		color = String(color).replace(/[^0-9a-f]/gi, '');
    		if (color.length < 6) {
    			return color;
    		}
    		// convert to decimal
    		var rgb = "#";
    		var subcolor;
    		var diff = [diff_r, diff_g, diff_b];

    		for (var i = 0; i < 3; i++) {
    			subcolor = parseInt(color.substr(i*2,2), 16);
    			subcolor = (subcolor - diff[i]).toString(16);
    			rgb += ("00"+subcolor).substr(subcolor.length);
    		}

    		return rgb;
    	}
    	// helper rgba converter
    	function color_rgba(color, alpha) {
    		// validate the string
			color = String(color).replace(/[^0-9a-f]/gi, '');
			if (color.length < 6) {
				return color;
			}
			// convert to decimal
			var rgb = [];
			var subcolor;

			for (var i = 0; i < 3; i++) {
				subcolor = parseInt(color.substr(i*2,2), 16);
				rgb[i] = subcolor;
			}

			return 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+alpha+')';
    	}
    	// AJAX support for the color changes
    	// The CSS code can be compressed with this tool: http://refresh-sf.com/yui/
    	wp.customize('photo_primary_color', function(value) {
    	    value.bind( function( to ) {
    	    	to = to ? to : '#cc6060';
    	    	// set colors:
    	    	var new_css = 'a, a.inverse:active, a.inverse:focus, a.inverse:hover, .gk-overlay-menu > ul > li > a:hover, #overlay-menu-content .sub-menu > li > a:hover, .item-content > span > i, .item-content > time > i, .portfolio .item-filter li:hover, .blog-grid .item-info > h2 > a:hover, pre:after, p.num-2 span, p.num-2 em, .gk-block-text-left, .gk-block-text-right, .gk-block-text-center, blockquote.gk-blockquote1:before, blockquote.gk-blockquote1:after, .bigtitle .header > a:active, .bigtitle .header > a:focus, .bigtitle .header > a:hover, .bigtitle .widget-title > a:active, .bigtitle .widget-title > a:focus, .bigtitle .widget-title > a:hover, .gk-nsp-next:hover:after, .gk-nsp-prev:hover:after, .widget.dark a:hover, .menu li a:hover, .none .gk-tabs-wrap > ol li:hover { color: '+to+'; } .author-url a:after, .entry-content ul.gk-bullet3 li:before, p.gk-warning, .gk-nsp-arts-nav ul li.active, .gk-nsp-links-nav ul li.active, .gk-nsp-arts-nav ul li:hover, .gk-nsp-links-nav ul li:hover, .entry-content ul.gk-bullet3 li:before { background: '+to+'; } .gk-is-wrapper-gk-photo figcaption a:hover, .portfolio.blog-grid .gk-overlay > strong, p.num-2 span { border-color: '+to+'; color: '+to+'; } .author-url a:before, .entry-content ul.gk-bullet4 li:before, .gk-photo-overlay-prev:active, .gk-photo-overlay-prev:focus, .gk-photo-overlay-prev:hover, .gk-photo-overlay-next:active, .gk-photo-overlay-next:focus, .gk-photo-overlay-next:hover, .gk-nsp-next:hover:after, .gk-nsp-prev:hover:after { border-color: '+to+'; } .gk-nsp-header a:active, .gk-nsp-header a:focus, .gk-nsp-header a:hover, .gk-nsp-news_grid figcaption a:active, .gk-nsp-news_grid figcaption a:focus, .gk-nsp-news_grid figcaption a:hover, .portfolio .no-image .item-info > h2 > a:hover { color: '+to+'!important; } .none .gk-tabs-wrap > ol li.active, .none .gk-tabs-wrap > ol li.active:hover { border-color: '+to+'!important; } .entry-content pre, .entry-content code {border-left-color: '+to+'; } .gk-nsp-arts-nav ul li.active, .gk-nsp-links-nav ul li.active, .gk-nsp-arts-nav ul li:hover, .gk-nsp-links-nav ul li:hover { background-color: '+to+'!important} .portfolio .item-filter:after { border-top-color: '+to+'; }';

    	    	if($(document).find('#photo-new-css-1').length) {
    	    		$(document).find('#photo-new-css-1').remove();
    	    	}

    	    	$(document).find('head').append($('<style id="photo-new-css-1">' + new_css + '</style>'));
    	    });
    	});
		wp.customize('photo_secondary_color', function(value) {
    	    value.bind( function( to ) {
    	    	to = to ? to : '#212529';
    	    	// set colors:
    	    	var new_css = '#page-nav, #gk-menu-button > span:before, #overlay-menu-content, .single .item-author a:before, .page .item-author a:before  { background-color: '+to+'; }';

    	    	if($(document).find('#photo-new-css-2').length) {
    	    		$(document).find('#photo-new-css-2').remove();
    	    	}

    	    	$(document).find('head').append($('<style id="photo-new-css-2">' + new_css + '</style>'));
    	    });
    	});
    })(jQuery);
    </script>
    <?php
}

// EOF
