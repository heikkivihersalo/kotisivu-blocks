<?php

function render_blog_grid($block_attributes, $content) {
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => isset($block_attributes['maxPosts']) ? $block_attributes['maxPosts'] : '' // this will retrive all the post that is published 
    );
?>

    <?php ob_start(); ?>
    <?php $query = new WP_Query($args); ?>
    <div class="blog-grid__container">
        <ul class="blog-grid__list">
            <?php if ($query->have_posts()) : ?>
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                    <?php $post_image_id = get_post_thumbnail_id(); ?>
                    <?php $post_image = wp_get_attachment_image_src($post_image_id, 'medium'); ?>
                    <?php $post_tags = get_the_tags(); ?>
                    <li class="blog-grid__item">
                        <img 
                            class="blog-grid__image" 
                            src="<?php echo $post_image[0] ?>"
                            alt="<?php echo get_post_meta($post_image_id, '_wp_attachment_image_alt', TRUE) ?>" 
                            title="<?php echo get_the_title($post_image_id) ?>" 
                            width="<?php echo $post_image[1] ?>"
                            height="<?php echo $post_image[2] ?>"
                        />
                        <div class="blog-grid__description">
                            <?php if ($post_tags) : ?>
                                <div class="blog-grid__tag-container">
                                    <?php foreach($post_tags as $tag) : ?>
                                        <span class="blog-grid__tag"><?php echo $tag->name ?></span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                            <h3 class="blog-grid__title"><?php echo get_the_title(); ?></h3>
                            <span class="blog-grid__date">
                                <?php echo __('Posted on:', 'kotisivu-theme-blocks'); ?> 
                                <?php echo get_the_date( get_option('date_format') ); ?>
                            </span>
                            <p class="blog-grid__excerpt"><?php echo get_the_excerpt(); ?></p>
                            <a class="blog-grid__btn btn is-style-clr--outline" href="<?php echo esc_url( get_permalink() ); ?>"><?php echo __('Read more', 'kotisivu-theme-blocks'); ?></a>
                        </div>
                    </li>
                <?php endwhile; ?>
            <?php endif; ?>
            <?php wp_reset_postdata(); ?>
        </ul>
    </div>

    <?php $buffer = ob_get_contents();
    ob_end_clean();
    return $buffer; ?>

<?php } ?>