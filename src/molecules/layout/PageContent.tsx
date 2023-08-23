// Libs
import PropTypes from "prop-types";
import React from "react";

export const PAGE_CONTENT_TYPES = {
    centered: "centered",
    default: "default",
    flex: "flex",
    withPanel: "withPanel",
};

export function PageContent({
    children,
    className,
    fullHeight = false,
    fullWidth = false,
    type = PAGE_CONTENT_TYPES.default,
}) {
    const rootClassName = clsx(
        "ds-c-page-content",
        {
            "ds-c-page-content--centered": type === PAGE_CONTENT_TYPES.centered,
            "ds-c-page-content--flex": type === PAGE_CONTENT_TYPES.flex,
            "ds-c-page-content--full-height": fullHeight,
            "ds-c-page-content--full-width": fullWidth,
            "ds-c-page-content--with-panel": type === PAGE_CONTENT_TYPES.withPanel,
        },
        className
    );

    if (type === PAGE_CONTENT_TYPES.withPanel) {
        const childrenArray = React.Children.toArray(children);

        return (
            <div className={rootClassName}>
                <div className="ds-c-page-content--with-panel__panel ds-o-paper">{childrenArray[0]}</div>
                <div className="ds-c-page-content--with-panel__detail">{childrenArray.slice(1)}</div>
            </div>
        );
    }

    return <div className={rootClassName}>{children}</div>;
}

PageContent.propTypes = {
    /**
     * Children to display
     */
    children: PropTypes.node,
    /**
     * If is full height
     */
    fullHeight: PropTypes.bool,
    /**
     * Additional className
     */
    className: PropTypes.string,
    /**
     * If is full width
     */
    fullWidth: PropTypes.bool,
    /**
     * Type of page layout
     */
    type: PropTypes.oneOf(Object.values(PAGE_CONTENT_TYPES)),
};
