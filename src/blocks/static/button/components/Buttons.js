import { __ } from "@wordpress/i18n";
const Buttons = ({ props, blockProps, editor }) => {
    const {
        attributes: {
            linkURL,
            linkTitle,
            linkText,
            hasLinkTarget,
            hasTracking,
            trackingIdentifier
        },
    } = props;

    return (
        <>
            {
                hasLinkTarget
                    ? <a
                        {...blockProps}
                        href={`${editor ? '#' : linkURL}`}
                        target="_blank"
                        title={linkTitle}
                        rel="noreferrer noopener"
                        data-track={`${hasTracking ? "1" : "0"}`}
                        data-identifier={trackingIdentifier}
                    >
                        {linkText}
                    </a>
                    : <a
                        {...blockProps}
                        href={`${editor ? '#' : linkURL}`}
                        title={linkTitle}
                        data-track={`${hasTracking ? "1" : "0"}`}
                        data-identifier={trackingIdentifier}
                    >
                        {linkText}
                    </a>
            }
        </>
    );
};

export default Buttons;
