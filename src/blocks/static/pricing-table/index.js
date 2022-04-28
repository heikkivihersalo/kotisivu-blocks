import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/pricing-table';
export const settings = {
    apiVersion: 2,
    title: __('Pricing Table', 'kotisivu-theme-blocks'),
    description: __('Simple pricing table', 'kotisivu-theme-blocks'),
    category: 'widgets',
    icon: 'excerpt-view',
    supports: {
        className: false
    },
    variations: [
        /** 
         * Pricing Table with Icon 
         */
        {
            name: 'pricing-default',
            title: __('Pricing Table with Icon', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["ksd/pricing-column", {
                    columnClass: "pricing-table__column",
                    template: [
                        ["ksd/icon"],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--top",
                            variationName: "wrapper-heading-paragraph",
                            template: [
                                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
                            ]
                        }],
                        ["core/list", { className: "pricing-table__features" }],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--bottom",
                            variationName: "wrapper-price-button",
                            template: [
                                ["ksd/price-tag", { className: "pricing-table__price" }],
                                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
                            ]
                        }]
                    ]
                }],
                ["ksd/pricing-column", {
                    columnClass: "pricing-table__column",
                    featured: true,
                    ribbon: true,
                    ribbonText: __('Recommended', 'kotisivu-theme-blocks'),
                    template: [
                        ["ksd/icon"],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--top",
                            variationName: "wrapper-heading-paragraph",
                            template: [
                                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
                            ]
                        }],
                        ["core/list", { className: "pricing-table__features" }],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--bottom",
                            variationName: "wrapper-price-button",
                            template: [
                                ["ksd/price-tag", { className: "pricing-table__price" }],
                                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
                            ]
                        }]
                    ]
                }],
                ["ksd/pricing-column", {
                    columnClass: "pricing-table__column",
                    template: [
                        ["ksd/icon"],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--top",
                            variationName: "wrapper-heading-paragraph",
                            template: [
                                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
                            ]
                        }],
                        ["core/list", { className: "pricing-table__features" }],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--bottom",
                            variationName: "wrapper-price-button",
                            template: [
                                ["ksd/price-tag", { className: "pricing-table__price" }],
                                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
                            ]
                        }]
                    ]
                }]
            ],
        },
        /** 
         * Pricing Table without Icon 
         */
        {
            name: 'pricing-default-without-icon',
            title: __('Pricing Table without Icon', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["ksd/pricing-column", {
                    columnClass: "pricing-table__column",
                    template: [
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--top",
                            variationName: "wrapper-heading-paragraph",
                            template: [
                                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
                            ]
                        }],
                        ["core/list", { className: "pricing-table__features" }],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--bottom",
                            variationName: "wrapper-price-button",
                            template: [
                                ["ksd/price-tag", { className: "pricing-table__price" }],
                                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
                            ]
                        }]
                    ]
                }],
                ["ksd/pricing-column", {
                    columnClass: "pricing-table__column",
                    featured: true,
                    ribbon: true,
                    ribbonText: __('Recommended', 'kotisivu-theme-blocks'),
                    template: [
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--top",
                            variationName: "wrapper-heading-paragraph",
                            template: [
                                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
                            ]
                        }],
                        ["core/list", { className: "pricing-table__features" }],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--bottom",
                            variationName: "wrapper-price-button",
                            template: [
                                ["ksd/price-tag", { className: "pricing-table__price" }],
                                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
                            ]
                        }]
                    ]
                }],
                ["ksd/pricing-column", {
                    columnClass: "pricing-table__column",
                    template: [
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--top",
                            variationName: "wrapper-heading-paragraph",
                            template: [
                                ["core/heading", { placeholder: "Heading", level: 3, className: "pricing-table__title" }],
                                ["core/paragraph", { placeholder: "Content", className: "pricing-table__description" }]
                            ]
                        }],
                        ["core/list", { className: "pricing-table__features" }],
                        ["ksd/pricing-wrapper", {
                            wrapperClass: "pricing-table__wrapper pricing-table__wrapper--bottom",
                            variationName: "wrapper-price-button",
                            template: [
                                ["ksd/price-tag", { className: "pricing-table__price" }],
                                ["ksd/button", { className: "pricing-table__btn", primaryToggle: true }]
                            ]
                        }]
                    ]
                }]
            ],
        },
    ],
    edit,
    save
}
