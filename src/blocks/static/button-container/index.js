import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/button-container';
export const settings = {
	apiVersion: 2,
    title: __('Button Container', 'kotisivu-theme-blocks'),
    description: __('Container for multiple buttons', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'button',
    supports: {
        className: false
    },
    edit,
    save
}