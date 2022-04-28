import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    ToggleControl,
    TextControl
} from "@wordpress/components";


const EventTracking = (props) => {
    const {
        attributes: {
            hasTracking,
            trackingIdentifier,
        },
        setAttributes
    } = props;

    return (
        <>
            <PanelBody title={__('Analytics', 'kotisivu-theme-blocks')} initialOpen={true}>
                <ToggleControl
                    label={__('Track Events', 'kotisivu-theme-blocks')}
                    checked={hasTracking}
                    onChange={() => setAttributes({ hasTracking: !hasTracking })}
                />
                <TextControl
                    label={__('Identifier', 'kotisivu-theme-blocks')}
                    placeholder={__('ex. name for this button', 'kotisivu-theme-blocks')}
                    onChange={(content) => setAttributes({ trackingIdentifier: content })}
                    value={trackingIdentifier}
                />
            </PanelBody>
        </>
    )
}

export { EventTracking }
