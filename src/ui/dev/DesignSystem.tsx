import React from "react";
import { Menu } from "../components/Menu";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export const DesignSystem: React.VFC = () => {
    return (
        <Menu icon={faPalette} style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "var(--spacing)" }}>
                <button className="btn">Example button</button>
                <button className="btn btn-lg primary">Example button</button>
                <button className="btn primary">Example button</button>
                <button className="btn primary outline">Example button</button>
                <button className="btn secondary">Example button</button>
                <button className="btn secondary outline">Example button</button>
            </div>
        </Menu>
    );
};
