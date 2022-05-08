import { __ } from "@wordpress/i18n";
import {
	useBlockProps
} from "@wordpress/block-editor";

import { Selector } from '../../../components/image';
import Inspector from './components/Inspector';
import LinkWrapper from './linkWrapper';

import './editor.css';


const Edit = (props) => {
	const { attributes: { iconClass, iconToggle } } = props;
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<Inspector {...props} />
			<LinkWrapper children={props.children} attributes={props.attributes} editor>
				{!iconToggle ? <i className={`icon ${iconClass}`}></i> : <Selector {...props} img />}
			</LinkWrapper>
		</div>
	);
};

export default Edit;
