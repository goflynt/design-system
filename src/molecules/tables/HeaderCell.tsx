// Libs
import React from "react";

// Utils
import { useHover } from "../../core/hooks";
import { DivProps, wrapKeyUp, wrapPrevent } from "../../core/utils";

// Components
import { IconWrapper, IconWrapperProps, Icons } from "../icons";

export interface HeaderCellProps extends React.PropsWithChildren<DivProps> {
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
     * Additional props for Icon
     */
    iconProps?: IconWrapperProps;
    /**
     * Click handler
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const HeaderCell = React.memo(function HeaderCell({
    children,
    className,
    disabled = false,
    icon,
    iconClassName,
    iconProps,
    onClick,
    ...otherProps
}: HeaderCellProps) {
    const { hover, ...hoverEvents } = useHover(disabled);

    const rootClassName = clsx(
        { "ds-theme--color": hover },
        "ds-o-actionable",
        "ds-c-header-cell",
        "ds-u-text--subtitle-bold",
        className
    );

    const handleClick = wrapPrevent(onClick);
    const handleKeyUp = wrapKeyUp(handleClick);

    return (
        <div
            {...otherProps}
            className={rootClassName}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            {...hoverEvents}
            role="button"
            tabIndex={onClick ? 0 : -1}
        >
            <IconWrapper className={iconClassName} icon={icon} fullWidth size="m" position="right" {...iconProps}>
                <div className="ds-o-flex-item--1 ds-c-header-cell__content">{children}</div>
            </IconWrapper>
        </div>
    );
});
