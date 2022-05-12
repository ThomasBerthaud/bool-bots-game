/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { css } from "@emotion/react";

const style = css`
    position: relative;

    &,
    .tooltip-content::before {
        --caret-size: 0.4rem;
    }

    .tooltip-content {
        z-index: 2;
        display: none;
        position: absolute;
        white-space: nowrap;
        text-align: center;
        background-color: var(--text-primary);
        color: var(--white);
        border-radius: var(--border-radius-sm);
        padding: var(--spacing-sm);
    }

    .tooltip-content::before {
        position: absolute;
        content: "";
        border-color: transparent;
        border-style: solid;
    }

    &:hover .tooltip-content {
        display: inline-block;
    }
    &:hover.disabled .tooltip-content {
        display: none;
    }
`;

const directionStyle = {
    top: css`
        .tooltip-content {
            top: calc(-1 * var(--caret-size) - 2px);
            left: 50%;
            transform: translate(-50%, -100%);
        }
        .tooltip-content::before {
            bottom: calc(-1 * var(--caret-size));
            left: 50%;
            transform: translateX(-50%);
            border-width: var(--caret-size) var(--caret-size) 0;
            border-top-color: var(--text-primary);
        }
    `,
    right: css`
        .tooltip-content {
            right: calc(-1 * var(--caret-size) - 2px);
            top: 50%;
            transform: translate(100%, -50%);
        }
        .tooltip-content::before {
            left: calc(-1 * var(--caret-size));
            top: 50%;
            transform: translateY(-50%);
            border-width: var(--caret-size) var(--caret-size) var(--caret-size) 0;
            border-right-color: var(--text-primary);
        }
    `,
    bottom: css`
        .tooltip-content {
            bottom: calc(-1 * var(--caret-size) - 2px);
            left: 50%;
            transform: translate(-50%, 100%);
        }
        .tooltip-content::before {
            top: calc(-1 * var(--caret-size));
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 var(--caret-size) var(--caret-size);
            border-bottom-color: var(--text-primary);
        }
    `,
    left: css`
        .tooltip-content {
            left: calc(-1 * var(--caret-size) - 2px);
            top: 50%;
            transform: translate(-100%, -50%);
        }
        .tooltip-content::before {
            right: calc(-1 * var(--caret-size));
            top: 50%;
            transform: translateY(-50%);
            border-width: var(--caret-size) 0 var(--caret-size) var(--caret-size);
            border-left-color: var(--text-primary);
        }
    `,
};

const disabledStyle = css`
    &:hover .tooltip-content {
        display: none;
    }
`;

type TooltipProps = {
    direction?: "top" | "right" | "bottom" | "left";
    label: string;
    disabled?: boolean;
    children?: ReactNode;
};

export const UITooltip: React.VFC<TooltipProps> = ({ direction, label, disabled, children }) => (
    <div css={[style, directionStyle[direction ?? "top"], disabled && disabledStyle]}>
        <span className="tooltip-content">{label}</span>
        {children}
    </div>
);
