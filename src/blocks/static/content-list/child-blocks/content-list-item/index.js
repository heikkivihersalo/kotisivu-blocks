import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/content-list-item';
export const settings = {
	apiVersion: 2,
    title: __('Content List Item', 'kotisivu-theme-blocks'),
    description: __('List item for Content list', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'columns',
    parent: ['ksd/content-list'],
    supports: {
        className: false
    },
    edit,
    save
}