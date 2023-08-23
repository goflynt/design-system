// Libs
import clsx from "clsx";
import React from "react";

import { useHover } from "../../core/hooks";
import { DivProps } from "../../core/utils";

export interface CellProps extends React.PropsWithChildren<DivProps> {
    /**
     * Additional className
     */
    className?: string;
    /**
     * If is disabled
     */
    disabled?: boolean;
    /**
     * Formatter to value
     */
    formatter: (child: React.ReactNode) => React.ReactNode;
    /**
     * If is Hovered
     */
    hover?: boolean;
    /**
     * Hover handler
     */
    onHover?: (hover: boolean) => void;
}

export const Cell = React.memo(function Cell({
    children,
    className,
    disabled = false,
    formatter,
    hover: hoverProp,
    onHover,
    ...otherProps
}: CellProps) {
    const { hover, ...hoverEvents } = useHover(disabled, onHover);

    const rootClassName = clsx("ds-c-cell", { "ds-c-cell--hover": hover || hoverProp }, className);

    let child = children;
    if (formatter) {
        child = formatter(child);
    } else if (typeof children === "undefined" || children === null) {
        child = "";
    }

    return (
        <div {...otherProps} {...hoverEvents} className={rootClassName}>
            {child}
        </div>
    );
});
