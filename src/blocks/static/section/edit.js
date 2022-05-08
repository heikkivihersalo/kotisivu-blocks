import { __ } from "@wordpress/i18n";
import { useSelect } from '@wordpress/data';
import { name as blockName } from './block.json';
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
} from "@wordpress/block-editor";

import {
	store as blocksStore,
} from '@wordpress/blocks';

import { Markup } from '../../../components/image'
import InnerBlocksWrapper from './components/InnerBlocksWrapper';
import { cleanSpaces } from "../../../utilities/modifiers";
import Inspector from "./components/Inspector";

import './editor.css';

const Edit = (props) => {
	const {
		attributes: {
			variationName,
			template,
			sectionClass,
			modifiers,
			hasBackgroundImage,
			templateLock,
			allowedBlocks
		},
		setAttributes,
		clientId,
	} = props;

	const blockProps = useBlockProps({
		className: cleanSpaces(`ksd-section ${sectionClass} ${modifiers}`)
	});


	/**
	 * Get render appender
	 */
	const { hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockOrder } = select(blockEditorStore);

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
			};
		},
		[clientId]
	);

	const innerBlocksProps = useInnerBlocksProps(
		{ ...blockProps },
		{
			template: template,
			templateLock,
			allowedBlocks,
			renderAppender: hasChildBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	const blockVariations = useSelect(
		(select) => {
			const { getBlockVariations } = select(blocksStore);
			return getBlockVariations(blockName, 'block');
		},
		[blockName]
	);


	/* If variation isn't selected, render variation select screen */
	if (!variationName) {
		return (
			<BlockVariationPicker
				label={__('Choose variation')}
				instructions={__('Select a variation to start with.')}
				onSelect={(variation) =>
					setAttributes({
						variationName: variation.name,
						template: variation.innerBlocks,
						sectionClass: variation.attributes.sectionClass,
						mediaClass: variation.attributes.mediaClass
					})
				}
				variations={blockVariations}
			/>)
	}

	return (
		<>
			<Inspector {...props} />
			<section {...blockProps}>
				<InnerBlocksWrapper {...props}>
					{innerBlocksProps.children}
				</InnerBlocksWrapper>
				{hasBackgroundImage && <Markup {...props} />}
			</section>
		</>
	);
};

export default Edit;
