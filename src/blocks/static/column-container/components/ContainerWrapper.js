const ContainerWrapper = ({children, attributes, classes}) => {
	if (attributes.wrapperToggle) {
		return (
			<>
				{<div className={classes}>{children}</div>}
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

export default ContainerWrapper;
