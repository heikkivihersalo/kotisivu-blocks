import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/icon-list';
export const settings = {
	apiVersion: 2,
    title: __('Icon List', 'kotisivu-theme-blocks'),
    description: __('List with configurable icons', 'kotisivu-theme-blocks'),
    category: 'media',
    icon: 'format-image',
    supports: {
        className: false
    },
    edit,
    save
}