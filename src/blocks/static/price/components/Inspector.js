import { __ } from "@wordpress/i18n";

import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    ToggleControl
} from "@wordpress/components";

const Inspector = (props) => {
    const {
        attributes: {
            hasPrefix,
            hasSuffix,
        },
        setAttributes,
    } = props;

    return (
        <InspectorControls>
            <PanelBody title={__('Price Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
                <ToggleControl
                    label="Use prefix"
                    checked={hasPrefix}
                    onChange={() => setAttributes({ hasPrefix: !hasPrefix })}
                />
                <ToggleControl
                    label="Use suffix"
                    checked={hasSuffix}
                    onChange={() => setAttributes({ hasSuffix: !hasSuffix })}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default Inspector
