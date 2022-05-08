import { __ } from "@wordpress/i18n";

import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: {
			columnClass,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: columnClass
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<div {...innerBlocksProps} />
	)

};

export default Save;
