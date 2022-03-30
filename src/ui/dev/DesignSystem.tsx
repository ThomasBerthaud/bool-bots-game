import React from "react";
import { Menu } from "../components/Menu";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "../components/Tooltip";

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
                <Tooltip text="top" direction="top">
                    Top tooltip
                </Tooltip>
                <Tooltip text="bottom" direction="bottom">
                    Bottom tooltip
                </Tooltip>
                <Tooltip text="left" direction="left">
                    Left tooltip
                </Tooltip>
                <Tooltip text="right" direction="right">
                    Right tooltip
                </Tooltip>
            </div>
        </Menu>
    );
};
