import "./Menu.css";
import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export type MenuProps = {
    icon: IconDefinition;
    children: ReactNode;
};

export const Menu: React.VFC<MenuProps> = ({ icon, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return !isExpanded ? (
        <FontAwesomeIcon icon={icon} className="menu-expand-icon fa-2xl" onClick={() => setIsExpanded(true)} />
    ) : (
        <div className="menu">
            <FontAwesomeIcon icon={faXmark} className="menu-close-icon fa-2xl" onClick={() => setIsExpanded(false)} />
            {children}
        </div>
    );
};
