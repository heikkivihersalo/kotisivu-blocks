import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps
} from "@wordpress/block-editor";

import './editor.css';

const Edit = () => {
	const ALLOWED_BLOCKS = ["ksd/button"];
	const TEMPLATE = [
		[
			"ksd/button",
				{ 
					className: 'is-style-clr--primary'
				}
		],
		[
			"ksd/button",
				{ 
					className: 'is-style-clr--secondary'
				}
		],
	];

	const blockProps = useBlockProps({
		className: 'btn-container'
	});

	return (
			<div {...blockProps}>
				<InnerBlocks orientation="horizontal" template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} />
			</div>
	);
};

export default Edit;
