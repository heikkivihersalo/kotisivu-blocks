import { __ } from "@wordpress/i18n";

import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import './editor.css';

const allowedBlocks = [
	"ksd/address--email",
	"ksd/address--phone",
	"ksd/address--name",
];

const Edit = (props) => {
	const {
		attributes: {
			wrapperClass,
			template,
			templateLock,
		},
		clientId,
	} = props;


	const blockProps = useBlockProps({
		className: wrapperClass
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
		<>
			<address {...innerBlocksProps} />
		</>
	);
};

export default Edit;
