import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import ContainerWrapper from './components/ContainerWrapper';
import {calculateColumnClass} from './calculateColumnClass.js';

const Save = (props) => {
	const {
		attributes: {
			columnCount,
			modifiers
		}
	} = props;

	const blockProps = useBlockProps.save({
		className: `ksd-column-container ${calculateColumnClass(columnCount)} ${modifiers}`
	})

	return (
		<>
			<ContainerWrapper children={props.children} attributes={props.attributes} classes={blockProps.className}>
				<InnerBlocks.Content {...blockProps}/>
			</ContainerWrapper>
		</>
	);
};

export default Save;
