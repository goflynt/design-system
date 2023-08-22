// Libs
import classnames from "classnames";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

export interface DroppableDropZoneProps extends React.PropsWithChildren<{}> {
    /**
     * Additional className
     */
    className?: string;
    /**
     * Unique zone identifier
     */
    droppedItemId: string;
}

export function DroppableDropZone({ children, className, droppedItemId }: DroppableDropZoneProps) {
    const rootClassName = classnames(
        "ds-o-box",
        "ds-o-flex",
        "ds-o-flex--center",
        "ds-c-droppable-drop-zone",
        className
    );

    return (
        <Droppable droppableId={droppedItemId}>
            {(provided) => {
                return (
                    <div ref={provided.innerRef} className={rootClassName}>
                        {children} {provided.placeholder}
                    </div>
                );
            }}
        </Droppable>
    );
}
