import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
    icon: IconProp;
    color?: string;
    onClick?: (event: React.MouseEvent<SVGSVGElement> | React.KeyboardEvent<SVGSVGElement>) => void;
} & Omit<FontAwesomeIconProps, "focusable" | "aria-hidden" | "tabIndex" | "onClick" | "onKeyPress">;

export const UIIcon: React.VFC<IconProps> = ({ icon, color, onClick, ...props }) => {
    return (
        <FontAwesomeIcon
            {...props}
            icon={icon}
            color={color}
            focusable={props["aria-disabled"]}
            aria-hidden={"false"}
            tabIndex={0}
            onClick={onClick}
            onKeyPress={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    onClick && onClick(event);
                }
            }}
        />
    );
};
