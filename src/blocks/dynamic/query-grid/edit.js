import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import ServerSideRender from '@wordpress/server-side-render';

import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl
} from "@wordpress/components";

const Edit = (props) => {

	const {
		attributes: {
			postType,
			postCTA,
			hasPadding,
			smallHeading
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Query Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
					<TextControl
						label={__('Post Type', 'kotisivu-theme-blocks')}
						placeholder={__('Add post slug here', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ postType: content })}
						value={postType}
					/>
					<TextControl
						label={__('Post CTA', 'kotisivu-theme-blocks')}
						placeholder={__('Add button cta here', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ postCTA: content })}
						value={postCTA}
					/>
					<PanelRow>
						<ToggleControl
							label={__("Image Padding", "kotisivu-theme-blocks")}
							checked={hasPadding}
							onChange={() => setAttributes({ hasPadding: !hasPadding })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Small heading", "kotisivu-theme-blocks")}
							checked={smallHeading}
							onChange={() => setAttributes({ smallHeading: !smallHeading })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block="ksd/query-grid"
				attributes={props.attributes}
			/>
		</div>
	);
};

export default Edit;
