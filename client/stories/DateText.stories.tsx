import type { Meta, StoryObj } from '@storybook/react';
import DateText from '@/components/DateText';
import { addDays, addMonths } from 'date-fns';

const meta = {
  title: 'UI/DateText',
  component: DateText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    from: {
      control: {
        type: 'date', 
      },
    },
    to: {
      control: {
        type: 'date', 
      },
    }
  },
} satisfies Meta<typeof DateText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    from: new Date(),
    to: addMonths(new Date(), 3),
  },
};