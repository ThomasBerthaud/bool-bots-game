import React, { ReactNode } from "react";
import "./UITooltip.css";

type TooltipProps = {
    direction?: "top" | "right" | "bottom" | "left";
    label: string;
    disabled?: boolean;
    children?: ReactNode;
};

export const UITooltip: React.VFC<TooltipProps> = ({ direction, label, disabled, children }) => {
    const disabledClassName = disabled ? "disabled" : "";
    return (
        <div className={["tooltip", direction ?? "top", disabledClassName].join(" ")}>
            <span className="tooltip-content">{label}</span>
            {children}
        </div>
    );
};
