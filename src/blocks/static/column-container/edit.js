import { __ } from "@wordpress/i18n";
import { useSelect } from '@wordpress/data';
import { name as blockName } from './index';

import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from "@wordpress/block-editor";

import {
	store as blocksStore,
} from '@wordpress/blocks';

import {
	PanelBody,
	ToggleControl,
	TextControl
} from "@wordpress/components";

import { Markup, SidebarSelector } from '../../../components/image'
import ColumnContainer from './columnContainer';

const Edit = (props) => {
	const {
		attributes: {
			variationName,
			template,
			containerToggle,
			containerClass
		},
		setAttributes,
	} = props;

	const ALLOWED_BLOCKS = ["ksd/grid-column"];

	const blockProps = useBlockProps({
		className: "column-container"
	});
	/**
	  * Get block variations
	  */
	const blockVariations = useSelect(
		(select) => {
			const { getBlockVariations } = select(blocksStore);
			return getBlockVariations(blockName, 'block');
		},
		[blockName]
	);


	/**
	 * If variation isn't selected, render variation select screen
	 */
	if (!variationName) {
		return (
			<BlockVariationPicker
				label={__('Choose variation')}
				instructions={__('Select a variation to start with.')}
				onSelect={(variation) =>
					setAttributes({
						variationName: variation.name,
						mediaClass: variation.attributes.mediaClass,
						template: variation.innerBlocks
					})
				}
				variations={blockVariations}
			/>)
	}

	/**
	 * Else render block
	 */
	return (
		<div {...blockProps}>
			<InspectorControls>
				<SidebarSelector {...props} />
				<PanelBody title={__("Container Settings", "kotisivu-theme-blocks")} initialOpen={true}>
					<TextControl
						label={__('Container Class', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ containerClass: content })}
						value={containerClass}
					/>
					<ToggleControl
						label={__('Column Container', 'kotisivu-theme-blocks')}
						checked={containerToggle}
						onChange={() => setAttributes({ containerToggle: !containerToggle })}
					/>
				</PanelBody>
			</InspectorControls>

			<ColumnContainer {...props}>
				<InnerBlocks orientation="horizontal" template={template} allowedBlocks={ALLOWED_BLOCKS} />
			</ColumnContainer>
			<Markup {...props} />
		</div>
	);
};

export default Edit;
