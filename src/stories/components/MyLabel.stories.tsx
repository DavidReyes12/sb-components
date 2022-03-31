import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: "UI/MyLabel", // Like directory or rute
    component: MyLabel,
    argTypes: {
        color: { control: "select" },
        size: { control: "select" },
        fontColor: { control: "color" }
    }
} as ComponentMeta<typeof MyLabel>;

// Utilizar el componente
const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args }  />;

// Stories
export const Basic = Template.bind({});
Basic.args = {
    size: "normal",
    allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: "normal",
    allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: "normal",
    color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: "h1",
    fontColor: "#5517ac",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: "h1",
    fontColor: "white",
    backgroundColor: "black"
};