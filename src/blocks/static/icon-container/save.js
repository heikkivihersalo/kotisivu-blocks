import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			variationName
		}
	} = props;

	const blockProps = useBlockProps.save({
		className: `icon-container ${variationName}`
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
