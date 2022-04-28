import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import { Markup } from '../../../components/image'
import InnerBlocksContainer from './innerBlocksContainer';
import { cleanSpaces } from "../../../utilities/modifiers";

const Save = (props) => {
	const {
		attributes: {
			backgroundImage,
			sectionClass
		}
	} = props;

	const blockProps = useBlockProps.save({
		className: cleanSpaces(`section ${sectionClass} ${backgroundImage ? 'has-image' : ''}`)
	});

	return (
		<section {...blockProps}>
			<InnerBlocksContainer {...props}>
				<InnerBlocks.Content />
			</InnerBlocksContainer>
			{backgroundImage && <Markup {...props} />}
		</section>
	);
};

export default Save;
