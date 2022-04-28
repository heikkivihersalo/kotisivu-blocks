import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			wrapperClass
		}
	} = props;

	return (
		<div className={wrapperClass}>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
