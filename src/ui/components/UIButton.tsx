import React from "react";

interface UIButtonProps {
    type: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}

export const UIButton: React.VFC<UIButtonProps> = ({ type, size = "medium", label, ...props }) => {
    return (
        <button type="button" className={["btn", type, size].join(" ")} {...props}>
            {label}
        </button>
    );
};
