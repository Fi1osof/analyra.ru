import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AxeReportView as Component } from '../'
import { mockData } from './mockData'

const meta = {
  title: 'Analyra/Reports/AxeReportViewer',
  component: Component,
  argTypes: {},
  args: {
    report: mockData,
  },
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
