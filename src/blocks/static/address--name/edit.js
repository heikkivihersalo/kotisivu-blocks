import { __ } from "@wordpress/i18n"
import { IconControls } from "../../../components/address";
import { useBlockProps, RichText } from "@wordpress/block-editor"

import EditorWrapper from "./editorWrapper";

import './editor.css';

const icons = [
	{ label: 'Email', value: 'fas fa-at' },
	{ label: 'Email (alt)', value: 'fas fa-envelope' }
];

const Edit = (props) => {
	const {
		attributes: {
			name,
			nameClass
		},
		setAttributes
	} = props;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<IconControls props={props} icons={icons} />
			<EditorWrapper children={props.children} attributes={props.attributes}>
				<RichText
					aria-label={__('Name text')}
					placeholder={__('Add name')}
					className={nameClass}
					tagName="h3"
					value={name}
					onChange={(content) => setAttributes({ name: content })}
				/>
			</EditorWrapper>
		</div>
	);
};

export default Edit;
