// Libs
import React from "react";

/**
 * Wrap child in a span if it is a string
 * @param {React.Element} child Child element
 */
export function wrapLabel(child: React.ReactNode) {
    return typeof child === "string" || typeof child === "number" ? <span>{child}</span> : child;
}
