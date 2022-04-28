import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = "ksd/image-optimized";
export const settings = {
	apiVersion: 2,
    title: __('Optimized Image', 'kotisivu-theme-blocks'),
    description: __('Super simple image block to replace Gutenberg default image block', 'kotisivu-theme-blocks'),
    category: 'media',
    icon: 'format-image',
    supports: {
        className: false
    },
    edit,
    save
}