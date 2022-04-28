import { __ } from "@wordpress/i18n";
import { addModifiers } from '../../../utilities/modifiers';
import {
    PanelRow,
    ToggleControl
} from "@wordpress/components";


const AlignmentReverse = (props) => {
    const {
        attributes: {
            sectionModifiers,
            alignment,
        },
    } = props;

    return (
        <>
            <PanelRow>
                <ToggleControl
                    label={__('Block Alignment', 'kotisivu-theme-blocks')}
                    checked={alignment}
                    onChange={addModifiers(props, "alignment", alignment, "is-reversed", "sectionModifiers", sectionModifiers)}
                />
            </PanelRow>
        </>
    )
}

export { AlignmentReverse }
