import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps
} from "@wordpress/block-editor";

const Edit = (props) => {
	const {
		attributes: {
			listItemClass,
			template
		},
		setAttributes,
	} = props;


	const blockProps = useBlockProps({
		className: listItemClass
	});

	return (
		<li {...blockProps}>
				<InnerBlocks template={template} />
		</li>
	);
};

export default Edit;
