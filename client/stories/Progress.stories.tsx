import type { Meta, StoryObj } from '@storybook/react';
import Progress from '@/components/Progress';

const ProgressWithContainer = (props: any) => (
  <div style={{ width: '200px'}}>
    <Progress {...props} />
  </div>
)

const meta = {
  title: 'UI/Progress',
  component: ProgressWithContainer as typeof Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};