import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/grid-two-column';
export const settings = {
	apiVersion: 2,
    title: __('Grid Section - Two Column', 'kotisivu-theme-blocks'),
    description: __('Create section with two column layout', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'columns',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'hero-grid-two-column',
            title: __('Hero', 'kotisivu-theme-blocks'),
            icon: 'editor-paragraph',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { placeholder: "Heading", level: 2, className:"hero-grid-two-column__heading" }],
                ["core/paragraph", { placeholder: "Content", className:"hero-grid-two-column__paragraph" }],
                ["ksd/button-container"]
            ],
            attributes: {
                mediaClass: "hero-grid-two-column__image",
                sectionModifiers: "hero-grid-two-column"
            }
        },
        {
            name: 'section-grid-two-column',
            title: __('Section', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { placeholder: "Heading", level: 2, className:"section-grid-two-column__heading" }],
                ["core/paragraph", { placeholder: "Content", className:"section-grid-two-column__paragraph" }],
                ["ksd/button-container"]
            ],
            attributes: {
                mediaClass: "section-grid-two-column__image",
                sectionModifiers: "section-grid-two-column"
            }
        },
    ],
    edit,
    save
}