import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/price-tag';
export const settings = {
	apiVersion: 2,
    title: __('Price Tag', 'kotisivu-theme-blocks'),
    description: __('Add simple price tag to a block', 'kotisivu-theme-blocks'),
    category: 'text',
    icon: 'money-alt',
    supports: {
        className: false
    },
    edit,
    save
}