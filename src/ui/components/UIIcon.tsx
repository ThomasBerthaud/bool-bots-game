/** @jsxImportSource @emotion/react */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { css } from "@emotion/react";

const oncClickableStyle = css`
    cursor: pointer;
`;

type IconProps = {
    icon: IconProp;
    title?: string;
    className?: string;
    disabled?: boolean;
    ariaHidden?: boolean;
    onClick?: (event: React.MouseEvent<SVGSVGElement> | React.KeyboardEvent<SVGSVGElement>) => void;
};

export const UIIcon: React.VFC<IconProps> = ({ icon, title, className, disabled, ariaHidden = false, onClick }) => (
    <FontAwesomeIcon
        icon={icon}
        title={title}
        css={!disabled && !!onClick && oncClickableStyle}
        className={className}
        focusable={!disabled}
        aria-hidden={ariaHidden}
        tabIndex={!disabled ? 0 : undefined}
        onClick={onClick}
        onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
                onClick && onClick(event);
            }
        }}
    />
);
