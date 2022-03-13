import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
    icon: IconProp;
    onClick?: (event: React.MouseEvent<SVGSVGElement> | React.KeyboardEvent<SVGSVGElement>) => void;
} & Omit<FontAwesomeIconProps, "focusable" | "aria-hidden" | "tabIndex" | "onClick" | "onKeyPress">;

export const Icon: React.VFC<IconProps> = ({ onClick, ...props }) => {
    return (
        <FontAwesomeIcon
            {...props}
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
