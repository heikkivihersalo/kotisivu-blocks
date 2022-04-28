import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {

	const {
		attributes: {
			amount,
			prefix,
			priceBig,
			decimalsToggle,
			priceDecimals,
			currency,
			term
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: "price-tag"
	})

	return (
		<div {...blockProps}>
			{prefix && <div class="price-tag__prefix">{prefix}</div>}
			{decimalsToggle
				? <span className="price-tag__amount">{priceBig},<span class="price-tag__amount--decimals">{priceDecimals}</span></span>
				: <span className="price-tag__amount">{amount}</span>
			}
			{currency && currency}
			{term && <div className="price-tag__term">{term}</div>}
		</div>
	);
};

export default Save;
