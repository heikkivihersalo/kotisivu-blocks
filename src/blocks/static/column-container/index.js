import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/column-container';
export const settings = {
	apiVersion: 2,
    title: __('Column Container', 'kotisivu-theme-blocks'),
    description: __('Container for multiple columns. Can be used to build grid layouts', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'screenoptions',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'hero-column-container',
            title: __('Hero', 'kotisivu-theme-blocks'),
            icon: 'editor-paragraph',
            scope: 'block',
            innerBlocks: [
                ["ksd/grid-column", { columnClass: "hero__column" }],
                ["ksd/grid-column", { columnClass: "hero__column" }],
                ["ksd/grid-column", { columnClass: "hero__column" }]
            ],
            attributes: {
                mediaClass: "hero-section__image"
            }
        },
        {
            name: 'section-column-container',
            title: __('Section', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["ksd/grid-column", { columnClass: "section__column" }],
                ["ksd/grid-column", { columnClass: "section__column" }],
                ["ksd/grid-column", { columnClass: "section__column" }]
            ],
            attributes: {
                mediaClass: "section__image"
            }
        },
        {
            name: 'footer-column-container',
            title: __('Footer', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["ksd/grid-column", {
                    columnClass: "footer__column",
                    template: [
                        ['ksd/image-optimized', { className: "footer__logo"}],
                        ['core/paragraph', { placeholder: 'Write company description here...', className: "footer__text"}],
                        ['ksd/icon-container', { 
                            variationName: "social-icons",
                            template: [
                                ["ksd/icon", {
                                    iconClass: "fab fa-facebook",
                                    iconToggle: true,
                                    linkToggle: true,
                                    linkURL: "https://www.facebook.com/",
                                    linkTitle: "Facebook"
                                }],
                                ["ksd/icon", {
                                    iconClass: "fab fa-instagram",
                                    iconToggle: true,
                                    linkToggle: true,
                                    linkURL: "https://www.instagram.com/",
                                    linkTitle: "Instagram"
                                }],
                                ["ksd/icon", {
                                    iconClass: "fab fa-twitter",
                                    iconToggle: true,
                                    linkToggle: true,
                                    linkURL: "https://www.twitter.com/",
                                    linkTitle: "Twitter"
                                }],
                                ["ksd/icon", {
                                    iconClass: "fab fa-linkedin",
                                    iconToggle: true,
                                    linkToggle: true,
                                    linkURL: "https://www.linkedin.com/",
                                    linkTitle: "LinkedIn"
                                }]
                            ]
                        }]
                    ]
                }],
                ["ksd/grid-column", {
                    columnClass: "footer__column",
                    template: [
                        ['core/heading', { 
                            content: __('Pages', 'kotisivu-theme-blocks'),
                            placeholder: 'Heading', 
                            className: "footer__title" 
                        }],
                        ['ksd/nav-footer']
                    ]
                }],
                ["ksd/grid-column", {
                    columnClass: "footer__column",
                    template: [
                        ['core/heading', { 
                            content: __('Contact', 'kotisivu-theme-blocks'),
                            placeholder: 'Heading', 
                            className: "footer__title" 
                        }],
                        ['ksd/address', { 
                            variationName: "footer__address",
                            addressClass: "address footer__address",
                            template: [
                                ["ksd/address--email", {
                                    content: __('email@domain.tld', 'kotisivu-theme-blocks'),
                                    wrapperToggle: true,
                                    iconToggle: true,
                                    iconClass: "fas fa-at"
                                }],
                                ["ksd/address--tel", {
                                    content: "+358 12 123 1234",
                                    wrapperToggle: true,
                                    iconToggle: true,
                                    iconClass: "fas fa-phone"
                                }],
                                ["ksd/address--name", {
                                    content: __('Company', 'kotisivu-theme-blocks'),
                                    wrapperToggle: false,
                                    iconToggle: false
                                }],
                                ["ksd/address--address", {
                                    wrapperToggle: false,
                                    iconToggle: false
                                }]
                            ]
                        }]
                    ]
                }]
            ],
            attributes: {
                mediaClass: "footer-section__image"
            }
        },
    ],
    edit,
    save
}
