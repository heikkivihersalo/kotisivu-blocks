import { __ } from "@wordpress/i18n";

import {
	InnerBlocks,
	useBlockProps
} from "@wordpress/block-editor";

import ContainerWrapper from './components/ContainerWrapper';
import ColumnInserterButton from './components/ColumnInserterButton';
import Inspector from './components/Inspector';
import { calculateColumnClass } from './calculateColumnClass';

import './editor.css';

const ALLOWED_BLOCKS = ["ksd/column"];

const Edit = (props) => {
	const {
		attributes: {
			template,
			templateLock,
			columnCount,
			columnLock,
			modifiers
		},
		clientId
	} = props;

	const blockProps = useBlockProps({
		className: `ksd-column-container ${calculateColumnClass(columnCount)} ${modifiers}`
	});

	/**
	 * Else render block
	 */
	return (
		<div {...blockProps}>
			<Inspector {...props} />
			<ContainerWrapper children={props.children} attributes={props.attributes} classes={blockProps.className}>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={template}
					templateLock={templateLock}
					renderAppender={
						columnLock
							? undefined
							: () => <ColumnInserterButton clientId={clientId}/>
						}
				/>
			</ContainerWrapper>
		</div>
	);
};

export default Edit;
