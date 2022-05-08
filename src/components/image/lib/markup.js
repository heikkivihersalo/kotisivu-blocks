import Img from './components/img';
import ImgSrcSet from './components/imgSrcSet';

const Markup = (props) => {
    /* Force desired image format */
    if (props.srcset) return <ImgSrcSet {...props} />
    if (props.img) return (<Img {...props} />)

    /* Else load default behavior */
    return (
        props.attributes.mediaMime == "image/svg+xml"
            ? props.attributes.mediaURL && <Img {...props} />
            : props.attributes.mediaURL && <ImgSrcSet {...props} />
    )
}

export { Markup }
