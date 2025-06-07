import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "Shared/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		onClick: { action: "clicked" },
		width: { control: "text" },
		height: { control: "text" },
		primary: { control: "boolean" },
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: "Primary Button",
		primary: true,
		width: "120px",
		height: "40px",
	},
};

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		primary: false,
		width: "120px",
		height: "40px",
	},
};
