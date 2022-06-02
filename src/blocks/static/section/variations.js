import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'section-empty',
        title: __('Empty Section', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [],
        attributes: {
            sectionClass: "",
            mediaClass: "section__image"
        }
    },
    {
        name: 'section-hero-front-page',
        title: __('Hero - Front Page', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [
            ['ksd/column-container', {
                columnCount: 2,
                columnLock: true,
                templateLock: "all",
                template: [
                    ['ksd/column', {
                        templateLock: false,
                        className: 'hero__column',
                        template: [
                            ['core/heading', { className: 'hero__heading' }],
                            ['ksd/column-container', {
                                columnCount: 1,
                                columnLock: true,
                                templateLock: false,
                                template: [
                                    ['ksd/column', {
                                        templateLock: false,
                                        className: 'hero__text-wrapper',
                                        template: [
                                            ['core/paragraph'],
                                            ['ksd/signature']
                                        ]
                                    }]
                                ]
                            }]
                        ]
                    }],
                    ['ksd/column', {
                        templateLock: "all",
                        className: 'hero__column',
                        template: [
                            ['ksd/optimized-image', { className: 'hero__image' }]
                        ]
                    }]
                ]
            }]
        ],
        attributes: {
            sectionClass: 'hero has-columns',
            mediaClass: "hero__background-image",
            alignmentReverse: true,
            hasBackgroundImage: false
        }
    }
];

export default variations;
