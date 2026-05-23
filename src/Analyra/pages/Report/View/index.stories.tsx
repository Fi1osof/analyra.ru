import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ReportView as Component } from './'

const meta = {
  title: 'Pages/Report',
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
    loading: false,
    targetUrl: 'https://example.com',
    report: {
      scores: [
        {
          label: 'UX',
          trend: '+4 с прошлой проверки',
          score: 72,
          tone: 'accent',
        },
        {
          label: 'SEO',
          trend: 'Хорошо',
          score: 84,
          tone: 'success',
        },
        {
          label: 'Производительность',
          trend: 'Есть что улучшить',
          score: 58,
          tone: 'warning',
        },
        {
          label: 'Доступность',
          trend: 'Средне',
          score: 66,
          tone: 'warning',
        },
      ],
      aiInsight: {
        title: 'Длинный путь до целевого действия',
        content: 'Пользователю нужно 4–5 переходов, прежде чем он попадает к форме заявки. Это главная причина низкой конверсии на текущем сайте.',
        recommendation: 'Сократите путь до 2 шагов: добавьте CTA на тарифах и в карточках кейсов.',
      },
      uxIssues: [
        {
          title: 'Слишком длинный путь до заявки',
          description: 'От главной до формы — 4 шага. Конкуренты делают это за 2.',
          severity: 'high',
          location: '/ → /pricing → /demo',
        },
        {
          title: 'Скрытая ценность тарифов',
          description: 'Цены показываются только после клика по «Подробнее» — добавьте плашки на главной.',
          severity: 'medium',
          location: '/pricing',
        },
        {
          title: 'Нет объяснения формы',
          description: 'Форма не объясняет, что произойдёт после отправки и за какой срок ответят.',
          severity: 'medium',
          location: '/demo',
        },
      ],
      seo: {
        items: [
          { text: 'Title и meta description заполнены', ok: true },
          { text: 'Корректный H1 на всех страницах', ok: true },
          { text: 'Отсутствует Open Graph на /pricing и /blog/*', ok: false },
          { text: 'Нет sitemap.xml — добавьте для лучшей индексации', ok: false },
          { text: 'robots.txt настроен корректно', ok: true },
        ],
        meta: 'Score 84',
      },
      performance: {
        metrics: [
          { value: '2.8s', label: 'LCP · нужно < 2.5s' },
          { value: '0.12', label: 'CLS · норма' },
          { value: '180ms', label: 'INP · норма' },
        ],
        note: 'Основная причина медленного LCP — невыжатые hero-изображения (3.2 МБ).',
        meta: 'Требует внимания',
      },
      accessibility: {
        items: [
          { text: 'Контраст текста < 4.5:1 на 4 элементах', ok: false },
          { text: 'У 12 изображений отсутствует alt-атрибут', ok: false },
          { text: 'Корректная иерархия заголовков', ok: true },
          { text: 'Невозможно навигировать форму с клавиатуры', ok: false },
          { text: 'aria-label у иконочных кнопок', ok: true },
        ],
        meta: '7 замечаний',
      },
      content: {
        kvs: [
          { key: 'Средняя длина страницы', value: '820 слов' },
          { key: 'Сложность текста', value: 'Средняя' },
          { key: 'Tone of voice', value: 'Технический · нейтральный' },
          { key: 'Дубликаты H1', value: '2 страницы' },
        ],
        aiPanel: {
          title: 'Не хватает социальных доказательств',
          label: 'AI рекомендация',
          content: 'На главной и /pricing отсутствуют отзывы клиентов и логотипы партнёров. Это снижает доверие на ключевых шагах воронки.',
        },
        meta: '12 страниц',
      },
      mobile: {
        items: [
          { text: 'Корректный viewport meta', ok: true },
          { text: 'Кнопки CTA меньше 44×44px в шапке', ok: false },
          { text: 'Горизонтальный скролл на /pricing при ширине 360px', ok: false },
          { text: 'Шрифт не меньше 14px в основном контенте', ok: true },
        ],
        meta: '3 проблемы',
      },
      security: {
        kvs: [
          { key: 'HTTPS', value: 'TLS 1.3 · валидный сертификат' },
          { key: 'HSTS', value: 'включён' },
          { key: 'Content-Security-Policy', value: 'не настроен' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Cookies', value: 'Secure · HttpOnly' },
        ],
        meta: 'В норме',
      },
      tasks: [
        { title: 'Добавить кнопку «Запросить демо» на /pricing', priority: 'high', status: 'todo' },
        { title: 'Сократить форму заявки до 3 полей и описать SLA', priority: 'high', status: 'in_progress' },
        { title: 'Сжать hero-изображения до < 300 КБ', priority: 'high', status: 'todo' },
        { title: 'Поднять контраст текста до 4.5:1 на CTA-кнопках', priority: 'medium', status: 'todo' },
        { title: 'Добавить alt-атрибуты ко всем декоративным иконкам', priority: 'low', status: 'done' },
      ],
    },
  },
}
