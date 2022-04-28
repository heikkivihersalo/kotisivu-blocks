import { __ } from "@wordpress/i18n";
import { EventTracking } from "../../../../components/inspector";

import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl,
    ToggleControl
} from "@wordpress/components";

const Inspector = (props) => {
    const {
        attributes: {
            linkURL,
            linkTitle,
            linkText,
            hasLinkTarget,
            isPrimary,
            isSecondary,
            hasOutline,
        },
        setAttributes,
    } = props;

    return (
        <InspectorControls>
            <PanelBody title={__('Button Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
                <TextControl
                    label={__('URL', 'kotisivu-theme-blocks')}
                    placeholder={__('url', 'kotisivu-theme-blocks')}
                    onChange={(content) => setAttributes({ linkURL: content })}
                    value={linkURL}
                />
                <TextControl
                    label={__('Text', 'kotisivu-theme-blocks')}
                    placeholder={__('text', 'kotisivu-theme-blocks')}
                    onChange={(content) => setAttributes({ linkText: content })}
                    value={linkText}
                />
                <TextControl
                    label={__('Title', 'kotisivu-theme-blocks')}
                    placeholder={__('title', 'kotisivu-theme-blocks')}
                    onChange={(content) => setAttributes({ linkTitle: content })}
                    value={linkTitle}
                />
                <ToggleControl
                    label={__('Open in a new window', 'kotisivu-theme-blocks')}
                    checked={hasLinkTarget}
                    onChange={() => setAttributes({ hasLinkTarget: !hasLinkTarget })}
                />
                <ToggleControl
                    label={__('Primary Color', 'kotisivu-theme-blocks')}
                    checked={isPrimary}
                    onChange={() => setAttributes({ isPrimary: !isPrimary })}
                />
                <ToggleControl
                    label={__('Secondary Color', 'kotisivu-theme-blocks')}
                    checked={isSecondary}
                    onChange={() => setAttributes({ isSecondary: !isSecondary })}
                />
                <ToggleControl
                    label={__('Outline Toggle', 'kotisivu-theme-blocks')}
                    checked={hasOutline}
                    onChange={() => setAttributes({ hasOutline: !hasOutline })}
                />
            </PanelBody>
            <EventTracking {...props} />
        </InspectorControls>
    )
}

export default Inspector
