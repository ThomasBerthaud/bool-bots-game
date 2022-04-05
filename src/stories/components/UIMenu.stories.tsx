import { UIMenu } from "../../ui/components/UIMenu";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../../redux/MenuSlice";
import { Provider } from "react-redux";
import { ReactNode } from "react";

const MockStore = ({ children }: { children: ReactNode }) => {
    return (
        <Provider
            store={configureStore({
                reducer: {
                    menu: menuReducer,
                },
            })}
        >
            {children}
        </Provider>
    );
};

export default {
    title: "Components/Menu",
    component: UIMenu,
    parameters: {
        layout: "centered",
    },
    decorators: [(story) => <MockStore>{story()}</MockStore>],
} as ComponentMeta<typeof UIMenu>;

const Template: ComponentStory<typeof UIMenu> = (args) => <UIMenu {...args}>{args.children}</UIMenu>;

export const Left = Template.bind({});
Left.args = {
    icon: faPlusCircle,
    iconColor: "red",
    position: "left",
    children: <p>This is the menu content</p>,
};

export const Right = Template.bind({});
Right.args = {
    ...Left.args,
    position: "right",
};
