import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			addressClass,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: addressClass
	});

	return (
		<address {...blockProps}>
				<InnerBlocks.Content />
		</address>
	);
};

export default Save;
