// Libs
import PropTypes from "prop-types";

// Utils
import { alterElement } from "../../core/utils";

export function Layout({ children, className, header, menu }) {
    const rootClassName = clsx("ds-c-layout", className);

    return (
        <div className={rootClassName}>
            {alterElement(menu, { className: "ds-c-layout__menu" })}
            {alterElement(header, { className: "ds-c-layout__header" })}
            <div className="ds-c-layout__page">{children}</div>
        </div>
    );
}

Layout.propTypes = {
    /**
     * Page to display
     */
    children: PropTypes.node,
    /**
     * Header to display
     */
    header: PropTypes.node,
    /**
     * Menu to display
     */
    menu: PropTypes.node,
};
