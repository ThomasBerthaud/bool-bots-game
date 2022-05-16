/** @jsxImportSource @emotion/react */
import React, { ReactNode, useRef } from "react";
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
const leftStyle = css`
    right: 0;
`;
const rightStyle = css`
    left: 0;
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
    contentStyle?: SerializedStyles;
    children: ReactNode;
};

export const UIMenu: React.VFC<MenuProps> = ({
    icon,
    iconColor,
    activeIconColor,
    iconTitle,
    position,
    contentStyle,
    children,
}) => {
    const openMenuId = useAppSelector((state) => state.menu.openedMenu);
    const dispatch = useAppDispatch();
    const menuId = useRef(Date.now().toString());

    const isMenuOpen = () => menuId.current === openMenuId;

    const getPositionStyle = (): SerializedStyles => {
        switch (position) {
            case "left":
                return leftStyle;
            case "right":
            case undefined:
                return rightStyle;
        }
    };

    const iconColorStyle = css`
        color: ${isMenuOpen() ? activeIconColor : iconColor};
        &:hover {
            color: ${activeIconColor};
        }
    `;

    const toggleMenu = () => {
        dispatch(isMenuOpen() ? closeMenu() : openMenu(menuId.current));
    };

    const content = isMenuOpen() ? (
        <div css={[menuStyle, getPositionStyle(), contentStyle]}>
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
        <div css={containerStyle} className="menu-container">
            <UIIcon
                icon={icon}
                title={iconTitle}
                css={[menuExpandIconStyle, iconColorStyle]}
                className="fa-2xl"
                onClick={toggleMenu}
            />
            {content}
        </div>
    );
};
