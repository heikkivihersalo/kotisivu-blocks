import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import { Markup } from '../../../components/image'

const Save = (props) => {
	const {
		attributes: {
			cardModifiers,
			variationName
		},
	} = props;


	const blockProps = useBlockProps.save({
		className: variationName
	})
	return (
		<section {...blockProps}>
			<Markup {...props} />
			<div className={cardModifiers} >
				<InnerBlocks.Content />
			</div>
		</section>
	);
};

export default Save;
