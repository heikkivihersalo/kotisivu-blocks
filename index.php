<?php

/**
 * Plugin Name:       Kotisivu Blocks
 * Description:       Gutenberg Block plugin for Kotisivu Theme
 * Requires at least: 5.8
 * Version:           1.5.0
 * Author:            Kotisivu Dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kotisivu-theme-block
 *
 * @package           create-block
 */

/* Exit if accessed directly */
if (!defined('ABSPATH')) {
	exit;
}

/* Define plugin directory path */
define('KOTISIVU_BLOCKS_DIR_URL', plugin_dir_url(__FILE__));
define('KOTISIVU_BLOCKS_DIR_PATH', plugin_dir_path(__FILE__));

/* Define plugin name and options */
define('KOTISIVU_BLOCKS_PLUGIN_NAME', 'ksd_server_side_analytics');
define('KOTISIVU_BLOCKS_PLUGIN_VERSION', 1.5);

class KotisivuBlocks {
	/**
	 * Plugin name
	 */
	private $plugin_name;

	/**
	 * Plugin version
	 */
	private $plugin_version;

	/**
	 * Constructor
	 * 
	 */
	public function __construct() {
		/* Load options */
		$this->plugin_name = KOTISIVU_BLOCKS_PLUGIN_NAME;
		$this->plugin_version = KOTISIVU_BLOCKS_PLUGIN_VERSION;


		add_filter('should_load_separate_core_block_assets', array($this, 'return_true'));
		add_action('init', array($this, 'register_blocks'));
		add_action('enqueue_block_editor_assets', array($this, 'modify_core_blocks'));
	}


	public function register_blocks() {
		$blocks = array(
			'button/',
			'button/container/',
			'column/',
			'column-container/',
			'icon/',
			'icon-container/',
			'image-gallery',
			'optimized-image/',
			'section/'
		);

		foreach ($blocks as $block) {
			register_block_type(KOTISIVU_BLOCKS_DIR_PATH . '/src/blocks/static/' . $block);
		}
	}

	public function modify_core_blocks() {
		wp_enqueue_script(
			'ksd-block-filters',
			KOTISIVU_BLOCKS_DIR_URL . 'build/js/filters/filters.js',
			['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
			filemtime(KOTISIVU_BLOCKS_DIR_PATH . 'build/js/filters/filters.js')
		);
	}

	public function return_true() {
		return '__return_true';
	}
}

new KotisivuBlocks();
