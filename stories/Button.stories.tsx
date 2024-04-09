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
    type: {
      control: {
        type: 'select',
        options: ['fill', 'underline']
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    type: 'fill',
    children: 'Fill button'
  },
};

export const Underline: Story = {
  args: {
    type: 'underline',
    children: 'Underline button'
  },
};

export const Icon: Story = {
  args: {
    type: 'icon',
    children: 'Icon button'
  },
};