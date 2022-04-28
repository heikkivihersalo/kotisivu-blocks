import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

const Save = (props) => {
	const { attributes: { columnClass, ribbon, ribbonText } } = props;

	return (
		<div className={columnClass}>
				<InnerBlocks.Content />
				{ribbon && 
					<div className="ribbon ribbon-top-right">
						<span>{ribbonText}</span>
					</div>
				}
		</div>
	);
};

export default Save;
