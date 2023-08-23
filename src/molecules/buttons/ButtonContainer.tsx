// Libs
import classnames from "classnames";
import React from "react";

export interface ButtonContainerProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className
     */
    className?: string;
}

export function ButtonContainer({ children, className }: ButtonContainerProps) {
    const rootClassName = classnames("ds-c-button-container", className);

    return <div className={rootClassName}>{children}</div>;
}
