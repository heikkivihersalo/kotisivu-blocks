import { __ } from "@wordpress/i18n";
import {
    MediaUpload,
    MediaUploadCheck
} from "@wordpress/block-editor";

import {
    PanelRow,
    TextControl
} from "@wordpress/components";

import { setImage, getImage } from '../../../../../utilities/image';

const SelectorSidebar = (props) => {
    const {
        attributes: {
            mediaID,
            mediaClass
        },
    } = props;

    return (
        <div className="editor-post-featured-image">
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={(media) => setImage(media, props)}
                    allowedTypes="image"
                    value={mediaID}
                    render={({ open }) => getImage(props, open)}
                />
            </MediaUploadCheck>
            <PanelRow>
                <TextControl
                    label={__('Image Class', 'kotisivu-theme-blocks')}
                    placeholder={__('e.g. section-name__image', 'kotisivu-theme-blocks')}
                    onChange={(content) => setAttributes({ mediaClass: content })}
                    value={mediaClass}
                />
            </PanelRow>
        </div>
    )
}

export default SelectorSidebar
