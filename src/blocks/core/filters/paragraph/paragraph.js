import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose"

const removeInspectorOptions = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const {
            name
        } = props;

        if (name !== 'core/paragraph') {
            return <BlockEdit {...props} />;
        }
        return (
            <>
                <BlockEdit {...props} />
            </>
        );
    };
}, 'withInspectorControl');

addFilter(
    'editor.BlockEdit',
    'ksd/paragrahp/inspector-settings',
    removeInspectorOptions,
);