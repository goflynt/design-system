// Libs
import React from "react";

export interface ButtonContainerProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className
     */
    className?: string;
}

export function ButtonContainer({ children, className }: ButtonContainerProps) {
    const rootClassName = clsx("ds-c-button-container", className);

    return <div className={rootClassName}>{children}</div>;
}
