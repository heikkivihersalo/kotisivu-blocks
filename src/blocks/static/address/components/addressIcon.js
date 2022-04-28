import { __ } from "@wordpress/i18n";
import {
    InspectorControls
} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl,
    ToggleControl
} from "@wordpress/components";

const AddressIcon = (props) => {
    const {
        attributes: {
            iconClass,
            iconToggle
        },
        setAttributes,
    } = props;

    const setIcon = () => {
        setAttributes({ iconToggle: !iconToggle })
    };

    return (
        <React.Fragment>
            <InspectorControls>
                <PanelBody title={__('Field Icon', 'kotisivu-theme-blocks')} initialOpen={false}>
                    <TextControl
                        label={__('Icon Class', 'kotisivu-theme-blocks')}
                        placeholder={__('For example fas fa-user', 'kotisivu-theme-blocks')}
                        onChange={(content) => setAttributes({ iconClass: content })}
                        value={iconClass}
                    />
                    <ToggleControl
                        label={__('Use Icon', 'kotisivu-theme-blocks')}
                        checked={iconToggle}
                        onChange={setIcon}
                    />
                </PanelBody>
            </InspectorControls>
            {iconToggle && <i className={`address__icon ${iconClass}`}></i>}
        </React.Fragment>
    );
};

export default AddressIcon;
