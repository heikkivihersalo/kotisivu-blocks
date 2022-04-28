<?php

function render_content_slider($block_attributes, $content) {
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => -1 // this will retrive all the post that is published 
    );

?>
    <?php ob_start(); ?>
    <?php $query = new WP_Query($args); ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var splide = new Splide('.splide');
            splide.mount();
        });
    </script>
    <section class="splide" aria-labelledby="carousel-heading">
        <h2 id="carousel-heading">Splide Basic HTML Example</h2>
        <div class="splide__track">
            <ul class="splide__list">
                <?php if ($query->have_posts()) : ?>
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <li class="splide__slide"><?php echo get_the_title() ?></li>
                    <? endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
            </ul>
        </div>
        <h2>Link test</h2>
    </section>

    <?php $buffer = ob_get_contents();
    ob_end_clean();
    return $buffer; ?>

<?php } ?>