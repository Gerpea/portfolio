import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '@/components/TextArea';

const meta = {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    required: {
      control: {
        type: 'boolean',
      }
    }
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your input',
    name: 'input',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter your input',
    name: 'input',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Enter your input',
    name: 'input',
    disabled: false,
    required: true,
  },
  decorators: [(Story) => (<form><Story /></form>)],
};