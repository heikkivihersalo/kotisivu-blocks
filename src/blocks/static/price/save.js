import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = (props) => {
    const {
        attributes: {
            suffix,
            prefix,
            content,
            hasSuffix,
            hasPrefix
        }
    } = props;

    const blockProps = useBlockProps.save({
        className: "ksd-price"
    });

    return (
        <div {...blockProps}>
            {hasPrefix && <RichText.Content tagName="span" className="prefix" value={prefix} />}
            <RichText.Content tagName="span" className="price" value={content} />
            {hasSuffix && <RichText.Content tagName="span" className="suffix" value={suffix} />}
        </div>
    );
}

export default Save;
