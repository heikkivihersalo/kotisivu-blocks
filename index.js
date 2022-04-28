import { registerBlockType } from '@wordpress/blocks';

/**
 * Import all blocks
 */

/* Static Blocks */
import * as address from './src/blocks/static/address';
import * as address_address from './src/blocks/static/address/child-blocks/address--address';
import * as address_email from './src/blocks/static/address/child-blocks/address--email';
import * as address_name from './src/blocks/static/address/child-blocks/address--name';
import * as address_tel from './src/blocks/static/address/child-blocks/address--tel';
import * as icon from './src/blocks/static/icon';
import * as image_optimized from './src/blocks/static/image-optimized';
import * as button from './src/blocks/static/button';
import * as button_container from './src/blocks/static/button-container';
import * as column_container from './src/blocks/static/column-container';
import * as content_list from './src/blocks/static/content-list';
import * as content_list_item from './src/blocks/static/content-list/child-blocks/content-list-item';
import * as grid_column from './src/blocks/static/column-container/child-blocks/grid-column';
import * as grid_card from './src/blocks/static/grid-card';
import * as grid_two_column from './src/blocks/static/grid-two-column';
import * as icon_container from './src/blocks/static/icon-container';
import * as icon_list from './src/blocks/static/icon-list';
import * as price_tag from './src/blocks/static/price-tag';
import * as pricing_table from './src/blocks/static/pricing-table';
import * as pricing_column from './src/blocks/static/pricing-table/child-blocks/pricing-column';
import * as pricing_wrapper from './src/blocks/static/pricing-table/child-blocks/pricing-wrapper';
import * as section_container from './src/blocks/static/section-container';

/* Dynamic Blocks */
import * as nav_footer from './src/blocks/dynamic/nav-footer';
import * as query_grid from './src/blocks/dynamic/query-grid';
import * as content_slider from './src/blocks/dynamic/content-slider';

const blocks = [
    /* Static */
    address,
    address_address,
    address_email,
    address_name,
    address_tel,
    icon,
    image_optimized,
    button,
    button_container,
    column_container,
    content_list,
    content_list_item,
    grid_column,
    grid_card,
    grid_two_column,
    icon_container,
    icon_list,
    price_tag,
    pricing_table,
    pricing_column,
    pricing_wrapper,
    section_container,

    /* Dynamic */
    nav_footer,
    query_grid,
    content_slider
];

/**
 * Register blocks
 */
blocks.forEach((block) => {
    const { name, settings } = block;
    registerBlockType(name, settings);
});
