import Img from './img';

const Picture = (props) => {
    const Source = (props) => {
        const sizes = props.attributes.sizes;

        return (
            sizes.map((size, i) => {
                /* Set image attributes */
                let id = size.id;
                let url = size.url;

                /* If beginning of the list, get largest image (first), else get the previous image */
                let url_2x = i === 0 ? sizes[0].url : sizes[i - 1].url

                /* If end of list, return 0, else get width of next iteration */
                let min_width = sizes.length === (i + 1) ? 0 : sizes[i + 1].width

                return (
                    <source
                        key={id}
                        media={`"(min-width: ${min_width})"`}
                        srcset={`${i === 0 ? `${url}` : `${url_2x} 2x, ${url}`}`}
                        type={props.attributes.mediaMime} />
                )
            })
        )
    }

    return (
        <picture>
            <Source {...props} />
            <Img {...props} />
        </picture>
    )
}

export default Picture
