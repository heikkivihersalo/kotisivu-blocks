import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";
import { dispatch, select } from '@wordpress/data';

const ColumnInserterButton = ({clientId}) => {
    const insertNewColumn = () => {
        const innerCount = select("core/editor").getBlocksByClientId(clientId)[0].innerBlocks.length;
        let block = createBlock("ksd/column");
        dispatch("core/block-editor").insertBlock(block, innerCount, clientId);
    }

    return (
        <button
            className="ksd-editor-btn ksd-editor-btn--placeholder"
            onClick={insertNewColumn}>
            {__('Add new column', 'kotisivu-theme-blocks')}
        </button>
    )

}

export default ColumnInserterButton;
