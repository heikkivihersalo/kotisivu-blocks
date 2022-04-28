import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";

const Save = (props) => {

	const { attributes: { iconClass, content }, } = props;

	const blockProps = useBlockProps.save();

	return (
		<ul {...blockProps}>
			<RichText.Content tagName="li" value={content} data-icon={iconClass} />
		</ul>
	);
};

export default Save;
