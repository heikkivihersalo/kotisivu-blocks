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
			trackingIdentifier
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: `btn`
	});

	return (
		<>
			<RichText.Content
				{...blockProps}
				tagName="a"
				href={linkURL}
				title={linkTitle}
				value={linkText}
				target={linkTarget}
				rel={linkRel}
				data-track={`${hasTracking ? "1" : "0"}`}
				data-identifier={trackingIdentifier}
			/>
		</>
	);
};

export default Save;
