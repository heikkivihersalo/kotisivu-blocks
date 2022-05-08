import { __ } from "@wordpress/i18n";
import {
    MediaUpload,
    MediaUploadCheck
} from "@wordpress/block-editor";
import { getImage, setImage } from '../../../../../utilities/image';

const SelectorButton = (props) => {
    const {
        attributes: {
            mediaID
        },
    } = props;

    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={(media) => setImage(media, props)}
                allowedTypes="image"
                value={mediaID}
                render={({ open }) => getImage(props, open)}
            />
        </MediaUploadCheck>
    )
}

export default SelectorButton
