import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/icon-container';
export const settings = {
	apiVersion: 2,
    title: __('Icon Container', 'kotisivu-theme-blocks'),
    description: __('Container that can hold multiple icons', 'kotisivu-theme-blocks'),
    category: 'media',
    icon: 'filter',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'social-icons',
            title: __('Social Icons', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
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
            ],
        }
    ],
    edit,
    save
}