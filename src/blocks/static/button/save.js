import { __ } from "@wordpress/i18n";
import {
	useBlockProps
} from "@wordpress/block-editor";

import Buttons from './components/Buttons';

const Save = (props) => {
	const {
		attributes: {
			isPrimary,
			isSecondary,
			hasOutline,
		},
	} = props;
	
	const blockProps = useBlockProps.save({
		className: `btn${isPrimary ? ' btn--clr-primary' : ''}${isSecondary ? ' btn--clr-secondary' : ''}${hasOutline ? ' btn--outline' : ''}`
	});

	return (
		<>
			<Buttons props={props} blockProps={blockProps} />
		</>
	);
};

export default Save;
