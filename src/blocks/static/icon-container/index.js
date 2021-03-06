import { __ } from "@wordpress/i18n";
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";
import save from "./save";
import metadata from './block.json';
import variations from './variations.js';
import './style.css';

const {
    apiVersion,
    name,
    title,
    category,
    icon,
    description,
    keywords,
    textdomain,
    supports
} = metadata;

export const settings = {
    apiVersion: apiVersion,
    title: __(title, 'kotisivu-theme-blocks'),
    description: __(description, 'kotisivu-theme-blocks'),
    category: category,
    icon: icon,
    supports: supports,
    keywords: keywords,
    textdomain: textdomain,
    variations,
    edit,
    save
}

registerBlockType(name, settings);
