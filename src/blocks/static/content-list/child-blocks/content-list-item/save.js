import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			listItemClass,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: listItemClass
	});

	return (
		<li {...blockProps}>
				<InnerBlocks.Content />
		</li>
	);
};

export default Save;
