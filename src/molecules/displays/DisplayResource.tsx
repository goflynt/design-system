// Libs
import React from "react";

// Utils
import { wrapLabel } from "../../core/utils";

// Components
import { IconPosition, IconSize, IconWrapper, IconWrapperProps } from "../icons";

export type DisplayResourceStatus = "info" | "success" | "warning" | "error";

export interface DisplayResourceProps {
    /**
     * Additional className
     */
    className?: string;
    /**
     * If is disabled
     */
    disabled?: boolean;
    /**
     * Add the fullWidth for the DisplayResource child
     */
    fullWidth?: boolean;
    /**
     * Helper text
     */
    helper?: string | React.ReactNode;
    /**
     * Icon
     */
    icon?: IconWrapperProps["icon"];
    /**
     * Position of icon
     */
    iconPosition?: IconPosition;
    /**
     * Additional props for icon
     */
    iconProps?: IconWrapperProps;
    /**
     * Icon size
     */
    iconSize?: IconSize;
    /**
     * Label
     */
    label: string | React.ReactNode;
    /**
     * Additional className for label
     */
    labelClassName?: string;
    /**
     * Optional status
     */
    status?: DisplayResourceStatus;
}

export const DisplayResource = React.forwardRef<HTMLDivElement, DisplayResourceProps>(function DisplayResource(
    {
        className,
        disabled = false,
        helper,
        icon,
        iconPosition = "left",
        iconProps,
        iconSize,
        fullWidth = false,
        label,
        labelClassName: labelClassNameProp,
        status,
        ...otherProps
    },
    ref
) {
    const rootClassName = clsx("ds-c-display-resource", { "ds-c-display-resource--full-width": fullWidth }, className);

    const containerClassName = clsx("ds-c-display-resource__container", {
        "ds-c-display-resource__container--full-width": fullWidth,
    });

    const labelClassName = clsx(
        "ds-c-display-resource__label",
        {
            "ds-c-display-resource__label--full-width": fullWidth,
        },
        labelClassNameProp
    );

    const helperClassName = clsx("ds-c-display-resource__helper", {
        [`ds-u-status--${status}`]: !disabled && status,
    });

    const iconClassName = clsx("ds-c-display-resource__icon", {
        [`ds-u-status--${status}`]: !disabled && status,
    });

    let content = (
        <div className={containerClassName}>
            {label && <div className={labelClassName}>{wrapLabel(label)}</div>}
            {helper && <div className={helperClassName}>{wrapLabel(helper)}</div>}
        </div>
    );

    if (icon) {
        content = (
            <IconWrapper
                icon={icon}
                iconProps={{ ...iconProps, className: iconClassName }}
                position={iconPosition}
                size={iconSize}
                fullWidth={fullWidth}
            >
                {content}
            </IconWrapper>
        );
    }

    return (
        <div {...otherProps} className={rootClassName} disabled={disabled === true} ref={ref}>
            {content}
        </div>
    );
});
