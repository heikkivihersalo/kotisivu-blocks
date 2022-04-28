import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls
} from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
	ToggleControl
} from "@wordpress/components";

import { Selector } from '../../../components/image'
import LinkWrapper from './linkWrapper';


const Edit = (props) => {
	const { attributes: { iconClass, iconToggle, linkToggle, linkURL, linkTitle }, setAttributes, } = props;
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Icon Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
					<TextControl
						label={__('Icon Class', 'kotisivu-theme-blocks')}
						placeholder={__('For example fas fa-user', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ iconClass: content })}
						value={iconClass}
					/>
					<ToggleControl
						label="Use icon?"
						help={
							iconToggle
								? 'Block is using icon insted of image'
								: 'Block is using image insted of icon.'
						}
						checked={iconToggle}
						onChange={() => setAttributes({ iconToggle: !iconToggle })}
					/>
				</PanelBody>
				<PanelBody title={__('Link Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
					<TextControl
						label={__('Link URL', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ linkURL: content })}
						value={linkURL}
					/>
					<TextControl
						label={__('Link Title', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ linkTitle: content })}
						value={linkTitle}
					/>
					<ToggleControl
						label="Set as link"
						checked={linkToggle}
						onChange={() => setAttributes({ linkToggle: !linkToggle })}
					/>
				</PanelBody>
			</InspectorControls>
			<LinkWrapper children={props.children} attributes={props.attributes} editor>
				{iconToggle ? <i className={`icon ${iconClass}`}></i> : <Selector {...props} />}
			</LinkWrapper>
		</div>
	);
};

export default Edit;
