import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/content-list';
export const settings = {
	apiVersion: 2,
    title: __('Content List', 'kotisivu-theme-blocks'),
    description: __('Numbered list for adding content like headings and paragraph', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'screenoptions',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'content-list',
            title: __('Default', 'kotisivu-theme-blocks'),
            icon: 'editor-paragraph',
            scope: 'block',
            innerBlocks: [
                ["ksd/content-list-item", { listItemClass: "content-list-item" }],
                ["ksd/content-list-item", { listItemClass: "content-list-item" }],
                ["ksd/content-list-item", { listItemClass: "content-list-item" }],
            ]
        },
    ],
    edit,
    save
}
