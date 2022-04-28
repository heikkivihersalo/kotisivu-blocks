import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/grid-column';
export const settings = {
	apiVersion: 2,
    title: __('Grid Column', 'kotisivu-theme-blocks'),
    description: __('Column element for multi-column', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'columns',
    parent: ['ksd/column-container'],
    supports: {
        className: false
    },
    edit,
    save
}