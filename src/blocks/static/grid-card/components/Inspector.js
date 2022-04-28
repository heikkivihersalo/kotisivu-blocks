import { __ } from "@wordpress/i18n";
import { Selector } from '../../../../components/image';
import {
    AlignmentButtons,
    BigHeading,
    DropShadow,
    TransparentBackground
} from "../../../../components/inspector";

import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
} from "@wordpress/components";

const Inspector = (props) => {
    return (
        <InspectorControls>
            <Selector {...props} />
            <PanelBody title={__("Card Settings", "kotisivu-theme-blocks")} initialOpen={true}>
                <DropShadow {...props} />
                <TransparentBackground {...props} />
                <BigHeading {...props} />
                <AlignmentButtons {...props} />
            </PanelBody>
        </InspectorControls>
    )
}

export default Inspector
