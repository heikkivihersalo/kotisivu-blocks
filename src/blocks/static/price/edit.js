import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    RichText
} from "@wordpress/block-editor";

import Inspector from './components/Inspector';

import './editor.css';

const Edit = (props) => {
    const {
        attributes: {
            suffix,
            prefix,
            content,
            hasSuffix,
            hasPrefix,
        },
        setAttributes,
    } = props;

    const blockProps = useBlockProps({
        className: "ksd-price"
    });

    return (
        <div {...blockProps}>
            <Inspector {...props} />
            {hasPrefix &&
                <RichText
                    className="prefix"
                    value={prefix}
                    onChange={(content) => setAttributes({ prefix: content })}
                    placeholder={__('Hinta: ')}
                />
            }
            <RichText
                className="price"
                value={content}
                onChange={(content) => setAttributes({ content: content })}
                placeholder={__('11')}
            />
            {hasSuffix &&
                <RichText
                    className="suffix"
                    value={suffix}
                    onChange={(content) => setAttributes({ suffix: content })}
                    placeholder={__('€')}
                />
            }
        </div>
    );
}

export default Edit;
