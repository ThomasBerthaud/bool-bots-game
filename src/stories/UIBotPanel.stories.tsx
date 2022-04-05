import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { UIBotPanel } from "../ui/components/UIBotPanel";
import { startingBots } from "../data/startingBots";
import { BotConfigurationEntity } from "../domain/arena/BotConfigurationEntity";

export default {
    title: "BotPanel",
    component: UIBotPanel,
} as ComponentMeta<typeof UIBotPanel>;

const defaultBot = { ...startingBots[0] };
const Template: ComponentStory<typeof UIBotPanel> = (args) => {
    const [bot, setBot] = useState(defaultBot);
    const onUpdate = (config: BotConfigurationEntity) => {
        setBot({ ...bot, ...config });
        args.onUpdate(config); // also call storybook's function
    };
    return <UIBotPanel {...args} bot={bot} onUpdate={onUpdate} />;
};

export const Default = Template.bind({});
Default.args = {};
