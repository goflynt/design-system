// Libs
import clsx from "clsx";
import { DivProps } from "../../core/utils";

export interface TabIndicatorProps extends DivProps {
    /**
     * Additional className
     */
    className?: string;
}

export function TabIndicator({ className, ...otherProps }: TabIndicatorProps) {
    const rootClassName = clsx("ds-c-tab-indicator", className);

    return <span {...otherProps} className={rootClassName} />;
}
