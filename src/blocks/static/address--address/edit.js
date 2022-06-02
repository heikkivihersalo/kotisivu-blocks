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
			address,
			addressClass
		},
		setAttributes
	} = props;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<IconControls props={props} icons={icons} />
			<EditorWrapper children={props.children} attributes={props.attributes}>
				<RichText
					aria-label={__('address text')}
					placeholder={__('Add address')}
					className={addressClass}
					multiline
					value={address}
					onChange={(content) => setAttributes({ address: content })}
				/>
			</EditorWrapper>
		</div>
	);
};

export default Edit;
