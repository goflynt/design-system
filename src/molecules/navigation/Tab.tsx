// Libs
import React, { useCallback } from "react";

// Utils
import { wrapLabel } from "../../core/utils";

// Components
import { Button } from "../buttons";
import { IconPosition, IconSize, IconWrapper, IconWrapperProps, Icons } from "../icons";

export interface TabProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className
     */
    className?: string;
    /**
     * If is disabled
     */
    disabled?: boolean;
    /**
     * Icon
     */
    icon?: Icons;
    /**
     * Additional className for Icon
     */
    iconClassName?: string;
    /**
     * Position for Icon
     */
    iconPosition?: IconPosition;
    /**
     * Additional prop for Icon
     */
    iconProps?: IconWrapperProps;
    /**
     * Size for Icon
     */
    iconSize?: IconSize;
    /**
     * Indicator
     */
    indicator?: React.ReactNode;
    /**
     * Label
     */
    label?: string;
    /**
     * Change handler
     */
    onChange?: (value: number | string, event?: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Click handler
     */
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * If is selected
     */
    selected?: boolean;
    /**
     * Value
     */
    value: number | string;
}

export function Tab({
    children,
    className,
    disabled = false,
    icon,
    iconClassName: iconClassNameProp,
    iconPosition,
    iconProps,
    iconSize,
    indicator,
    label,
    onChange,
    onClick,
    selected,
    value,
    ...otherProps
}: TabProps) {
    const rootClassName = clsx(
        "ds-c-tab",
        {
            "ds-c-tab--disabled": disabled,
            "ds-c-tab--selected": selected,
        },
        className
    );
    const iconClassName = clsx("ds-c-tab__icon", iconClassNameProp);

    const handleClick = useCallback(
        (event) => {
            if (!selected && onChange) {
                onChange(value, event);
            }

            if (onClick) {
                onClick(event);
            }
        },
        [selected, onChange, onClick, value]
    );

    const child = wrapLabel(label ?? children);

    return (
        <Button {...otherProps} className={rootClassName} disabled={disabled} onClick={handleClick} type="tab">
            <span className="ds-c-tab__wrapper">
                <IconWrapper
                    {...iconProps}
                    className={iconClassName}
                    icon={icon}
                    position={iconPosition}
                    size={iconSize}
                >
                    {child}
                </IconWrapper>
            </span>
            {indicator}
        </Button>
    );
}
