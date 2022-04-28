import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/icon';
export const settings = {
	apiVersion: 2,
    title: __('Icon', 'kotisivu-theme-blocks'),
    description: __('Icon Block that allows to add custom images or icon library classes (Font Awesome, Dashicons etc.)', 'kotisivu-theme-blocks'),
    category: 'media',
    icon: 'format-image',
    parent: ['ksd/icon-container', 'ksd/pricing-column'],
    supports: {
        className: false
    },
    edit,
    save
}