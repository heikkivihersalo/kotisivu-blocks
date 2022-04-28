const AddressWrapper = (props) => {

    if (props.attributes.wrapperToggle) {
        return (
            <div
                className={props.attributes.wrapperClass}
            >
                {props.children}
            </div>
        );
    } else {
        return (
            <>
                {props.children}
            </>
        );
    }

}

export default AddressWrapper;
