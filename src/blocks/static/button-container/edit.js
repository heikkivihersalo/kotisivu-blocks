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
					isPrimary: true ,
					isSecondary: false
				}
		],
		[
			"ksd/button",
				{ 
					isPrimary: false ,
					isSecondary: true
				}
		],
	];

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<div className="btn-container">
				<InnerBlocks orientation="horizontal" template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
};

export default Edit;
