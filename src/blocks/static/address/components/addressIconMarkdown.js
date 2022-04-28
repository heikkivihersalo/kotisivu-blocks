const AddressIconMarkdown = (props) => {
    const {
        attributes: {
            iconClass,
            iconToggle
        },
    } = props;

    return (
        iconToggle && <i className={`address__icon ${iconClass}`}></i>
    )
}

export default AddressIconMarkdown;
