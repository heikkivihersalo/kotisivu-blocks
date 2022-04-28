import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/nav-footer';
export const settings = {
	apiVersion: 2,
    title: __('Footer Navigation', 'kotisivu-theme-blocks'),
    description: __('Displays footer navigation', 'kotisivu-theme-blocks'),
    category: 'footer',
    icon: 'layout',
    edit,
    save
}