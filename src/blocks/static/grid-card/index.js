import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

export const name = 'ksd/grid-card';
export const settings = {
	apiVersion: 2,
    title: __('Grid Section - Card', 'kotisivu-theme-blocks'),
    description: __('Create section with background image and card', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'feedback',
    supports: {
        className: false
    },
    variations: [
        {
            name: 'hero-grid',
            title: __('Hero', 'kotisivu-theme-blocks'),
            icon: 'editor-paragraph',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { placeholder: "Heading", level: 2, className:"hero-grid__heading" }],
                ["core/paragraph", { placeholder: "Content", className:"hero-grid__paragraph" }],
                ["ksd/button-container"]
            ],
            attributes: {
                mediaClass: "hero-grid__image",
                cardModifiers: "hero-grid__card"
            }
        },
        {
            name: 'section-grid',
            title: __('Section', 'kotisivu-theme-blocks'),
            icon: 'button',
            scope: 'block',
            innerBlocks: [
                ["core/heading", { placeholder: "Heading", level: 2, className:"section-grid__heading" }],
                ["core/paragraph", { placeholder: "Content", className:"section-grid__paragraph" }],
                ["ksd/button-container"]
            ],
            attributes: {
                mediaClass: "section-grid__image",
                cardModifiers: "section-grid__card"
            }
        },
    ],
	edit,
	save
}