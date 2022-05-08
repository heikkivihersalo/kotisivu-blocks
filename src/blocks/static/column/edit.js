import { __ } from "@wordpress/i18n";

import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import './editor.css';

const Edit = (props) => {
	const {
		attributes: {
			columnClass,
			template,
			templateLock,
			allowedBlocks
		},
		clientId,
	} = props;


	const blockProps = useBlockProps({
		className: columnClass
	});

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

	return (
			<div {...innerBlocksProps} />
	);
};

export default Edit;
