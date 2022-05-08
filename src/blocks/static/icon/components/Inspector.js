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

const faIcons = [
    { label: 'Facebook', value: 'fab fa-facebook' },
    { label: 'Instagram', value: 'fab fa-instagram' },
    { label: 'LinkedIn', value: 'fab fa-linkedin' },
    { label: 'Pinterest', value: 'fab fa-pinterest' },
    { label: 'Snapchat', value: 'fab fa-snapchat' },
    { label: 'Spotify', value: 'fab fa-spotify' },
    { label: 'Tiktok', value: 'fab fa-tiktok' },
    { label: 'Twitter', value: 'fab fa-twitter' },
    { label: 'Youtube', value: 'fab fa-youtube' },
    { label: 'Custom', value: 'custom-icon' }
];

const Inspector = (props) => {
    const {
        attributes: {
            iconClass,
            hasCustomIcon,
            iconToggle,
            linkURL,
            linkTitle,
            linkToggle
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
                <SelectControl
                    label="Icon"
                    value={faIcons.some(icon => icon.value === iconClass) ? iconClass : 'custom-icon'}
                    options={faIcons}
                    onChange={setIconCode}
                />
                {hasCustomIcon &&
                    <TextControl
                        label={__('Custom Icon Code', 'kotisivu-theme-blocks')}
                        placeholder={__('For example fas fa-user', 'kotisivu-theme-blocks')}
                        onChange={(content) => setAttributes({ iconClass: content })}
                        value={iconClass}
                    />
                }
                <ToggleControl
                    label="Use custom image"
                    help={
                        iconToggle
                            ? 'Block is using image insted of icon.'
                            : 'Block is using icon insted of image'
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
    )
}

export default Inspector
