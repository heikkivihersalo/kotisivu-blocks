import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/content-slider';
export const settings = {
	apiVersion: 2,
    title: __('Content Slider', 'kotisivu-theme-blocks'),
    description: __('Content Slider', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'button',
    supports: {
        className: false
    },
    edit,
    save
}