import { __ } from "@wordpress/i18n"
import Inspector from './components/Inspector'
import { useBlockProps, RichText } from "@wordpress/block-editor"
import { useRef } from '@wordpress/element';

import './editor.css';

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
			<Inspector {...props} />
			<RichText
				ref={richTextRef}
				aria-label={__('Button text')}
				placeholder={__('Add text…')}
				className={`btn`}
				value={linkText}
				onChange={(content) => setAttributes({ linkText: content })}
				withoutInteractiveFormatting
			/>
		</div>
	);
};

export default Edit;
