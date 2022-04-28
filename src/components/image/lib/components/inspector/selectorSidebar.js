import { __ } from "@wordpress/i18n";
import {
    MediaUpload,
    MediaUploadCheck
} from "@wordpress/block-editor";
import { setImage, getImage } from '../../utilities/image';

const SelectorSidebar = (props) => {
    const {
        attributes: {
            mediaID
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
        </div>
    )
}

export default SelectorSidebar
