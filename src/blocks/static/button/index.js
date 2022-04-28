import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/button';
export const settings = {
	apiVersion: 2,
    title: __('Button', 'kotisivu-theme-blocks'),
    description: __('Default button that follows theme global styling', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'button',
    supports: {
        className: false
    },
    edit,
    save
}