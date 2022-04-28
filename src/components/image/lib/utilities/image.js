import { __ } from "@wordpress/i18n";
import { Markup } from '../../index';
import {
    Button
} from "@wordpress/components";

/**
 * Get preview image
 * @param {*} props 
 */
export const getImage = (props, openEvent) => {
    /* If no image is selected, return 'upload image' button*/
    if (!props.attributes.mediaURL) {
        return (
            <div className="button-container">
                <Button onClick={openEvent} className="button button-large">
                    {__('Pick a image', 'ksd')}
                </Button>
            </div>
        );
    }

    /* Else render images */
    if (props.attributes.mediaMime == "image/svg+xml") {
        return <img className={props.attributes.mediaClass} src={props.attributes.mediaURL} alt={props.attributes.mediaALT} />
    } else {
        return (<Markup {...props} />)
    }
}

/**
 * Remove attributes from the given element
 * @param {*} props 
 */
export const removeImage = (props) => (event) => {
    props.setAttributes({
        mediaURL: '',
        mediaID: 0,
        mediaALT: '',
        mediaMime: '',
        mediaWidth: '',
        mediaHeight: '',
        sizes: []
    })
}

/**
 * Set image attributes
 * @param {*} media 
 * @param {*} props 
 */
export const setImage = (media, props) => {
    const getImageSizes = (obj) => {
        const sizes = Object.entries(obj).map(
            ([key, value], index) => {
                return {
                    id: index,
                    name: key,
                    url: value.url,
                    width: value.width,
                    height: value.height
                }
            }
        )
        
        /* Sort images from largest to smallest */
        sizes[0].width >= sizes[0].height 
            ? sizes.sort((a, b) => b.width - a.width) /* Image orientation is horizontal */
            : sizes.sort((a, b) => b.height - a.height) /* Image orientation is vertical */

        return sizes
    }

    if (media.mime == "image/svg+xml") {
        props.setAttributes({
            mediaURL: media.url,
            mediaID: media.id,
            mediaALT: media.alt,
            mediaMime: media.mime,
        })
    } else {
        props.setAttributes({
            mediaURL: media.url,
            mediaID: media.id,
            mediaALT: media.alt,
            mediaMime: media.mime,
            mediaWidth: media.width,
            mediaHeight: media.height,
            sizes: getImageSizes(media.sizes),
        });
    }
}