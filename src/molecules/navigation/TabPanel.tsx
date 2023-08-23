// Libs

export interface TabPanelProps extends React.PropsWithChildren<unknown> {
    /**
     * Current currentValue
     */
    currentValue: number | string;
    /**
     * Value for Tab
     */
    value: number | string;
}

export function TabPanel({ children, currentValue, value }: TabPanelProps) {
    if (value !== currentValue) {
        return null;
    }

    return children;
}
