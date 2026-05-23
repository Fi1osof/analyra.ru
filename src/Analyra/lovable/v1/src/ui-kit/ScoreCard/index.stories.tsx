import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ScoreCard as Component } from './'

const meta = {
  title: 'Lovable/V1/ScoreCard',
  component: Component,
  argTypes: {
    // variant: {
    //   control: 'select',
    //   options: Object.values(ComponentVariant),
    // },
    // size: {
    //   control: 'select',
    //   options: Object.values(ComponentSize),
    // },
    // disabled: {
    //   control: 'boolean',
    // },
  },
  args: {},
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'UX',
    score: 32,
    trend: 'Trend text',
  },
}
