// Libs
import clsx from "clsx";

// Components
import { Icon, IconPosition, IconProps, IconSize, IconWrapper, Icons } from "../icons";
import { Tooltip, TooltipProps } from "./Tooltip";

export interface IconTooltipProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className
     */
    className?: string;
    /**
     * Tooltip icon
     */
    icon?: Icons;
    /**
     * Additional Icon className
     */
    iconClassName?: string;
    /**
     * Icon position
     */
    iconPosition?: IconPosition;
    /**
     * Additional iconProps
     */
    iconProps?: IconProps;
    /**
     * Icon size
     */
    iconSize?: IconSize;
    /**
     * Tooltip
     */
    tooltip?: React.ReactNode;
    /**
     * Additional Tooltip className
     */
    tooltipClassName?: string;
    /**
     * Additional Tooltip props
     */
    tooltipProps?: TooltipProps;
    /**
     * Tooltip title
     */
    tooltipTitle?: React.ReactNode;
}

export function IconTooltip({
    children,
    className,
    icon = "question-circle",
    iconClassName = "ds-u-text--secondary",
    iconPosition = "right",
    iconProps,
    iconSize = "s",
    tooltip,
    tooltipClassName,
    tooltipProps,
    tooltipTitle,
    ...otherProps
}: IconTooltipProps) {
    const rootClassName = clsx("ds-c-icon-tooltip", className);

    return (
        <IconWrapper
            {...otherProps}
            className={rootClassName}
            icon={
                <Tooltip {...tooltipProps} className={tooltipClassName} tooltip={tooltip} tooltipTitle={tooltipTitle}>
                    <Icon {...iconProps} className={iconClassName} size={iconSize}>
                        {icon}
                    </Icon>
                </Tooltip>
            }
            size={iconSize}
            position={iconPosition}
        >
            {children}
        </IconWrapper>
    );
}
