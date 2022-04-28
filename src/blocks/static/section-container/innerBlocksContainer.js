const InnerBlocksContainer = (props) => {

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

export default InnerBlocksContainer;
