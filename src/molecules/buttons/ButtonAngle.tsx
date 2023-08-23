// Libs
import classnames from "classnames";

// Components
import { Icon } from "../icons";
import { Button, ButtonProps } from "./Button";

export type ButtonAngleProps = ButtonProps;

export function ButtonAngle({ children, className, icon, iconSize = "m", ...otherProps }: ButtonAngleProps) {
    const buttonClassName = classnames("ds-c-button-angle", className);
    const child = icon ?? children;

    return (
        <Button className={buttonClassName} {...otherProps}>
            <Icon size={iconSize}>{child}</Icon>
        </Button>
    );
}

ButtonAngle.propTypes = {
    ...Button.propTypes,
};
