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
        name: 'section-hero-two-column',
        title: __('Hero - Two Column', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [
            ['ksd/column-container', {
                columnCount: 2,
                columnLock: true,
                templateLock: "all",
                template: [
                    ['ksd/column', {
                        className: 'hero__column',
                        template: [
                            ['core/heading', { className: 'hero__heading' }],
                            ['core/paragraph', { className: 'hero__paragraph' }]
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
            hasBackgroundImage: false
        }
    },
    {
        name: 'section-hero-background-image',
        title: __('Hero - Card with Background Image', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [
            ['ksd/column-container', {
                columnCount: 1,
                columnLock: true,
                templateLock: "all",
                template: [
                    ['ksd/column', {
                        className: 'hero__card',
                        template: [
                            ['core/heading', { className: 'hero__heading' }],
                            ['core/paragraph', { className: 'hero__paragraph' }]
                        ]
                    }]
                ]
            }]
        ],
        attributes: {
            sectionClass: "hero has-card",
            mediaClass: "hero__background-image",
            hasBackgroundImage: true
        }
    },
    {
        name: 'section-section-two-column',
        title: __('Section - Two Column', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [
            ['ksd/column-container', {
                columnCount: 2,
                columnLock: true,
                templateLock: "all",
                template: [
                    ['ksd/column', {
                        className: 'section__column',
                        template: [
                            ['core/heading', { className: 'section__heading' }],
                            ['core/paragraph', { className: 'section__paragraph' }]
                        ]
                    }],
                    ['ksd/column', {
                        templateLock: "all",
                        className: 'section__column',
                        template: [
                            ['ksd/optimized-image', { className: 'section__image' }]
                        ]
                    }]
                ]
            }]
        ],
        attributes: {
            sectionClass: "section has-columns",
            mediaClass: "section__background-image",
            hasBackgroundImage: false
        }
    },
    {
        name: 'section-section-backgrund-image',
        title: __('Section - Card with Background Image', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [
            ['ksd/column-container', {
                columnCount: 1,
                columnLock: true,
                templateLock: "all",
                template: [
                    ['ksd/column', {
                        className: 'section__card',
                        template: [
                            ['core/heading', { className: 'section__heading' }],
                            ['core/paragraph', { className: 'section__paragraph' }]
                        ]
                    }]
                ]
            }]
        ],
        attributes: {
            sectionClass: "section has-card",
            mediaClass: "section__background-image",
            hasBackgroundImage: true
        }
    }
];

export default variations;
