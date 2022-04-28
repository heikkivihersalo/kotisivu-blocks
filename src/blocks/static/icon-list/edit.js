import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls
} from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
} from "@wordpress/components";


const Edit = (props) => {
	const { attributes: { iconClass, content }, setAttributes, } = props;
	const blockProps = useBlockProps({
		className: "icon-list"
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Icon Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
					<TextControl
						label={__('Icon Class', 'kotisivu-theme-blocks')}
						placeholder={__('For example fas fa-user', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ iconClass: content })}
						value={iconClass}
					/>
				</PanelBody>
			</InspectorControls>
			<ul {...blockProps}>
				<RichText
					tagName="li"
					multiline="li"
					value={ content }
					data-icon={ iconClass }
					onChange={ ( content ) => setAttributes( { content: content } ) }
					placeholder={ __( 'List Item', 'kotisivu-theme-blocks') }
				/>
			</ul>
		</>
	);
};

export default Edit;
