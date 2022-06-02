import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'address-empty',
        title: __('Empty Address', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [],
        attributes: {}
    },
    {
        name: 'address-all',
        title: __('All contact info', 'kotisivu-theme-blocks'),
        icon: 'button',
        scope: 'block',
        innerBlocks: [

        ],
        attributes: {}
    }
];

export default variations;
