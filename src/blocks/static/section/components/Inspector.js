import { __ } from "@wordpress/i18n";

import {
    InspectorControls,
} from "@wordpress/block-editor";

import { SidebarSelector } from '../../../../components/image'

import {
    BackgroundImage,
    AlignmentReverse
} from "../../../../components/inspector";

import {
    PanelBody
} from "@wordpress/components";

const Inspector = (props) => {
    const {
        attributes: {
            hasBackgroundImage
        }
    } = props;

    return (
        <InspectorControls>
            <PanelBody title={__("Section Settings", "kotisivu-theme-blocks")} initialOpen={true}>
                <BackgroundImage {...props} />
                <AlignmentReverse {...props} />
            </PanelBody>
            {hasBackgroundImage && <SidebarSelector {...props} />}
        </InspectorControls>
    )
}

export default Inspector
