import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
const Save = () => {

	const blockProps = useBlockProps.save();

	return (
		<ol {...blockProps}>
			<InnerBlocks.Content />
		</ol>
	);
};

export default Save;
