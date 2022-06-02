import { __ } from "@wordpress/i18n";

import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl
} from "@wordpress/components";

const IconControls = ({ props, icons }) => {
    const {
        attributes: {
            iconClass,
            iconToggle,
            hasCustomIcon
        },
        setAttributes,
    } = props;

    const setIconCode = (content) => {
        if (content == 'custom-icon') {
            setAttributes({ hasCustomIcon: true })
            return
        }

        setAttributes({ hasCustomIcon: false })
        setAttributes({ iconClass: content })
    }

    return (
        <InspectorControls>
            <PanelBody title={__('Icon Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
                <ToggleControl
                    label={__('Add icon', 'kotisivu-theme-blocks')}
                    checked={iconToggle}
                    onChange={() => setAttributes({ iconToggle: !iconToggle })}
                />
                {iconToggle &&
                    <SelectControl
                        label="Icon"
                        value={icons.some(icon => icon.value === iconClass) ? iconClass : 'custom-icon'}
                        options={icons}
                        onChange={setIconCode}
                    />
                }
                {(hasCustomIcon && iconToggle) &&
                    <TextControl
                        label={__('Custom Icon Code', 'kotisivu-theme-blocks')}
                        placeholder={__('For example fas fa-user', 'kotisivu-theme-blocks')}
                        onChange={(content) => setAttributes({ iconClass: content })}
                        value={iconClass}
                    />
                }
            </PanelBody>
        </InspectorControls>
    )
}

export { IconControls };
