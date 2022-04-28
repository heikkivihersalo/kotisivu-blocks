import Img from './components/img';
import Picture from './components/picture';

const Markup = (props) => {
    return (
        props.attributes.mediaMime == "image/svg+xml"
            ? props.attributes.mediaURL && <Img {...props} />
            : props.attributes.mediaURL && <Picture {...props} />
    )
}

export { Markup }
