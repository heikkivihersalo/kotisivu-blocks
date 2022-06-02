import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const Save = () => {

	const blockProps = useBlockProps.save({
		className: 'btn-container'
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content/>
		</div>
	);
};

export default Save;
