const InnerBlocksWrapper = (props) => {

    if (props.attributes.backgroundImage) {
        return (
            <>
                <div>
                    {props.children}
                </div>
            </>
        );
    } else {
        return (
            <>
                {props.children}
            </>
        );
    }

}

export default InnerBlocksWrapper;
