import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InspectorControls } from "@wordpress/block-editor";

import {
	PanelBody,
	ToggleControl,
} from "@wordpress/components";

import AddressIcon from "../../components/addressIcon";
import AddressIconMarkdown from "../../components/addressIconMarkdown";
import AddressWrapper from "../../components/addressWrapper";

export const name = 'ksd/address--name';

export const settings = {
    apiVersion: 2,
    title: __('Name', 'kotisivu-theme-blocks'),
    description: __('Name field for Address Block', 'kotisivu-theme-blocks'),
    category: 'design',
    icon: 'columns',
    parent: ['ksd/address'],


    edit: (props) => {
        const {
            attributes: {
                content,
                wrapperToggle
            },
            setAttributes,
        } = props;

        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title={__('Field Settings', 'kotisivu-theme-blocks')} initialOpen={true}>
                        <ToggleControl
                            label={__('Add Wrapper', 'kotisivu-theme-blocks')}
                            checked={wrapperToggle}
                            onChange={() => setAttributes({ wrapperToggle: !wrapperToggle })}
                        />
                    </PanelBody>
                </InspectorControls>

                <AddressWrapper {...props} >
                    <AddressIcon {...props} />
                    <RichText
                        tagName="h3"
                        className="address__content address__content--name"
                        value={content}
                        onChange={(content) => setAttributes({ content: content })}
                        placeholder={__('Name...')}
                    />
                </AddressWrapper>
            </div>
        );
    },


    save: (props) => {

        const {
            attributes: {
                content,
            }
        } = props;

        return (
            <AddressWrapper {...props} >
                <AddressIconMarkdown {...props} />
                <RichText.Content tagName="h3" className="address__content address__content--name" value={content} />
            </AddressWrapper>
        );
    }
}