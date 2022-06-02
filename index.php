<?php

/**
 * Plugin Name:       Kotisivu Blocks - Jessikka Aro
 * Description:       Gutenberg Block plugin for Kotisivu Theme
 * Requires at least: 5.8
 * Version:           1.5.0
 * Author:            Kotisivu Dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kotisivu-theme-blocks
 * Domain Path:       /languages
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
define('KOTISIVU_BLOCKS_TEXTDOMAIN', 'kotisivu-theme-blocks');

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
	 * Plugin version
	 */
	private $plugin_textdomain;

	/**
	 * Plugin version
	 */
	private $static_blocks;

	/**
	 * Constructor
	 * 
	 */
	public function __construct() {
		/**
		 * Load options 
		 */
		$this->plugin_name = KOTISIVU_BLOCKS_PLUGIN_NAME;
		$this->plugin_version = KOTISIVU_BLOCKS_PLUGIN_VERSION;
		$this->plugin_textdomain = KOTISIVU_BLOCKS_TEXTDOMAIN;
		$this->static_blocks = array(
			'address',
			'address--address',
			'address--email',
			'address--phone',
			'address--name',
			'button',
			'button-container',
			'column',
			'column-container',
			'icon',
			'icon-container',
			'image-gallery',
			'optimized-image',
			'price',
			'section'
		);

		$this->dynamic_blocks = array(
			[
				'slug' => 'footer-navigation',
				'render_callback' => 'render_footer_navigation',
				'attributes' => []
			],
			[
				'slug' => 'blog-grid',
				'render_callback' => 'render_blog_grid',
				'attributes' => [
					'maxPosts' => [
						'type' => 'number'
					]
				]
			]
		);

		/**
		 * Load class files from "includes" -folder
		 */
		$this->load_classes();

		/* Set WP to load blocks as separate assets */
		add_filter('should_load_separate_core_block_assets', array($this, 'return_true'));

		/**
		 * Load blocks
		 */

		/* Load static blocks */
		add_action('init', array($this, 'register_static_blocks'));

		/* Load dynamic blocks */
		$this->register_dynamic_blocks();

		// Uncomment this if you want to modify core blocks
		// add_action('enqueue_block_editor_assets', array($this, 'modify_core_blocks'));

		/**
		 * Load translations
		 */
		add_action('init', array($this, 'load_textdomain'));
		// add_action('init', array($this, 'load_js_translations'), 100);
		// add_filter('load_script_translation_file', array($this, 'fix_translation_location'), 10, 3);
	}

	/**
	 * Load Classes
	 * 
	 */
	private function load_classes() {
		foreach (glob(dirname(__FILE__) . '/includes/*.php') as $class)
			require_once $class;
	}

	/**
	 * Register Static Blocks
	 * 
	 */
	public function register_static_blocks() {
		foreach ($this->static_blocks as $block) {
			register_block_type(KOTISIVU_BLOCKS_DIR_PATH . 'src/blocks/static/' . $block . '/');
		}
	}

	/**
	 * Register Dynamic Blocks
	 * 
	 */
	public function register_dynamic_blocks() {
		foreach ($this->dynamic_blocks as $block) {
			new DynamicBlock($block['slug'], $block['render_callback'], $block['attributes']);
		}
	}

	/**
	 * Modify Core Blocks
	 * 
	 */
	public function modify_core_blocks() {
		wp_enqueue_script(
			'ksd-block-filters',
			KOTISIVU_BLOCKS_DIR_URL . 'build/js/filters/filters.js',
			['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
			filemtime(KOTISIVU_BLOCKS_DIR_PATH . 'build/js/filters/filters.js')
		);
	}

	/**
	 * Load plugin textdomain.
	 */
	public function load_textdomain() {
		load_plugin_textdomain(KOTISIVU_BLOCKS_TEXTDOMAIN, false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
	}

	/**
	 * Load javascript translations
	 */
	public function load_js_translations() {
		foreach ($this->static_blocks as $block) {
			wp_set_script_translations(
				'ksd-' . $block . '-editor-script',
				KOTISIVU_BLOCKS_TEXTDOMAIN,
				plugin_dir_path(__FILE__) . 'languages'
			);
		}

		foreach ($this->dynamic_blocks as $block) {
			wp_set_script_translations(
				'ksd-' . $block['slug'] . '-editor-script',
				KOTISIVU_BLOCKS_TEXTDOMAIN,
				plugin_dir_path(__FILE__) . 'languages'
			);
		}
	}

	/**
	 * Fix loading translation location
	 * TODO: Might need to change this in the future when WordPress gets a proper fix
	 * https://awhitepixel.com/blog/how-to-translate-custom-gutenberg-blocks-with-block-json/
	 */
	public function fix_translation_location( string $file, string $handle, string $domain ) : string {
		foreach ($this->static_blocks as $block) {
			if ( strpos( $handle, 'ksd-' . $block . '-editor-script') !== false && KOTISIVU_BLOCKS_TEXTDOMAIN === $domain ) {
				$file = str_replace( WP_LANG_DIR . '/plugins', plugin_dir_path( __FILE__ ) . 'languages', $file );
			}

			return $file;
		}
	}

	/**
	 * Return True
	 * 
	 */
	public function return_true() {
		return '__return_true';
	}
}

new KotisivuBlocks();
