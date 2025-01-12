// Libs
import React from "react";

export interface ChipContainerProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className for container
     */
    className?: string;
    /**
     * If is condensed
     */
    condensed?: boolean;
}

export function ChipContainer({ children, className, condensed = false, ...otherProps }: ChipContainerProps) {
    const containerClassName = clsx("ds-c-chip-container", { "ds-c-chip-container__condensed": condensed }, className);

    return (
        <div className={containerClassName} {...otherProps}>
            {children}
        </div>
    );
}
