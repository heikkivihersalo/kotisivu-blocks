import { __ } from "@wordpress/i18n";
import {
    PanelRow,
    ToggleControl
} from "@wordpress/components";


const Lazyload = (props) => {
    const {
        attributes: {
            lazyLoad
        },
        setAttributes
    } = props;

    return (
        <>
            <PanelRow>
            <ToggleControl
                    label={__("Lazy Load", "kotisivu-theme-blocks")}
                    checked={lazyLoad}
                    onChange={() => setAttributes({ lazyLoad: !lazyLoad })}
                />
            </PanelRow>
        </>
    )
}

export default Lazyload
