// Libs
import clsx from "clsx";

// Components
import { DESIGN_SYSTEM_COMMON_TK, DESIGN_SYSTEM_DISPLAY_TK, StatusEnum, useTranslation } from "../../core";
import { IconWrapper, IconWrapperProps, Icons } from "../icons";

export const DISPLAY_STATUS_ICONS: Record<StatusEnum, Icons> = {
    [StatusEnum.Draft]: "clipboard",
    [StatusEnum.InProgress]: "hourglass",
    [StatusEnum.Paused]: "pause",
    [StatusEnum.Done]: "success",
    [StatusEnum.Failed]: "error",
};

export function isValidStatus(status: StatusEnum): boolean {
    return Object.values(StatusEnum).includes(status);
}

export interface DisplayStatusProps {
    /**
     * Additional className
     */
    className?: string;
    /**
     * Additional className for Icon
     */
    iconClassName?: string;
    /**
     * Additional props for Icon
     */
    iconProps?: IconWrapperProps;
    /**
     * Status
     */
    status: StatusEnum;
    /**
     * Translation key
     */
    translationKey?: string;
}

export function DisplayStatus({
    className,
    iconClassName: iconClassNameProp,
    iconProps,
    status,
    translationKey,
    ...otherProps
}: DisplayStatusProps) {
    const { translate: translateDisplay } = useTranslation(translationKey ?? DESIGN_SYSTEM_DISPLAY_TK);
    const { translate: translateCommon } = useTranslation(translationKey ?? DESIGN_SYSTEM_COMMON_TK);

    const rootClassName = clsx(
        "ds-c-display-status",
        {
            "ds-c-display-status--draft": status === StatusEnum.Draft,
            "ds-c-display-status--inProgress": status === StatusEnum.InProgress,
            "ds-c-display-status--paused": status === StatusEnum.Paused,
            "ds-c-display-status--done": status === StatusEnum.Done,
            "ds-c-display-status--failed": status === StatusEnum.Failed,
        },
        className
    );

    const iconClassName = clsx("ds-c-display-status__icon", iconClassNameProp);

    if (!DISPLAY_STATUS_ICONS[status]) {
        return <span className="ds-u-status--error">{translateDisplay("status.unknown-status")}</span>;
    }

    return (
        <div {...otherProps} className={rootClassName}>
            <IconWrapper {...iconProps} className={iconClassName} icon={DISPLAY_STATUS_ICONS[status]}>
                <span>{translateCommon(`enums.STATUS_ENUM.${status}`)}</span>
            </IconWrapper>
        </div>
    );
}
