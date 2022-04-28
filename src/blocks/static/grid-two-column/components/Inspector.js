import { __ } from "@wordpress/i18n";

import {
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
} from "@wordpress/components";

import { AlignmentReverse, BigHeading } from "../../../../components/inspector";

const Inspector = (props) => {
    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Block Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
                    <AlignmentReverse {...props} />
                    <BigHeading {...props} />
                </PanelBody>
            </InspectorControls>
        </>
    )
}

export default Inspector
