// Libs
import classnames from "classnames";

export interface StepConnectorProps {
    /**
     * Additional className
     */
    className?: string;
}

export function StepConnector({ className }: StepConnectorProps) {
    const rootClassName = classnames("ds-c-step-connector", className);

    return (
        <div className={rootClassName}>
            <span className="ds-c-step-connector__line" />
        </div>
    );
}
