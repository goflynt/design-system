// Libs
import classnames from "classnames";
import React from "react";

export type FieldContainerOrientation = "horizontal" | "vertical" | "centered";

export interface FieldContainerProps extends React.PropsWithChildren<{}> {
    /**
     * Additional className
     */
    className?: string;
    /**
     * Orientation
     */
    orientation?: FieldContainerOrientation;
}

export function FieldContainer({ children, className, orientation = "vertical" }: FieldContainerProps) {
    const rootClassName = classnames(
        "ds-c-field-container",
        {
            "ds-c-field-container--horizontal": ["horizontal", "centered"].includes(orientation),
            "ds-c-field-container--vertical": orientation === "vertical",
            "ds-c-field-container--centered": orientation === "centered",
        },
        className
    );

    return <div className={rootClassName}>{children}</div>;
}
