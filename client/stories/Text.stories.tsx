import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/components/Text';

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text'
  },
};