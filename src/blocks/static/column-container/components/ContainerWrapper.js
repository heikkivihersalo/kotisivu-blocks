const ContainerWrapper = ({children, attributes, classes}) => {
	console.log(children, classes, attributes);
	
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
