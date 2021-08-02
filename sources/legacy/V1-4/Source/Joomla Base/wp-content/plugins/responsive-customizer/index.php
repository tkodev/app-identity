<?php
/*
Plugin Name: Responsive Customizer
Plugin URI:
Description: A simple and easy way to test your site responsiveness during customizing theme at WordPress customizer. The plugin provides you dozens of different display resolutions, groupped by categories like desktops, laptops, tablets and phones.
Version: 1.0.0
Author: Madpixels
Author URI: http://madpixels.net
License: GPL v2.0 or later
License URI: http://www.opensource.org/licenses/gpl-license.php
*/

// +----------------------------------------------------------------------+
// | Copyright 2013  Madpixels  (email : visualizer@madpixels.net)        |
// +----------------------------------------------------------------------+
// | This program is free software; you can redistribute it and/or modify |
// | it under the terms of the GNU General Public License, version 2, as  |
// | published by the Free Software Foundation.                           |
// |                                                                      |
// | This program is distributed in the hope that it will be useful,      |
// | but WITHOUT ANY WARRANTY; without even the implied warranty of       |
// | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the        |
// | GNU General Public License for more details.                         |
// |                                                                      |
// | You should have received a copy of the GNU General Public License    |
// | along with this program; if not, write to the Free Software          |
// | Foundation, Inc., 51 Franklin St, Fifth Floor, Boston,               |
// | MA 02110-1301 USA                                                    |
// +----------------------------------------------------------------------+
// | Author: Eugene Manuilov <eugene@manuilov.org>                        |
// +----------------------------------------------------------------------+

class WP_Responsive_Customizer {

	const NAME       = 'wp-responsive-customizer';
	const VERSION    = '1.0.0';

	public static function enqueueScripts() {
		$baseurl = plugins_url( '', __FILE__ );

		wp_enqueue_style( 'wp-responsive-customizer-styles', $baseurl . '/styles.css', array(), self::VERSION );

		wp_enqueue_script( 'wp-responsive-customizer-scripts', $baseurl . '/scripts.js', array( 'jquery', 'backbone' ), self::VERSION, true );
		wp_localize_script( 'wp-responsive-customizer-scripts', 'wprcustomizer', array(
			'devices' => array(
				'desktops' => array(
					'title' => __( 'Desktops', self::NAME ),
					'sizes' => array( '1280x1024', '1366x768', '1440x900', '1600x900', '1680x1050', '1920x1080', '1920x1200', '2560x1440', '2560x1600' ),
				),
				'laptops' => array(
					'title' => __( 'Laptops', self::NAME ),
					'sizes' => array( '1024x600',  '1280x720', '1280x800', '1366x768', '1440x900',  '1600x900',  '1920x1080', '1920x1200', '2560x1600', '2880x1800' ),
				),
				'tablets'   => array(
					'title' => __( 'Tablets', self::NAME ),
					'sizes' => array( '800x480',   '800x600',  '1024x600', '1024x768', '1280x800',  '1366x768',  '1920x1080', '2048x1536' ),
				),
				'phones'    => array(
					'title' => __( 'Phones', self::NAME ),
					'sizes' => array( '240x320', '240x400', '320x480', '360x640', '480x640', '480x800', '480x854', '540x960', '640x960', '640x1136', '1280x720', '1280x800', '1920x1080' ),
				),
			),
			'l10n' => array(
				'rotate' => __( 'Rotate', self::NAME ),
				'select' => __( 'select resolution', self::NAME ),
			),
		) );
	}

	public static function registerActionLinks( $links, $file ) {
		if ( $file == plugin_basename( __FILE__ ) ) {
			array_unshift(
				$links,
				sprintf( '<a href="%s">%s</a>', admin_url( 'customize.php' ), __( "Customizer", self::NAME ) )
			);
		}
		return $links;
	}

	public static function loadTextDomain() {
		$dir = array( dirname( plugin_basename( __FILE__ ) ), 'languages' );
		load_plugin_textdomain( self::NAME, false, implode( DIRECTORY_SEPARATOR, $dir ) . DIRECTORY_SEPARATOR );
	}

	public static function init() {
		add_action( 'customize_controls_print_scripts',      array( 'WP_Responsive_Customizer', 'enqueueScripts' ) );
		add_action( 'admin_init',                            array( 'WP_Responsive_Customizer', 'loadTextDomain' ) );
		add_filter( 'plugin_action_links',                   array( 'WP_Responsive_Customizer', 'registerActionLinks' ), 10, 2 );
	}

}

WP_Responsive_Customizer::init();