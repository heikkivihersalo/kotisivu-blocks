import { __ } from "@wordpress/i18n";

import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    ToggleControl,
    RangeControl
} from "@wordpress/components";

import {
    AlignmentReverse
} from "../../../../components/inspector";

const Inspector = (props) => {
    const {
        attributes: {
            wrapperToggle,
            columnCount,
            columnLock
        },
        setAttributes,
    } = props;

    return (
        <InspectorControls>
            {!columnLock && (
                <PanelBody title={__("Container Settings", "kotisivu-theme-blocks")} initialOpen={true}>
                        <RangeControl
                            label="Grid Columns"
                            value={columnCount}
                            onChange={(value) => setAttributes({ columnCount: value })}
                            min={1}
                            max={6}
                        />
                        <ToggleControl
                            label={__('Add wrapper Container', 'kotisivu-theme-blocks')}
                            checked={wrapperToggle}
                            onChange={() => setAttributes({ wrapperToggle: !wrapperToggle })}
                        />
                        {
                            wrapperToggle &&
                            <AlignmentReverse {...props} />
                        }
                </PanelBody>
            )}
        </InspectorControls>
    )
}

export default Inspector
