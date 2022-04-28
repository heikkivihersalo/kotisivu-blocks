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
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl
} from "@wordpress/components";

import {
	store as blocksStore,
} from '@wordpress/blocks';

import { SidebarSelector, Markup} from '../../../components/image'
import InnerBlocksContainer from './innerBlocksContainer';
import { cleanSpaces } from "../../../utilities/modifiers";

const Edit = (props) => {
	const {
		attributes: {
			variationName,
			template,
			sectionClass,
			backgroundImage,
			mediaClass
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: cleanSpaces(`section ${sectionClass} ${backgroundImage ? 'has-image' : ''}`)
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
						template: variation.innerBlocks,
						sectionClass: variation.attributes.sectionClass,
						mediaClass: variation.attributes.mediaClass
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
			<InspectorControls>
				<SidebarSelector {...props} />
				<PanelBody title={__("Section Settings", "kotisivu-theme-blocks")} initialOpen={true}>
					<PanelRow>
						<ToggleControl
							label={__("Use Background Image", "kotisivu-theme-blocks")}
							checked={backgroundImage}
							onChange={() => setAttributes({ backgroundImage: !backgroundImage })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Image Class', 'kotisivu-theme-blocks')}
							placeholder={__('e.g. section-name__image', 'kotisivu-theme-blocks')}
							onChange={(content) => setAttributes({ mediaClass: content })}
							value={mediaClass}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<InnerBlocksContainer {...props}>
					<InnerBlocks template={template} />
				</InnerBlocksContainer>
				{backgroundImage && <Markup {...props} />}
			</section>
		</>
	);
};

export default Edit;
