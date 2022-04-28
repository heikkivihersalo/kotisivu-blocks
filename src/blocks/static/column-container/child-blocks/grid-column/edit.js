import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps
} from "@wordpress/block-editor";

const Edit = (props) => {
	const {
		attributes: {
			columnClass,
			template
		},
		setAttributes,
	} = props;


	const blockProps = useBlockProps({
		className: columnClass
	});

	return (
		<div {...blockProps}>
				<InnerBlocks template={template} />
		</div>
	);
};

export default Edit;
