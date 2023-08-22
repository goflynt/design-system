// Libs
import classnames from "classnames";

export interface LoaderIconProps {
    /**
     * Additional className for loader
     */
    className?: string;
}

export function LoaderIcon({ className }: LoaderIconProps) {
    const rootClassName = classnames("ds-c-loader-icon", className);

    return (
        <div className={rootClassName}>
            <div className="ds-c-loader-icon__ball ds-c-loader-icon__a" />
            <div className="ds-c-loader-icon__ball ds-c-loader-icon__b" />
            <div className="ds-c-loader-icon__ball ds-c-loader-icon__c" />
        </div>
    );
}
