import React, { useEffect } from "react";

type UIArenaProps = {
    arenaView: HTMLCanvasElement;
};

export const UIArena: React.VFC<UIArenaProps> = ({ arenaView }) => {
    useEffect(() => {
        document.getElementById("arena")?.replaceChildren(arenaView);
    }, [arenaView]);

    return <div id="arena" style={{ height: "100vh", width: "100vw" }} />;
};
