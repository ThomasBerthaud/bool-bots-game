import { UIIcon } from "../ui/components/UIIcon";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { faPlus, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Icon",
    component: UIIcon,
    argTypes: {
        icon: {
            description: "An IconDefinition from FontAwesome",
        },
    },
} as ComponentMeta<typeof UIIcon>;

const Template: ComponentStory<typeof UIIcon> = (args) => <UIIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: faPlus,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    icon: faQuestionCircle,
    title: "This is a title",
};

export const Colored = Template.bind({});
Colored.args = {
    icon: faQuestionCircle,
    color: "#651fff",
};
