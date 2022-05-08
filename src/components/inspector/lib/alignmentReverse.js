import { __ } from "@wordpress/i18n";
import { addModifiers } from '../../../utilities/modifiers';
import {
    PanelRow,
    ToggleControl
} from "@wordpress/components";


const AlignmentReverse = (props) => {
    const {
        attributes: {
            modifiers,
            alignmentReverse,
        },
    } = props;

    return (
        <>
            <PanelRow>
                <ToggleControl
                    label={__('Reverse Block Alignment', 'kotisivu-theme-blocks')}
                    checked={alignmentReverse}
                    onChange={addModifiers(props, "alignmentReverse", alignmentReverse, "is-reversed", "modifiers", modifiers)}
                />
            </PanelRow>
        </>
    )
}

export { AlignmentReverse }
