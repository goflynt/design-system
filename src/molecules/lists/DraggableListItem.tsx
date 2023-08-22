// Libs
import classnames from "classnames";
import { Draggable } from "react-beautiful-dnd";

// Utils
import { alterElement } from "../../core/utils";

// Components
import React from "react";
import { Icon } from "../icons";
import { ListItem } from "./ListItem";

export interface DraggableItem {
    id: string;
}

export interface DraggableListItemProps extends React.PropsWithChildren<{}> {
    /**
     * Additional className
     */
    className?: string;
    /**
     * If has dragHandle
     */
    hasDragHandle?: boolean;
    /**
     * Index in list
     */
    index: number;
    /**
     * Items to render (must have an `id`)
     */
    item: DraggableItem;
    /**
     * Custom ListItem
     */
    ListItemComponent: React.FunctionComponent<any> | React.ComponentClass<any> | string;
}

export function DraggableListItem({
    children,
    className,
    hasDragHandle,
    index,
    item,
    ListItemComponent = ListItem,
    ...listItemProps
}: DraggableListItemProps) {
    const rootClassName = classnames("ds-c-draggable-list-item", className);

    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <ListItemComponent
                    {...provided.draggableProps}
                    {...listItemProps}
                    {...(hasDragHandle ? {} : provided.dragHandleProps)}
                    className={classnames(rootClassName, {
                        "ds-c-draggable-list-item--dragging": snapshot.isDragging,
                        "ds-c-draggable-list-item--drag-handle": hasDragHandle,
                    })}
                    ref={provided.innerRef}
                    snapshot={snapshot}
                >
                    {alterElement(children, {
                        item,
                        dragHandle: !hasDragHandle ? undefined : (
                            <div {...provided.dragHandleProps} className="ds-c-draggable-list-item__handle">
                                <Icon>dragndrop</Icon>
                            </div>
                        ),
                    })}
                </ListItemComponent>
            )}
        </Draggable>
    );
}
