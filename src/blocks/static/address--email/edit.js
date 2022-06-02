import { __ } from "@wordpress/i18n"
import { useBlockProps, RichText } from "@wordpress/block-editor"
import { useRef } from '@wordpress/element';

import { IconControls, LinkControls } from "../../../components/address";
import EditorWrapper from "./editorWrapper";

import './editor.css';

const icons = [
	{ label: 'Email', value: 'fas fa-at' },
	{ label: 'Email (alt)', value: 'fas fa-envelope' }
];

const Edit = (props) => {
	const {
		attributes: {
			linkText
		},
		setAttributes
	} = props;

	const ref = useRef();
	const richTextRef = useRef();

	const blockProps = useBlockProps(ref);

	return (
		<div {...blockProps}>
			<IconControls props={props} icons={icons} />
			<LinkControls {...props} />
			<EditorWrapper children={props.children} attributes={props.attributes}>
				<RichText
					ref={richTextRef}
					aria-label={__('Email text')}
					placeholder={__('Add email')}
					className="address__content address__content--email"
					value={linkText}
					onChange={(content) => setAttributes({ linkText: content })}
					withoutInteractiveFormatting
				/>
			</EditorWrapper>
		</div>
	);
};

export default Edit;
