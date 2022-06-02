import Img from './components/img';
import SrcSet from './components/srcset';

const Markup = (props) => {
    /* Force desired image format */
    if (props.srcset) return <SrcSet {...props} />
    if (props.img) return (<Img {...props} />)

    /* Else load default behavior */
    return (
        props.attributes.mediaMime == "image/svg+xml"
            ? props.attributes.mediaURL && <Img {...props} />
            : props.attributes.mediaURL && <SrcSet {...props} />
    )
}

export { Markup }
