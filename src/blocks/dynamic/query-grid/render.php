<?php 
function render_query_grid($attributes, $content) {

	$postType = $attributes['postType'];
	$postCTA = $attributes['postCTA'];
	$has_padding = $attributes['hasPadding'];
	$small_heading = $attributes['smallHeading'];

	$args = array(
		'post_type'=> $postType,
		'orderby'    => 'date',
		'post_status' => 'publish',
		'order'    => 'DESC',
		'posts_per_page' => -1 // this will retrive all the post that is published 
		);
	
	$post_type_class = "query-grid";

	$image_class = $has_padding ? 'class="query-grid__image has-padding"' : 'class="query-grid__image"';
	$heading_class = $small_heading ? 'class="query-grid__heading has-small-heading"' : 'class="query-grid__heading"';

?>

	<?php ob_start(); ?>
		<?php $query = new WP_Query( $args ); ?>
		<?php if ( $query -> have_posts() ) : ?>
			<div class= <?php echo $post_type_class ?> >
				<?php while ( $query -> have_posts() ) : $query -> the_post(); ?>
				<?php $posttags = get_the_tags(); ?>
				<?php $image_id = get_post_thumbnail_id(); ?>
					<div class="query-grid__card">
						<img <?php echo $image_class ?> 
							src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium') ?>" 
							alt="<?php echo get_post_meta($image_id, '_wp_attachment_image_alt', TRUE) ?>" 
							title="<?php echo get_the_title($image_id) ?>"
						/>
						<?php if ($posttags) : ?>
							<div class="query-grid__tags-container">
								<?php foreach($posttags as $tag) { 
									?> <span class="query-grid__tag"><?php echo $tag->name ?></span><?php
									} 
								?>
							</div>
						<?php endif; ?>
						<h3 <?php echo $heading_class ?> ><?php echo get_the_title() ?></h3>
						<p class="query-grid__excerpt"><?php echo get_the_excerpt() ?></p>
						<a class="query-grid__btn btn btn--clr-primary" href="<?php echo esc_url( get_permalink() ); ?>"><?php echo $postCTA ?></a>
						
						<?php $categories = get_the_category(); ?>
						<?php if ( ! empty( $categories ) ) : ?>
							<div class="query-grid__ribbon ">
    							<span><?php echo esc_html( $categories[0]->name ); ?></span>
							</div>
						<?php endif; ?>
					</div>

				<?php endwhile; ?>
			</div>
		<?php endif; wp_reset_postdata(); ?>

	<?php $buffer = ob_get_contents(); ob_end_clean(); return $buffer; ?>

<?php } ?>
