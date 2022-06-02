import { __ } from "@wordpress/i18n";

import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: {
			wrapperClass
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: wrapperClass
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<>
			<address {...innerBlocksProps} />
		</>
	)
};

export default Save;
