import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			columnClass,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: columnClass
	});

	return (
		<div {...blockProps}>
				<InnerBlocks.Content />
		</div>
	);
};

export default Save;
