import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '@/components/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn()
  },
  argTypes: {
    appear: {
      control: {
        type: 'select',
        options: ['fill', 'underline', 'icon']
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    appear: 'fill',
    children: 'Fill button'
  },
};

export const Underline: Story = {
  args: {
    appear: 'underline',
    children: 'Underline button'
  },
};

export const Icon: Story = {
  args: {
    appear: 'icon',
    children: 'Icon button'
  },
};