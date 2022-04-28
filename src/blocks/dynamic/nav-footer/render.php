<?php function render_nav_footer($block_attributes, $content) { ?>
        <?php $navbar_items = wp_get_nav_menu_items('footer'); ?>

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

        <?php $buffer = ob_get_contents(); ob_end_clean(); return $buffer; ?>
<?php } ?>
