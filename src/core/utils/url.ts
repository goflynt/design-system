// Libs
import { omit } from "lodash";
import qs from "qs";

function stripQuestionMark(queryString: string): string {
    return queryString.startsWith("?") ? queryString.slice(1) : queryString;
}

export function setQueryStringValue(key: string, value: string, queryString = ""): string {
    const values = qs.parse(stripQuestionMark(queryString));

    let newValues = { ...values, [key]: value };
    if (value === undefined || value === null) {
        newValues = omit(newValues, key);
    }

    const newQsValue = qs.stringify(newValues);

    return `?${newQsValue}`;
}

export function getQueryStringValue(key: string, queryString: string): string | undefined {
    const values = qs.parse(stripQuestionMark(queryString));

    return values[key] as string;
}
