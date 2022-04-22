import styles from "./UIMenu.module.css";
import React, { CSSProperties, ReactNode, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeMenu, openMenu } from "../../redux/MenuSlice";
import { UIIcon } from "./UIIcon";
import classNames from "classnames";
import { onClickOutside } from "../../utils/onClickOutside";
import { store } from "../../redux/store";

export type MenuProps = {
    icon: IconDefinition;
    iconTitle?: string;
    iconColor?: string;
    position?: "left" | "right";
    contentStyle?: React.CSSProperties;
    children: ReactNode;
};

onClickOutside(document, `.${styles.menuContainer}`, () => store.dispatch(closeMenu()));

export const UIMenu: React.VFC<MenuProps> = ({ icon, iconColor, iconTitle, position, contentStyle, children }) => {
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
        <div className={styles.menu} style={{ ...positionStyle, ...contentStyle }}>
            <UIIcon
                icon={faXmark}
                title="Close"
                className={classNames([styles.menuCloseIcon, "fa-2xl"])}
                onClick={() => dispatch(closeMenu())}
            />
            {children}
        </div>
    ) : null;

    return (
        <div className={styles.menuContainer}>
            <UIIcon
                icon={icon}
                color={iconColor}
                title={iconTitle}
                className={classNames([styles.menuExpandIcon, "fa-2xl"])}
                onClick={toggleMenu}
            />
            {content}
        </div>
    );
};
