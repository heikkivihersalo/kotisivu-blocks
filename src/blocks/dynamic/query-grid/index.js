import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/query-grid';
export const settings = {
	apiVersion: 2,
    title: __('Query Grid', 'kotisivu-theme-blocks'),
    description: __('Creates a grid from post query', 'kotisivu-theme-blocks'),
    category: 'theme',
    icon: 'format-image',
    edit,
    save
}