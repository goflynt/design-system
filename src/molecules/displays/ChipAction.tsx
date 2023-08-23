// Libs

// Components
import { Chip, ChipProps } from "./Chip";

export type ChipActionProps = Omit<ChipProps, "color" | "type">;

export function ChipAction({ className, icon = "close", iconSize = "m", ...otherProps }: ChipActionProps) {
    const chipClassName = clsx("ds-c-chip--action", className);

    return (
        <Chip {...otherProps} className={chipClassName} color={null} icon={icon} iconSize={iconSize} type="action" />
    );
}
