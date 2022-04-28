import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

const Save = () => {

	return (
		<div className="btn-container">
			<InnerBlocks.Content/>
		</div>
	);
};

export default Save;
