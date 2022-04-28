import { __ } from "@wordpress/i18n";
import { useSelect } from '@wordpress/data';
import { name as blockName } from './index';

import {
	useBlockProps,
	InnerBlocks,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from "@wordpress/block-editor";

import {
	store as blocksStore,
} from '@wordpress/blocks';

const Edit = (props) => {
	const {
		attributes: {
			wrapperClass,
			variationName,
			template
		},
		setAttributes
	} = props;

	const ALLOWED_BLOCKS = [
		"core/heading",
		"core/paragraph",
		"core/shortcode",
		"core/html",
		"core/list",
		"ksd/button",
		"ksd/icon-block"
	];

	const blockProps = useBlockProps({
		className: wrapperClass
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
						wrapperClass: variation.attributes.wrapperClass,
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
		<>
			<div {...blockProps}>
				<InnerBlocks template={template} allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</>
	);
};

export default Edit;
