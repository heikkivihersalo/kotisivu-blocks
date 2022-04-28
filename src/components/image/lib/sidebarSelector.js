import { __ } from "@wordpress/i18n";
import {
    PanelBody,
} from "@wordpress/components";

import Preview from './components/inspector/preview';
import LazyLoad from './components/inspector/lazyLoad';
import FullWidth from './components/inspector/fullWidth';
import SelectorSidebar from './components/inspector/selectorSidebar';

const SidebarSelector = (props) => {
    const {
        attributes: {
            mediaURL,
        }
    } = props;

    return (
        <PanelBody
            title={__("Select background image", "kotisivu-theme-blocks")}
            initialOpen={true}
        >
            <SelectorSidebar {...props} />
            {mediaURL && <Preview {...props} />}
            <FullWidth {...props} />
            <LazyLoad {...props} />
        </PanelBody>
    )
}


export { SidebarSelector }
