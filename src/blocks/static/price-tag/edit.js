import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls
} from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
	ToggleControl
} from "@wordpress/components";

const Edit = (props) => {
	const {
		attributes: {
			amount,
			prefix,
			priceBig,
			priceDecimals,
			decimalsToggle,
			currency,
			term
		},
		setAttributes,
	} = props;


	const splitPrice = (content) => {

		setAttributes({
			amount: content,
			priceBig: content.split(/[,.]/)[0],
			priceDecimals: content.split(/[,.]/)[1],
		});
	}

	const blockProps = useBlockProps({
		className: "price-tag"
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Price Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
					<TextControl
						label={__('Prefix', 'kotisivu-theme-blocks')}
						placeholder={__('Add prefix like starting from...', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ prefix: content })}
						value={prefix}
					/>
					<TextControl
						label={__('Amount', 'kotisivu-theme-blocks')}
						placeholder={__('€, $, etc.', 'kotisivu-theme-blocks')}
						onChange={splitPrice}
						value={amount}
					/>
					<TextControl
						label={__('Currency', 'kotisivu-theme-blocks')}
						placeholder={__('€, $, etc.', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ currency: content })}
						value={currency}
					/>
					<TextControl
						label={__('Term', 'kotisivu-theme-blocks')}
						placeholder={__('ex. month, year, piece', 'kotisivu-theme-blocks')}
						onChange={(content) => setAttributes({ term: content })}
						value={term}
					/>
					<ToggleControl
						label={__('Split Decimals', 'kotisivu-theme-blocks')}
						checked={decimalsToggle}
						onChange={() => setAttributes({ decimalsToggle: !decimalsToggle })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{prefix && <div class="price-tag__prefix">{prefix}</div>}
				{decimalsToggle
					? <span className="price-tag__amount">{priceBig},<span class="price-tag__amount--decimals">{priceDecimals}</span></span>
					: <span className="price-tag__amount">{amount}</span>
				}
				{currency && currency}
				{term && <div className="price-tag__term">{term}</div>}
			</div>
		</>
	);
};

export default Edit;
