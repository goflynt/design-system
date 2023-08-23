// Libs
import classnames from "classnames";
import React from "react";

export interface MenuProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className for menu
     */
    className?: string;
}

export function Menu({ children, className, ...otherProps }: MenuProps) {
    const menuClassName = classnames("ds-o-paper", "ds-c-menu", className);

    return (
        <div {...otherProps} className={menuClassName}>
            {children}
        </div>
    );
}
