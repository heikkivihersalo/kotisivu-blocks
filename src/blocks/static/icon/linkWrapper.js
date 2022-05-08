const LinkWrapper = ({ children, attributes, editor }) => {

	if (attributes.linkToggle) {
		return (
            <>
                {editor
                    ? <a className="icon__link">{children}</a>
                    : <a className="icon__link" href={attributes.linkURL} title={attributes.linkTitle}>{children}</a>
                }
            </>
		);
	} else {
		return (
			<>
				{children}
			</>
		);
	}

}

export default LinkWrapper;
