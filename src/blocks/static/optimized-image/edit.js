import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Selector } from '../../../components/image'

import './editor.css';

const Edit = (props) => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<Selector {...props} srcset />
		</div>
	);
};

export default Edit;
