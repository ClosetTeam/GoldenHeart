import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

// Определяем литеральный тип для вариантов кнопки
type ButtonVariant = "primary" | "secondary" | "gray" | "yellow";

const meta: Meta<typeof Button> = {
	title: "Shared/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		onClick: { action: "clicked" },
		width: { control: "text" },
		height: { control: "text" },
		variant: {
			control: "select",
			options: ["primary", "secondary", "gray"] as ButtonVariant[],
			description: "Вариант стиля кнопки",
		},
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: "Primary Button",
		variant: "primary",
		width: "120px",
		height: "40px",
	},
};

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary",
		width: "120px",
		height: "40px",
	},
};

export const Gray: Story = {
	args: {
		label: "Единоразово",
		variant: "gray",
		width: "120px",
		height: "40px",
	},
};

export const Yellow: Story = {
	args: {
		label: "Ежемесячно",
		variant: "yellow",
		width: "120px",
		height: "40px",
	},
};
