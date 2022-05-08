import { __ } from "@wordpress/i18n";

import { Markup } from '../../../components/image'
import LinkWrapper from './linkWrapper';

const Save = (props) => {

	const { attributes: { iconClass, iconToggle }, } = props;

	return (
		<LinkWrapper children={props.children} attributes={props.attributes}>
			{!iconToggle ? <i className={`icon ${iconClass}`}></i> : <Markup {...props} img />}
		</LinkWrapper>
	);
};

export default Save;
