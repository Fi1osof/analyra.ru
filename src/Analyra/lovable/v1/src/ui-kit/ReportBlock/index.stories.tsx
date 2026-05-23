import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ReportBlock as Component } from './'
import { GraphIcon } from '../icons'
import { DiagramSkeleton } from 'src/Analyra/pages/Report/View'
import { Badge } from '../Badge'
import { Mermaid } from 'src/components/Mermaid'

const meta = {
  title: 'Lovable/V1/ReportBlock',
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

const reportDiagram = `flowchart LR
  H([Главная]) --> F[Каталог функций]
  H --> PR[Тарифы]
  F --> CASE[Кейсы]
  F --> DEMO[Запрос демо]
  PR --> DEMO
  CASE --> DEMO
  DEMO --> FORM[/Форма заявки/]
  FORM --> THX([Спасибо])
  H --> BLOG[Блог]
  BLOG --> SUB[Подписка]
  classDef issue fill:#FEF2F2,stroke:#DC2626,color:#991B1B;
  classDef warn fill:#FFFBEB,stroke:#D97706,color:#92400E;
  class FORM issue
  class PR warn`

export const Default: Story = {
  args: {
    title: 'Карта пользовательских сценариев',
    description: 'Как пользователь движется к целевому действию.',
    icon: <GraphIcon size={18} />,
    loading: false,
    loadingSkeleton: <DiagramSkeleton />,
    meta: <Badge kind="neutral">9 узлов · 11 переходов</Badge>,
    children: <Mermaid source={reportDiagram} />,
  },
}
