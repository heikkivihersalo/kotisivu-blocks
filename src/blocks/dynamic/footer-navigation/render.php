<?php function render_footer_navigation($block_attributes, $content) { ?>
    <?php
    $locations = get_nav_menu_locations();
    $menu = wp_get_nav_menu_object($locations['footer-menu']);
    $navbar_items = wp_get_nav_menu_items($menu->term_id);
    ?>
    <?php ob_start(); ?>

    <nav class="footer__nav">
        <ul>
            <?php if ($navbar_items) : ?>
                <?php foreach ($navbar_items as $item) : ?>
                    <li>
                        <a href="<?php echo $item->url ?>" title="<?php echo $item->title ?>">
                            <?php echo $item->title ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            <?php endif; ?>
        </ul>
    </nav>

    <?php $buffer = ob_get_contents(); ?>
    <?php ob_end_clean(); ?>
    <?php return $buffer; ?>
<?php } ?>