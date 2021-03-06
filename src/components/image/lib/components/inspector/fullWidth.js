import { __ } from "@wordpress/i18n";
import {
    PanelRow,
    ToggleControl
} from "@wordpress/components";

import { addModifiers } from '../../../../../utilities/modifiers';


const FullWidth = (props) => {
    const {
        attributes: {
            fullWidth,
            mediaClass
        }
    } = props;

    return (
        <>
            <PanelRow>
                <ToggleControl
                    label={__("Full Width", "kotisivu-theme-blocks")}
                    checked={fullWidth}
                    onChange={addModifiers(props, "fullWidth", fullWidth, "is-full-width", "mediaClass", mediaClass)}
                />
            </PanelRow>
        </>
    )
}

export default FullWidth
