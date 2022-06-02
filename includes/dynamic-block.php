<?php

class DynamicBlock {

    /**
     * 
     */
    private $slug;

    /**
     * 
     */
    private $attributes;

    /**
     * 
     */
    private $path;

    /**
     * 
     */
    private $callback_name;

    /**
     * 
     */
    private $callback_path;


    /**
     * Constructor
     * 
     */
    public function __construct($slug, $callback_name, $attributes) {
        $this->slug = $slug;
        $this->path = KOTISIVU_BLOCKS_DIR_PATH . 'src/blocks/dynamic/' . $slug;
        $this->callback_name = $callback_name;
        $this->attributes = $attributes;
        $this->callback_path = KOTISIVU_BLOCKS_DIR_PATH . 'src/blocks/dynamic/' . $slug . '/render.php';

        add_action('init', array($this, 'register_block'));
    }

    public function register_block() {
        if (file_exists($this->callback_path)) {
            include_once($this->callback_path);
        }

        register_block_type(
            $this->path,
            array(
                'render_callback' => $this->callback_name,
                'attributes' => $this->attributes
            )
        );
    }
}
