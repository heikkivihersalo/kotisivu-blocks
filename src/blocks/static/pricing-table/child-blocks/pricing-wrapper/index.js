import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
export const name = 'ksd/pricing-wrapper';
export const settings = {
    apiVersion: 2,
    title: __('Pricing Wrapper', 'kotisivu-theme-blocks'),
    description: __('Wrapper for pricing table. Includes price tag and button.', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'columns',
    parent: ['ksd/pricing-column'],
    variations: [
        {
            name: 'wrapper-heading-paragraph',
            title: __('Heading & Paragraph', 'kotisivu-theme-blocks'),
            icon: 'editor-paragraph',
            innerBlocks: [
                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
            ],
            attributes: {
                wrapperClass: 'pricing-table__wrapper pricing-table__wrapper--top'
            }
        },
        {
            name: 'wrapper-price-button',
            title: __('Price & Button', 'kotisivu-theme-blocks'),
            icon: 'button',
            innerBlocks: [
                ["ksd/price-tag", { className: "pricing-table__price" }],
                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
            ],
            attributes: {
                wrapperClass: 'pricing-table__wrapper pricing-table__wrapper--bottom'
            }
        },
    ],
    edit,
    save
}