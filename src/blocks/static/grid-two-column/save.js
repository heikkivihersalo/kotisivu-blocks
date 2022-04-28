import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import { Markup } from '../../../components/image'

const Save = (props) => {
	const {
		attributes: {
			sectionModifiers,
			variationName
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: sectionModifiers
	})

	return (
		<section {...blockProps}>
			<div className={`${variationName}__column`}>
				<Markup {...props} />
			</div>
			<div className={`${variationName}__column`}>
				<InnerBlocks.Content />
			</div>
		</section>
	);
};

export default Save;
