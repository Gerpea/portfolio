import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        options: [true, false]
      }
    },
    required: {
      control: {
        options: [true, false]
      }
    }
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your input',
    name: 'input',
    disabled: false,
    required: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter your input',
    name: 'input',
    disabled: true,
    required: false,
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