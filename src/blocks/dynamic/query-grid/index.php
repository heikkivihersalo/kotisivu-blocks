<?php 

	register_block_type('ksd/query-grid', [
		'editor_script' => $editor_handle,
		'editor_style'  => $editor_handle,
		'style_handle' => $style_handle,
		'render_callback' => 'render_query_grid',
		'attributes' => [
			'postType' => [
				'type' => 'string',
				'default' => ''
			],
			'postCTA' => [
				'type' => 'string',
				'default' => ''
			],
			'postClass' => [
				'type' => 'string',
				'default' => ''
			],
			'hasPadding' => [
				'type' => 'boolean'
			],
			'smallHeading' => [
				'type' => 'boolean'
			]
		]
	]);

?>