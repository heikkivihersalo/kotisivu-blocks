import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl
} from "@wordpress/components";

const Edit = (props) => {
	const {
		attributes: {
			columnClass,
			template,
			featured,
			ribbon,
			ribbonText
		},
		setAttributes,
	} = props;

	const ALLOWED_BLOCKS = [
		"core/heading",
		"core/paragraph",
		"core/shortcode",
		"core/html",
		"core/list",
		"ksd/button",
		"ksd/icon",
		"ksd/pricing-wrapper"
	];


	const setFeatured = () => {

		let classArr = columnClass.split(" ");
		setAttributes({ featured: !featured });

		featured
			? classArr = classArr.filter(item => item != "is-featured")
			: classArr.push("is-featured");

		setAttributes({ columnClass: classArr.join(" ") });

	}


	const setRibbon = () => {

		let classArr = columnClass.split(" ");
		setAttributes({ ribbon: !ribbon });

		ribbon
			? classArr = classArr.filter(item => item != "has-ribbon")
			: classArr.push("has-ribbon");

		setAttributes({ columnClass: classArr.join(" ") });

	}

	const blockProps = useBlockProps({
		className: columnClass
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Column Settings", "kotisivu-theme-blocks")} initialOpen={true}>
					<PanelRow>
						<ToggleControl
							label={__("Featured Block", "kotisivu-theme-blocks")}
							checked={featured}
							onChange={setFeatured}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Ribbon", "kotisivu-theme-blocks")}
							checked={ribbon}
							onChange={setRibbon}
						/>
					</PanelRow>
					<TextControl
						label={__('Ribbon text', 'kotisivu-theme-blocks')}
						placeholder={__('Set ribbon text', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ ribbonText: content })}
						value={ribbonText}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks template={template} allowedBlocks={ALLOWED_BLOCKS} />
				{ribbon && 
					<div className="ribbon ribbon-top-right">
						<span>{ribbonText}</span>
					</div>
				}
			</div>
		</>
	);
};

export default Edit;
