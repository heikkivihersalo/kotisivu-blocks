const EditorWrapper = ({children, attributes}) => {
	if (attributes.iconToggle) {
		return (
			<div className="address__icon-wrapper-editor">
				<i className={`address__icon ${attributes.iconClass}`}></i>{children}
			</div>
		);
	} else {
		return (
			<>
				{children}
			</>
		);
	}

}

export default EditorWrapper;
