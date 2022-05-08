import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl
} from "@wordpress/components";

const Inspector = (props) => {
    const {
        attributes: {
            sectionHeading
        },
        setAttributes,
    } = props;

    return (
        <InspectorControls>
            <PanelBody title={__('Image Gallery Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
                <TextControl
                    label={__('Section Heading', 'kotisivu-theme-blocks')}
                    help={__('Add some descriptive information (ex. title or heading) for assistive technologies', 'kotisivu-theme-blocks')}
                    onChange={(content) => setAttributes({ sectionHeading: content })}
                    value={sectionHeading}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default Inspector
