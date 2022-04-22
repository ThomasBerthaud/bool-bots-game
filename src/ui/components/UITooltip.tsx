import React, { ReactNode } from "react";
import styles from "./UITooltip.module.css";
import classNames from "classnames";

type TooltipProps = {
    direction?: "top" | "right" | "bottom" | "left";
    label: string;
    disabled?: boolean;
    children?: ReactNode;
};

export const UITooltip: React.VFC<TooltipProps> = ({ direction, label, disabled, children }) => (
    <div className={classNames([styles.tooltip, styles[direction ?? "top"], { disabled: disabled }])}>
        <span className={styles.tooltipContent}>{label}</span>
        {children}
    </div>
);
