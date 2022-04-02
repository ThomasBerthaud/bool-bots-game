import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { ReactNode } from "react";
import { UIBotPanel } from "../ui/components/UIBotPanel";
import { startingBots } from "../data/startingBots";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import arenaReducer from "../redux/ArenaSlice";

const MockStore = ({ children }: { children: ReactNode }) => {
    return (
        <Provider
            store={configureStore({
                reducer: {
                    arena: arenaReducer,
                },
            })}
        >
            {children}
        </Provider>
    );
};

export default {
    title: "BotPanel",
    component: UIBotPanel,
    decorators: [(story) => <MockStore>{story()}</MockStore>],
} as ComponentMeta<typeof UIBotPanel>;

const Template: ComponentStory<typeof UIBotPanel> = (args) => <UIBotPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
    bot: startingBots[0],
};
