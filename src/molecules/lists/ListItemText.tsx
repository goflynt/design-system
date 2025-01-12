// Libs
import React from "react";

export interface ListItemTextProps {
    /**
     * Additional className
     */
    className?: string;
    /**
     * Primary information
     */
    primary: React.ReactNode;
    /**
     * Secondary information
     */
    secondary?: React.ReactNode;
}

export function ListItemText({ className, primary, secondary, ...otherProps }: ListItemTextProps) {
    const rootClassName = clsx("ds-c-list-item-text", className);

    return (
        <div {...otherProps} className={rootClassName}>
            <div className="ds-c-list-item-text__primary">{primary}</div>
            {secondary && <div className="ds-c-list-item-text__secondary">{secondary}</div>}
        </div>
    );
}
