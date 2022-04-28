import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

import { Markup } from "../../../components/image";
import ColumnContainer from './columnContainer';

const Save = (props) => {

	return (
		<>
			<ColumnContainer {...props} >
				<InnerBlocks.Content />
			</ColumnContainer>
			<Markup {...props} />
		</>
	);
};

export default Save;
