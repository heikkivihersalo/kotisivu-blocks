import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			name,
			nameClass,
			iconClass,
            iconToggle
		},
	} = props;

	const blockProps = useBlockProps.save();

    let newContent =
        iconToggle
            ? `<i class="address__icon ${iconClass}"></i>${name}`
            : `${name}`

	return (
		<>
			<RichText.Content
				{...blockProps}
				className={nameClass}
				tagName="h3"
				value={newContent}
			/>
		</>
	);
};

export default Save;
