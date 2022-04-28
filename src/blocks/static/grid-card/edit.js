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

import Inspector from './components/Inspector';
import { Markup } from '../../../components/image';

const Edit = (props) => {
	const ALLOWED_BLOCKS = [
		"core/heading",
		"core/paragraph",
		"core/html",
		"core/shortcode",
		"ksd/button",
		"ksd/button-container",
		"ksd/price-tag",
		"ksd/image-optimized"
	];

	const {
		attributes: {
			cardModifiers,
			variationName,
			template,
		},
		setAttributes,
	} = props;


	const blockProps = useBlockProps({
		className: variationName
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
						cardModifiers: variation.attributes.cardModifiers,
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
		<>
			<Inspector {...props} />
			<section {...blockProps}>
				<div className={cardModifiers} >
					<InnerBlocks template={template} allowedBlocks={ALLOWED_BLOCKS} />
				</div>
				<Markup {...props} />
			</section>
		</>
	);
};

export default Edit;
