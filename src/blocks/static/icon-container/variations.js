import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'icons-empty',
        title: __('Empty', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [],
    },
    {
        name: 'icons-social',
        title: __('Social Icons', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [
            ["ksd/icon", {
                iconClass: "fab fa-facebook",
                iconToggle: false,
                linkToggle: true,
                linkURL: "https://www.facebook.com/",
                linkTitle: "Facebook"
            }],
            ["ksd/icon", {
                iconClass: "fab fa-instagram",
                iconToggle: false,
                linkToggle: true,
                linkURL: "https://www.instagram.com/",
                linkTitle: "Instagram"
            }],
            ["ksd/icon", {
                iconClass: "fab fa-twitter",
                iconToggle: false,
                linkToggle: true,
                linkURL: "https://www.twitter.com/",
                linkTitle: "Twitter"
            }],
            ["ksd/icon", {
                iconClass: "fab fa-linkedin",
                iconToggle: false,
                linkToggle: true,
                linkURL: "https://www.linkedin.com/",
                linkTitle: "LinkedIn"
            }]
        ],
    }
];

export default variations;
