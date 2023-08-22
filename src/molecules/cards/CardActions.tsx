// Libs
import classnames from "classnames";
import React from "react";

// Utils
import { alterElement } from "../../core/utils";

export interface CardActionsProps extends React.PropsWithChildren<{}> {
    /**
     * If actions are centered
     */
    centered?: boolean;
    /**
     * Additional className for content
     */
    className?: string;
    /**
     *  Additional className for the action elements
     */
    actionsElementClassName?: string;
}

export function CardActions({
    centered = false,
    children,
    className,
    actionsElementClassName: actionsElementClassNameProp,
    ...otherProps
}: CardActionsProps) {
    const actionsClassName = classnames("ds-c-card__actions", { "ds-c-card__actions--centered": centered }, className);
    const actionsElementClassName = classnames("ds-c-card__actions-element", actionsElementClassNameProp);

    const childrenAltered = alterElement(children, {
        className: classnames(actionsElementClassName),
    });

    return (
        <div {...otherProps} className={actionsClassName}>
            {childrenAltered}
        </div>
    );
}
