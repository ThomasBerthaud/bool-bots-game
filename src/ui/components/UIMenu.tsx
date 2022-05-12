/** @jsxImportSource @emotion/react */
import React, { CSSProperties, HTMLProps, ReactNode, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeMenu, openMenu } from "../../redux/MenuSlice";
import { UIIcon } from "./UIIcon";
import { css, SerializedStyles } from "@emotion/react";

const containerStyle = css`
    position: relative;
`;
const menuStyle = css`
    padding: var(--spacing);
    color: var(--text-primary);
    background: var(--background);
    border: 1px solid var(--background);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 66vw;
    min-height: 100px;
    max-height: calc(100vh - 95px);
    position: absolute;
    top: 40px;
`;
const menuExpandIconStyle = css`
    cursor: pointer;
`;
const menuCloseIconStyle = css`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 10px;
`;

export type MenuProps = {
    icon: IconDefinition;
    iconTitle?: string;
    iconColor?: string;
    activeIconColor?: string;
    position?: "left" | "right";
    contentStyle?: React.CSSProperties;
    css?: SerializedStyles;
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const UIMenu: React.VFC<MenuProps> = ({
    icon,
    iconColor,
    activeIconColor,
    iconTitle,
    position,
    contentStyle,
    children,
    css,
    ...props
}) => {
    const openMenuId = useAppSelector((state) => state.menu.openedMenu);
    const dispatch = useAppDispatch();
    const menuId = useRef(Date.now().toString());

    const isMenuOpen = () => menuId.current === openMenuId;

    let positionStyle: CSSProperties;
    switch (position) {
        case "left":
            positionStyle = { right: 0 };
            break;
        case "right":
        default:
            positionStyle = { left: 0 };
    }

    const toggleMenu = () => {
        dispatch(isMenuOpen() ? closeMenu() : openMenu(menuId.current));
    };

    const content = isMenuOpen() ? (
        <div css={menuStyle} style={{ ...positionStyle, ...contentStyle }}>
            <UIIcon
                icon={faXmark}
                title="Close"
                css={menuCloseIconStyle}
                className="fa-2xl"
                onClick={() => dispatch(closeMenu())}
            />
            {children}
        </div>
    ) : null;

    return (
        <div {...props} css={[containerStyle, css]}>
            <UIIcon
                icon={icon}
                color={isMenuOpen() ? activeIconColor : iconColor}
                title={iconTitle}
                css={menuExpandIconStyle}
                className="fa-2xl"
                onClick={toggleMenu}
            />
            {content}
        </div>
    );
};
