import { __ } from "@wordpress/i18n"
import Inspector from './components/Inspector'
import Buttons from './components/Buttons'
import { useBlockProps } from "@wordpress/block-editor"

const Edit = (props) => {
	const {
		attributes: {
			isPrimary,
			isSecondary,
			hasOutline,
		},
	} = props;

	const blockProps = useBlockProps({
		className: `btn${isPrimary ? ' btn--clr-primary' : ''}${isSecondary ? ' btn--clr-secondary' : ''}${hasOutline ? ' btn--outline' : ''}`
	});

	return (
		<>
			<Inspector {...props} />
			<Buttons props={props} blockProps={blockProps} editor />
		</>
	);
};

export default Edit;
