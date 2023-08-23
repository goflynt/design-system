// Libs
import React from "react";

export interface ListItemActionsProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className
     */
    className?: string;
}

export function ListItemActions({ children, className }: ListItemActionsProps) {
    const rootClassName = clsx("ds-c-list-item-actions", className);

    return <div className={rootClassName}>{children}</div>;
}
