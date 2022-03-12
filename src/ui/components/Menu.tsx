import "./Menu.css";
import React, { HTMLProps, ReactNode, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeMenu, openMenu } from "../../redux/MenuSlice";
import { Icon } from "./Icon";

export type MenuProps = {
    icon: IconDefinition;
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const Menu: React.VFC<MenuProps> = ({ icon, children, ...props }) => {
    const openMenuId = useAppSelector((state) => state.menu.openMenu);
    const dispatch = useAppDispatch();
    const menuId = useRef(Date.now().toString());

    const isMenuOpen = () => menuId.current === openMenuId;
    const menuClass = isMenuOpen() ? "active menu-container" : "menu-container";

    const toggleMenu = () => {
        dispatch(isMenuOpen() ? closeMenu() : openMenu(menuId.current));
    };

    const content = isMenuOpen() ? (
        <div className="menu">
            <Icon icon={faXmark} className="menu-close-icon fa-2xl" onClick={() => dispatch(closeMenu())} />
            {children}
        </div>
    ) : null;

    return (
        <div {...props} className={[menuClass, props.className].join(" ")}>
            <Icon icon={icon} className="menu-expand-icon fa-2xl" onClick={toggleMenu} />
            {content}
        </div>
    );
};
