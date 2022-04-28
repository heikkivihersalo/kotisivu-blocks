import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/address';
export const settings = {
	apiVersion: 2,
    title: __('Address', 'kotisivu-theme-blocks'),
    description: __('Add contact information like email, phone, address etc.', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'store',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'footer-address',
            title: __('Footer Address', 'kotisivu-theme-blocks'),
            icon: 'editor-paragraph',
            scope: 'block',
            innerBlocks: [
                ["ksd/address--email", {
                    wrapperToggle: true,
                    iconToggle: true,
                    iconClass: "fas fa-at"
                }],
                ["ksd/address--tel", {
                    wrapperToggle: true,
                    iconToggle: true,
                    iconClass: "fas fa-phone"
                }],
                ["ksd/address--name", {
                    wrapperToggle: false,
                    iconToggle: false
                }],
                ["ksd/address--address", {
                    wrapperToggle: false,
                    iconToggle: false
                }],
            ],
            attributes: {
                addressClass: "address footer-address"
            }
        },
    ],
    edit,
    save
}