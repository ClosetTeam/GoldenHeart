import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "Shared/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		onClick: { action: "clicked" },
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: "Primary Button",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary",
	},
};

export const Gray: Story = {
	args: {
		label: "Единоразово",
		variant: "gray",
	},
};

export const Yellow: Story = {
	args: {
		label: "Ежемесячно",
		variant: "yellow",
	},
};
