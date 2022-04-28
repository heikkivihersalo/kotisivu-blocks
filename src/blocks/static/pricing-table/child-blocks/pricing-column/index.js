import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/pricing-column';
export const settings = {
	apiVersion: 2,
    title: __('Price Column', 'kotisivu-theme-blocks'),
    description: __('Individual Column for Pricing Table', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'columns',
    parent: ['ksd/pricing-table'],
    edit,
    save
}
