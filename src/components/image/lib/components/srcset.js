const SrcSet = (props) => {
    return (
        <img
            loading={`${props.attributes.lazyLoad ? "lazy" : "eager"}`}
            className={props.attributes.mediaClass}
            srcset={props.attributes.mediaSrcSet}
            sizes={props.attributes.mediaSrcSizes}
            src={props.attributes.mediaURL}
            alt={props.attributes.mediaAlt}
            width={`${props.attributes.mediaWidth ? `${props.attributes.mediaWidth}px` : ''}`}
            height={`${props.attributes.mediaHeight ? `${props.attributes.mediaHeight}px` : ''}`}
        />
    )
}

export default SrcSet