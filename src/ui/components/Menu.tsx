import "./Menu.css";
import React, { CSSProperties, HTMLProps, ReactNode, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeMenu, openMenu } from "../../redux/MenuSlice";
import { Icon } from "./Icon";

export type MenuProps = {
    icon: IconDefinition;
    iconTitle?: string;
    position?: "left" | "right";
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const Menu: React.VFC<MenuProps> = ({ icon, iconTitle, position, children, ...props }) => {
    const openMenuId = useAppSelector((state) => state.menu.openedMenu);
    const dispatch = useAppDispatch();
    const menuId = useRef(Date.now().toString());

    const isMenuOpen = () => menuId.current === openMenuId;
    const menuClass = isMenuOpen() ? "active menu-container" : "menu-container";

    let positionStyle: CSSProperties;
    switch (position) {
        case "right":
            positionStyle = { right: 0 };
            break;
        case "left":
        default:
            positionStyle = { left: 0 };
    }

    const toggleMenu = () => {
        dispatch(isMenuOpen() ? closeMenu() : openMenu(menuId.current));
    };

    const content = isMenuOpen() ? (
        <div className="menu" style={positionStyle}>
            <Icon
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
            <Icon icon={icon} title={iconTitle} className="menu-expand-icon fa-2xl" onClick={toggleMenu} />
            {content}
        </div>
    );
};
