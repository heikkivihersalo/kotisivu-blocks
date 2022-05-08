import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import { Markup } from '../../../components/image'
import InnerBlocksWrapper from './components/InnerBlocksWrapper';
import { cleanSpaces } from "../../../utilities/modifiers";

const Save = (props) => {
	const {
		attributes: {
			hasBackgroundImage,
			sectionClass,
			modifiers
		}
	} = props;

	const blockProps = useBlockProps.save({
		className: cleanSpaces(`ksd-section ${sectionClass} ${modifiers}`)
	});

	return (
		<section {...blockProps}>
			<InnerBlocksWrapper {...props}>
				<InnerBlocks.Content />
			</InnerBlocksWrapper>
			{hasBackgroundImage && <Markup {...props} />}
		</section>
	);
};

export default Save;
