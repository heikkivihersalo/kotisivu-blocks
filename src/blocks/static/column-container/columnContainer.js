const ColumnContainer = (props) => {

	if (props.attributes.containerToggle) {
		return (
			<>
				{
					props.attributes.containerClass
						? <div className={props.attributes.containerClass}>{props.children}</div>
						: <div>{props.children}</div>
				}
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

export default ColumnContainer;
