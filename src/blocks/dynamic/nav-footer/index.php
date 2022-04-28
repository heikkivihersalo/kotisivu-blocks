<?php

register_block_type('ksd/nav-footer', [
	'editor_script' => $editor_handle,
	'editor_style'  => $editor_handle,
	'style_handle' => $style_handle,
	'render_callback' => 'render_nav_footer'
]);

?>
