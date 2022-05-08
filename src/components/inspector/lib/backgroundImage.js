import { __ } from "@wordpress/i18n";
import { addModifiers } from '../../../utilities/modifiers';
import {
    PanelRow,
    ToggleControl
} from "@wordpress/components";


const BackgroundImage = (props) => {
    const {
        attributes: {
            sectionModifiers,
            hasBackgroundImage,
        },
    } = props;

    return (
        <>
            <PanelRow>
                <ToggleControl
                    label={__("Use Background Image", "kotisivu-theme-blocks")}
                    checked={hasBackgroundImage}
                    onChange={addModifiers(props, "hasBackgroundImage", hasBackgroundImage, "has-image", "sectionModifiers", sectionModifiers)}
                />
            </PanelRow>
        </>
    )
}

export { BackgroundImage }
