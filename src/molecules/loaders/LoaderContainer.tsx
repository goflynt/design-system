// Libs
import classnames from "classnames";
import React from "react";

export interface LoaderContainerProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className
     */
    className?: string;
}

export function LoaderContainer({ children, className, ...otherProps }: LoaderContainerProps) {
    const rootClassName = classnames("ds-c-loader-container", className);

    return (
        <div {...otherProps} className={rootClassName}>
            {children}
        </div>
    );
}
