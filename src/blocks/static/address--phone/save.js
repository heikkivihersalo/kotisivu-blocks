import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";

const Save = (props) => {
	const {
		attributes: {
			linkURL,
			linkTitle,
			linkTarget,
			linkText,
			linkRel,
			hasTracking,
			trackingIdentifier,
			iconClass,
            iconToggle
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: `address__content address__content--phone`
	});

    let newContent =
        iconToggle
            ? `<i class="address__icon ${iconClass}"></i>${linkText}`
            : `${linkText}`

	return (
		<>
			<RichText.Content
				{...blockProps}
				tagName="a"
				href={linkURL}
				title={linkTitle}
				value={newContent}
				target={linkTarget}
				rel={linkRel}
				data-track={`${hasTracking ? "1" : "0"}`}
				data-identifier={trackingIdentifier}
			/>
		</>
	);
};

export default Save;
