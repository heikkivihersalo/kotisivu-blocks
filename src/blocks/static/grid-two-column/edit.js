import { __ } from "@wordpress/i18n";
import { useSelect } from '@wordpress/data';
import { name as blockName } from './index';

import {
	InnerBlocks,
	useBlockProps,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from "@wordpress/block-editor";

import {
	store as blocksStore,
} from '@wordpress/blocks';

import Inspector from './components/Inspector';
import { Selector } from '../../../components/image'

const Edit = (props) => {
	const ALLOWED_BLOCKS = [
		"core/heading",
		"core/paragraph",
		"core/shortcode",
		"core/html",
		"ksd/button",
		"ksd/button-container",
		"ksd/price-tag"
	];

	const {
		attributes: {
			sectionModifiers,
			variationName,
			template,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: sectionModifiers
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
						sectionModifiers: variation.attributes.sectionModifiers,
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
		<section {...blockProps}>
			<Inspector {...props} />
			<div className={`${variationName}__column`}>
				<Selector {...props} />
			</div>
			<div className={`${variationName}__column`}>
				<InnerBlocks template={template} allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</section>
	);
};

export default Edit;
