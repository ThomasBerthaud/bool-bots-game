import React, { ReactNode } from "react";
import "./UITooltip.css";

type TooltipProps = {
    direction?: "top" | "right" | "bottom" | "left";
    text: string;
    disabled?: boolean;
    children?: ReactNode;
};

export const UITooltip: React.VFC<TooltipProps> = ({ direction, text, disabled, children }) => {
    const disabledClassName = disabled ? "disabled" : "";
    return (
        <div className={["tooltip", direction ?? "top", disabledClassName].join(" ")}>
            <span className="tooltip-content">{text}</span>
            {children}
        </div>
    );
};
