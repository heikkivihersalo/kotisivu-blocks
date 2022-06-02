import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import ServerSideRender from '@wordpress/server-side-render';
import './editor.css';

import {
	PanelBody,
	RangeControl
} from "@wordpress/components";

const Edit = (props) => {
	const {
		attributes: {
			maxPosts
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Query Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
					<RangeControl
						label="Visible Posts"
						value={maxPosts}
						onChange={(value) => setAttributes({ maxPosts: value })}
						min={-1}
						max={50}
					/>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block="ksd/blog-grid"
				attributes={props.attributes}
			/>
		</div>
	);
};

export default Edit;