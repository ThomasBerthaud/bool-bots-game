import "./UIMenu.css";
import React, { CSSProperties, HTMLProps, ReactNode, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeMenu, openMenu } from "../../redux/MenuSlice";
import { UIIcon } from "./UIIcon";

export type MenuProps = {
    icon: IconDefinition;
    iconTitle?: string;
    iconColor?: string;
    position?: "left" | "right";
    contentStyle?: React.CSSProperties;
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const UIMenu: React.VFC<MenuProps> = ({
    icon,
    iconColor,
    iconTitle,
    position,
    contentStyle,
    children,
    ...props
}) => {
    const openMenuId = useAppSelector((state) => state.menu.openedMenu);
    const dispatch = useAppDispatch();
    const menuId = useRef(Date.now().toString());

    const isMenuOpen = () => menuId.current === openMenuId;
    const menuClass = isMenuOpen() ? "active menu-container" : "menu-container";

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
        <div className="menu" style={{ ...positionStyle, ...contentStyle }}>
            <UIIcon
                icon={faXmark}
                title="Close"
                className="menu-close-icon fa-2xl"
                onClick={() => dispatch(closeMenu())}
            />
            {children}
        </div>
    ) : null;

    return (
        <div {...props} className={[menuClass, props.className].join(" ")}>
            <UIIcon
                icon={icon}
                color={iconColor}
                title={iconTitle}
                className="menu-expand-icon fa-2xl"
                onClick={toggleMenu}
            />
            {content}
        </div>
    );
};
