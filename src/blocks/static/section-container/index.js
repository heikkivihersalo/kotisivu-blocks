import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

const lorumIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const name = 'ksd/section-container';
export const settings = {
    apiVersion: 2,
    title: __('Section Container', 'kotisivu-theme-blocks'),
    description: __('Use as container for different sections', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'media-document',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'default',
            title: __('Default', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [],
            attributes: {
                sectionClass: "",
                mediaClass: "section__image"
            }
        },
        {
            name: 'services',
            title: __('Services', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { content: __('Services', 'kotisivu-theme-blocks'), level: 2, textAlign: "center" }],
                ["ksd/pricing-table", {
                    "variationName": "pricing-default",
                    "template": [
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
                    ]
                }],
                ["core/heading", {content: __('Description', 'kotisivu-theme-blocks'), level: 3, textAlign: "center", className: "section__heading"}],
                ["core/paragraph", {content: lorumIpsum, className: "section__description"}]
            ],
            attributes: {
                sectionClass: "services",
                mediaClass: "services__image"
            }
        },
        {
            name: 'faq',
            title: __('FAQ', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { content: __('Frequently asked questions', 'kotisivu-theme-blocks'), level: 2, textAlign: "center" }],
                ["core/paragraph"],
                ["ksd/faq"]
            ],
            attributes: {
                sectionClass: "faq",
                mediaClass: "faq__image"
            }
        },
        {
            name: 'contact-form',
            title: __('Contact Form', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { content: __('Contact Us', 'kotisivu-theme-blocks'), level: 2, textAlign: "center" }],
                ["ksd/contact-form", {
                    "variationName": "pricing-default",
                    "template": [
                            ["ksd/contact-form--name"],
                            ["ksd/contact-form--email"],
                            ["ksd/contact-form--tel"],
                            ["ksd/contact-form--textarea"]
                    ]
                }]
            ],
            attributes: {
                sectionClass: "contact-us",
                mediaClass: "contact-us__image"
            }
        }
    ],
    edit,
    save
}
