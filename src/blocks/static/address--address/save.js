import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			address,
			addressClass,
			iconClass,
            iconToggle
		},
	} = props;

	const blockProps = useBlockProps.save();

    let newContent =
        iconToggle
            ? `<i class="address__icon ${iconClass}"></i>${address}`
            : `${address}`

	return (
		<>
			<RichText.Content
				{...blockProps}
				className={addressClass}
				value={newContent}
			/>
		</>
	);
};

export default Save;
