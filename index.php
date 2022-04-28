<?php
/**
 * Plugin Name:       Kotisivu Blocks
 * Description:       Gutenberg Block plugin for Kotisivu Theme
 * Requires at least: 5.8
 * Version:           1.3.7
 * Author:            Kotisivu Dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kotisivu-theme-block
 *
 * @package           create-block
 */

namespace Kotisivu\Blocks;

 /* Exit if accessed directly */
if (!defined('ABSPATH')) { exit; }


/**
 * Register Custom Categories
 */
function filter_block_categories( $block_categories) {
        $block_categories[] = array(
			'slug' => 'footer',
			'title' => __('Footer', 'kotisivu-theme-block'),
			'icon' => null,
		);
    return $block_categories;
}

add_filter( 'block_categories_all', __NAMESPACE__ . '\filter_block_categories', 10);


/**
 * Load Scripts and Styles
 * 
 */
function load_block_assets() {
	/* Get plugin directory */
	$plugin_dir = WP_PLUGIN_DIR . '/kotisivu-blocks';

	/* Register scripts and styles */
	$asset_file = include_once( $plugin_dir . '/build/index.asset.php');
	wp_register_script('kotisivu-blocks', plugins_url( 'build/index.js', __FILE__ ), $asset_file['dependencies'], filemtime($plugin_dir . '/build/index.asset.php'));
	wp_register_style('kotisivu-blocks', get_theme_file_uri('assets/css/editor.css'), '', get_theme_file_path('assets/css/editor.css'), 'all');

	wp_register_script('splide', plugins_url( 'src/blocks/dynamic/content-slider/js/splide.min.js', __FILE__), '', filemtime($plugin_dir . '/src/blocks/dynamic/content-slider/js/splide.min.js'), true);
	wp_register_style('splide', plugins_url( 'src/blocks/dynamic/content-slider/css/splide-core.min.css', __FILE__), '', filemtime($plugin_dir . '/src/blocks/dynamic/content-slider/css/splide-core.min.css'), 'all');
    wp_enqueue_style( 'splide' );
	wp_enqueue_script( 'splide' );
}

add_action('init', __NAMESPACE__ . '\load_block_assets');


/**
 * Load Block Types
 * 
 **/
function register_blocks() {

	/* Get blocks directory */
	$blocks_dir = plugin_dir_path( __FILE__ ) . 'src/blocks/';

	/* Get scripts and style handles */
	$editor_handle = 'kotisivu-blocks';
	$style_handle = 'main';

	/**
	 * Register static blocks
	 **/
	$blocks = array(
		'address',
		'address/child-blocks/address--address',
		'address/child-blocks/address--email',
		'address/child-blocks/address--name',
		'address/child-blocks/address--tel',
		'image-optimized',
		'button',
		'button-container',
		'grid-card',
		'column-container',
		'column-container/child-blocks/grid-column',
		'content-list',
		'content-list/child-blocks/content-list-item',
		'grid-two-column',
		'icon',
		'icon-container',
		'icon-list',
		'price-tag',
		'pricing-table',
		'pricing-table/child-blocks/pricing-column',
		'pricing-table/child-blocks/pricing-wrapper',
		'section-container'
	);

	foreach($blocks as $block) {
		register_block_type( $blocks_dir . 'static/' . $block,
		array(
			'editor_script' => $editor_handle,
			'editor_style'  => $editor_handle,
			'style_handle' => $style_handle
		));
	};


	/**
	 * Register dynamic blocks
	 **/
	$dynamic_blocks = array(
		'nav-footer',
		'query-grid',
		'content-slider'
	);

	foreach($dynamic_blocks as $block) {
		/* Get current block index.php and render.php files */
		$index = $blocks_dir . 'dynamic/' . $block . '/index.php';
		$render = $blocks_dir . 'dynamic/' . $block . '/render.php';

		/* Include block files */
		if (file_exists($index)) { include_once( $index ); } else { continue; }
		if (file_exists($render)) { include_once( $render ); } else { continue; }
	}


}

add_action( 'init', __NAMESPACE__ . '\register_blocks');
