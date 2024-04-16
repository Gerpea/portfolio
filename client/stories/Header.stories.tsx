import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/Header';

const meta = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    level: { 
      control: {
        type: 'select', 
        options: ['1', '2', '3']
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const One: Story = {
  args: {
    level: '1',
    children: 'Header'
  },
};

export const Two: Story = {
  args: {
    level: '2',
    children: 'Header'
  },
};

export const Three: Story = {
  args: {
    level: '3',
    children: 'Header'
  },
};