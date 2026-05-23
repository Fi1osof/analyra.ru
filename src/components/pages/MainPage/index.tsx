import { useCallback, useState } from 'react'

import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { Page } from '../_App/interfaces'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'

import {
  AIPanel,
  AlertIcon,
  ArrowRightIcon,
  Badge,
  BoxIcon,
  Button,
  Container,
  FeatureCard,
  GraphIcon,
  Heading1,
  Heading2,
  Heading3,
  IssueCard,
  Label,
  LayoutIcon,
  Logo,
  MermaidDiagram,
  Navbar,
  RouteIcon,
  Section,
  Small,
  SparkleIcon,
  StepList,
  TaskIcon,
  TaskItem,
  Text,
  UrlInput,
} from 'src/Analyra/lovable/v1/src/ui-kit'

import {
  ChipsStyled,
  ChipStyled,
  ExampleGridStyled,
  ExampleSideStyled,
  ExampleTabsStyled,
  ExampleTabStyled,
  FeatureGridStyled,
  FinalCtaInnerStyled,
  FinalCtaStyled,
  FooterInnerStyled,
  FooterStyled,
  HeroEyebrowStyled,
  HeroFootStyled,
  HeroGridStyled,
  HeroLeftStyled,
  HeroMockupStyled,
  HeroSectionStyled,
  HeroSubStyled,
  MockBodyStyled,
  MockDotStyled,
  MockHeaderStyled,
  MockTitleStyled,
  PageStyled,
  SectionHeadStyled,
} from './styles'

/* ────────────────────────────────── Data ────────────────────────────────── */

const heroDiagram = `flowchart TD
  H([Главная]) --> P[Продукт]
  H --> PR[Цены]
  P --> SIGN[Регистрация]
  PR --> SIGN
  SIGN --> ON[Онбординг]
  ON --> ACT[Целевое действие]`

const exampleDiagram = `flowchart LR
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
  class PR warn
  class ON warn`

const features = [
  {
    icon: <BoxIcon size={20} />,
    title: 'Понимает продукт',
    description:
      'AI определяет назначение сайта, ценность для пользователя и целевую аудиторию — без брифа и анкет.',
  },
  {
    icon: <RouteIcon size={20} />,
    title: 'Проходит сценарии',
    description:
      'Агент симулирует ключевые пользовательские пути: регистрация, покупка, поиск, заявка.',
  },
  {
    icon: <AlertIcon size={20} />,
    title: 'Находит UX-проблемы',
    description:
      'Замечает сложные переходы, непонятные интерфейсы, слабые CTA и тупиковые сценарии.',
  },
  {
    icon: <GraphIcon size={20} />,
    title: 'Строит диаграммы',
    description:
      'Визуализирует поведение пользователей и логику продукта в виде наглядных схем сценариев.',
  },
  {
    icon: <TaskIcon size={20} />,
    title: 'Формирует задачи',
    description:
      'Каждую находку можно превратить в задачу с приоритетом, статусом и описанием контекста.',
  },
  {
    icon: <LayoutIcon size={20} />,
    title: 'Предлагает макеты',
    description:
      'AI помогает переработать проблемные экраны и предлагает альтернативные варианты интерфейса.',
  },
]

const steps = [
  {
    title: 'Добавьте ссылку',
    description: 'Просто вставьте URL — ничего устанавливать не нужно.',
  },
  {
    title: 'AI изучает продукт',
    description: 'Агент проходит сценарии и собирает контекст.',
  },
  {
    title: 'Получите отчёт',
    description: 'Диаграммы сценариев, проблемы и рекомендации.',
  },
  {
    title: 'Запускайте улучшения',
    description: 'Создавайте задачи и итерируйте интерфейс.',
  },
]

const audience = [
  'SaaS',
  'Интернет-магазины',
  'Лендинги',
  'Стартапы',
  'Корпоративные сайты',
  'Продуктовые команды',
  'UX/UI специалисты',
]

export const MainPage: Page = () => {
  const siteTitle = 'Analyra — AI-анализ сайтов и пользовательских сценариев'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

  const [url, setUrl] = useState('')

  const submit = useCallback(() => {
    // const value = url.trim() || "https://example.com";
    // navigate({ to: "/report", search: { url: value, loading: true } });
  }, [])

  return (
    <>
      {siteTitle && (
        <SeoHeaders
          title={siteTitle}
          description="AI-агент изучает ваш сайт, проходит сценарии пользователей, находит UX-проблемы и предлагает задачи на улучшение продукта."
        />
      )}
      <JsonLd
        data={createWebSite({
          name: siteTitle || '',
          url: siteUrl,
        })}
      />

      <PageStyled>
        <Navbar />

        {/* Hero */}
        <HeroSectionStyled>
          <Container>
            <HeroGridStyled>
              <HeroLeftStyled>
                <HeroEyebrowStyled>
                  <Badge kind="ai">AI-агент для продуктовых команд</Badge>
                </HeroEyebrowStyled>
                <Heading1>
                  AI, который понимает ваш сайт
                  <br />
                  как живой продукт
                </Heading1>
                <HeroSubStyled>
                  Analyra проходит ключевые пользовательские сценарии, находит
                  UX-проблемы и точки роста, и превращает их в конкретные задачи
                  для команды.
                </HeroSubStyled>
                <UrlInput
                  ctaLabel="Проанализировать"
                  value={url}
                  onChange={useCallback(
                    (e: React.ChangeEvent<HTMLInputElement>) =>
                      setUrl(e.target.value),
                    [],
                  )}
                  onCta={submit}
                  onKeyDown={useCallback(
                    (e: React.KeyboardEvent) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()

                        submit()
                      }
                    },
                    [submit],
                  )}
                />
                <HeroFootStyled>
                  <SparkleIcon size={14} /> Без регистрации. Первый отчёт за
                  пару минут.
                </HeroFootStyled>
              </HeroLeftStyled>

              <HeroMockupStyled>
                <MockHeaderStyled>
                  <MockDotStyled />
                  <MockDotStyled />
                  <MockDotStyled />
                  <MockTitleStyled>analyra · live analysis</MockTitleStyled>
                </MockHeaderStyled>
                <MockBodyStyled>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Label tone="muted">Карта сценариев</Label>
                    <Badge kind="success">8 узлов</Badge>
                  </div>
                  <MermaidDiagram source={heroDiagram} />
                  <AIPanel title="Слабый переход к целевому действию">
                    Между онбордингом и целевым действием теряется ~38%
                    пользователей. Рассмотрите упрощение шага «Подтверждение
                    профиля».
                  </AIPanel>
                </MockBodyStyled>
              </HeroMockupStyled>
            </HeroGridStyled>
          </Container>
        </HeroSectionStyled>

        {/* Features */}
        <Section tone="soft" id="features">
          <Container>
            <SectionHeadStyled>
              <Label tone="accent">Что делает агент</Label>
              <Heading2 align="center">
                От первого визита до конкретных задач для команды
              </Heading2>
              <Text tone="muted" align="center">
                Analyra работает как продуктовый аналитик: разбирается в
                продукте, проходит сценарии и формулирует следующее действие.
              </Text>
            </SectionHeadStyled>
            <FeatureGridStyled>
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </FeatureGridStyled>
          </Container>
        </Section>

        {/* How it works */}
        <Section id="how">
          <Container>
            <SectionHeadStyled>
              <Label tone="accent">Как это работает</Label>
              <Heading2 align="center">
                Четыре шага от ссылки до улучшения продукта
              </Heading2>
            </SectionHeadStyled>
            <StepList steps={steps} />
          </Container>
        </Section>

        {/* Example analysis */}
        <Section tone="soft" id="example">
          <Container>
            <SectionHeadStyled>
              <Label tone="accent">Пример анализа</Label>
              <Heading2 align="center">
                Реальный отчёт по сайту: карта сценариев и точки роста
              </Heading2>
              <Text tone="muted" align="center">
                Слева — карта пути пользователя с подсветкой проблемных узлов.
                Справа — найденные проблемы, рекомендации и готовые задачи.
              </Text>
            </SectionHeadStyled>

            <ExampleGridStyled>
              <ExampleSideStyled>
                <ExampleTabsStyled>
                  <ExampleTabStyled $active>Сценарии</ExampleTabStyled>
                  <ExampleTabStyled>Тепловая карта</ExampleTabStyled>
                  <ExampleTabStyled>Структура</ExampleTabStyled>
                </ExampleTabsStyled>
                <MermaidDiagram source={exampleDiagram} />
              </ExampleSideStyled>

              <ExampleSideStyled>
                <AIPanel title="Длинный путь до целевого действия">
                  Пользователь делает 4–5 переходов, прежде чем попадает к форме
                  заявки. Рекомендуется разместить CTA на странице тарифов и в
                  карточках кейсов.
                </AIPanel>

                <IssueCard
                  title="Слишком длинный путь до заявки"
                  description="От главной до формы — 4 шага. Конкуренты делают это за 2."
                  severity="high"
                  location="/ → /pricing → /demo"
                />
                <IssueCard
                  title="Скрытая ценность тарифов"
                  description="Цены показываются только после клика по «Подробнее» — добавьте плашки на главной."
                  severity="medium"
                  location="/pricing"
                />
                <IssueCard
                  title="Нет объяснения формы"
                  description="Форма заявки не объясняет, что произойдёт после отправки и за какой срок ответят."
                  severity="medium"
                  location="/demo"
                />

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    marginTop: 8,
                  }}
                >
                  <Label tone="muted">Задачи на основе находок</Label>
                  <TaskItem
                    title="Добавить кнопку «Запросить демо» на /pricing"
                    priority="high"
                    status="todo"
                  />
                  <TaskItem
                    title="Сократить форму заявки до 3 полей"
                    priority="high"
                    status="in_progress"
                  />
                  <TaskItem
                    title="Описать SLA ответа на странице демо"
                    priority="medium"
                    status="done"
                  />
                </div>
              </ExampleSideStyled>
            </ExampleGridStyled>
          </Container>
        </Section>

        {/* Audience */}
        <Section>
          <Container>
            <SectionHeadStyled>
              <Label tone="accent">Для кого</Label>
              <Heading3 align="center">
                Подходит командам, которые относятся к продукту серьёзно
              </Heading3>
            </SectionHeadStyled>
            <ChipsStyled>
              {audience.map((a) => (
                <ChipStyled key={a}>{a}</ChipStyled>
              ))}
            </ChipsStyled>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section tone="soft">
          <Container>
            <FinalCtaStyled>
              <Badge kind="ai">Готовы начать?</Badge>
              <Heading2 align="center">Покажите AI свой сайт</Heading2>
              <Text tone="muted" align="center">
                Получите карту пользовательских сценариев, список проблем и
                приоритизированные задачи — за несколько минут.
              </Text>
              <FinalCtaInnerStyled>
                <UrlInput
                  ctaLabel="Начать анализ"
                  value={url}
                  onChange={useCallback(
                    (e: React.ChangeEvent<HTMLInputElement>) =>
                      setUrl(e.target.value),
                    [],
                  )}
                  onCta={submit}
                  onKeyDown={useCallback(
                    (e: React.KeyboardEvent) => {
                      if (e.key === 'Enter') {
                        submit()
                      }
                    },
                    [submit],
                  )}
                />
              </FinalCtaInnerStyled>
              <Small tone="muted">
                <Button
                  variant="ghost"
                  size="sm"
                  iconRight={<ArrowRightIcon size={14} />}
                >
                  Посмотреть пример отчёта
                </Button>
              </Small>
            </FinalCtaStyled>
          </Container>
        </Section>

        <FooterStyled>
          <FooterInnerStyled>
            <Logo size={20} />
            <span>
              © {new Date().getFullYear()} Analyra. Все права защищены.
            </span>
          </FooterInnerStyled>
        </FooterStyled>
      </PageStyled>
    </>
  )
}
