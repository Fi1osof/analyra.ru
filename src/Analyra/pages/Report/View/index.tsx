import styled from 'styled-components'

import {
  Navbar,
  Container,
  Heading2,
  Text,
  Label,
  Small,
  Badge,
  Button,
  // Switch,
  ReportBlock,
  ScoreCard,
  Skeleton,
  IssueCard,
  TaskItem,
  AIPanel,
  MermaidDiagram,
  GraphIcon,
  AlertIcon,
  GaugeIcon,
  SearchIcon,
  EyeIcon,
  FileTextIcon,
  ShieldIcon,
  MobileIcon,
  SparkleIcon,
  TaskIcon,
  ChevronLeftIcon,
  LinkIcon,
} from '../../../lovable/v1/src/ui-kit'
import Link from 'next/link'

/* ───────── Layout ───────── */

const PageStyled = styled.div`
  background: ${({ theme }) => theme.color.surface};
  min-height: 100vh;
`

const TopBarStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding: 28px 0 24px;
`

const TopRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`

const BackLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.muted};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`

// const StorybookBarStyled = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 14px;
//   padding: 6px 14px;
//   border-radius: ${({ theme }) => theme.radius.pill};
//   background: ${({ theme }) => theme.color.surface2};
//   border: 1px dashed ${({ theme }) => theme.color.borderStrong};
//   font-size: 12px;
//   color: ${({ theme }) => theme.color.muted};
// `

const UrlBarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`

const UrlPillStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.text};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ContentStyled = styled.div`
  padding: 32px 0 80px;
`

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const span = (n: number) => styled.div`
  grid-column: span ${n};
  @media (max-width: 980px) {
    grid-column: 1 / -1;
  }
`

const Col12 = span(12)
const Col8 = span(8)
const Col6 = span(6)
const Col4 = span(4)

const ScoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StackStyled = styled.div<{ $gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap = 12 }) => `${$gap}px`};
`

const InlineMetricsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const MetricStyled = styled.div`
  padding: 14px 16px;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const MetricValueStyled = styled.span`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`

const MetricLabelStyled = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
`

const TitleRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`

const TitleColStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const ChecklistStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ChecklistItemStyled = styled.li<{ $ok: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 13.5px;
  color: ${({ theme }) => theme.color.textSoft};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme, $ok }) =>
      $ok ? theme.color.success : theme.color.warning};
    flex-shrink: 0;
  }
`

const KVStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 16px;
  font-size: 13.5px;

  dt {
    color: ${({ theme }) => theme.color.muted};
  }
  dd {
    margin: 0;
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.weight.medium};
    text-align: right;
  }
`

/* ───────── Data ───────── */

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

/* ───────── Loading skeletons ───────── */

const DiagramSkeleton = () => <Skeleton height={280} radius={12} />

const IssuesSkeleton = () => (
  <StackStyled>
    {[0, 1, 2].map((i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}
        >
          <Skeleton height={14} width="60%" />
          <Skeleton height={20} width={70} radius={999} />
        </div>
        <Skeleton height={12} />
        <Skeleton height={12} width="40%" />
      </div>
    ))}
  </StackStyled>
)

const TasksSkeleton = () => (
  <StackStyled>
    {[0, 1, 2, 3].map((i) => (
      <Skeleton key={i} height={48} radius={10} />
    ))}
  </StackStyled>
)

const ScoreSkeleton = () => (
  <ScoreGridStyled>
    {[0, 1, 2, 3].map((i) => (
      <Skeleton key={i} height={88} radius={10} />
    ))}
  </ScoreGridStyled>
)

const MetricsSkeleton = () => (
  <InlineMetricsStyled>
    {[0, 1, 2].map((i) => (
      <Skeleton key={i} height={68} radius={10} />
    ))}
  </InlineMetricsStyled>
)

/* ───────── Page ───────── */

type ReportPageProps = {
  targetUrl: string
  loading: boolean
}

export const ReportView: React.FC<ReportPageProps> = ({
  loading,
  targetUrl,
}) => {
  return (
    <PageStyled>
      <Navbar />

      <TopBarStyled>
        <Container>
          <TopRowStyled>
            <BackLinkStyled href="/">
              <ChevronLeftIcon size={14} />
              На главную
            </BackLinkStyled>
            {/* <StorybookBarStyled>
              <span>Storybook</span>
              <Switch
                checked={loading}
                onChange={toggleLoading}
                label={loading ? 'loading: true' : 'loading: false'}
              />
            </StorybookBarStyled> */}
          </TopRowStyled>

          <TitleRowStyled>
            <TitleColStyled>
              <Label tone="accent">Отчёт по сайту</Label>
              <Heading2>
                {loading ? 'AI изучает ваш продукт…' : 'Анализ готов'}
              </Heading2>
              <UrlBarStyled>
                <UrlPillStyled>
                  <LinkIcon size={14} />
                  {targetUrl}
                </UrlPillStyled>
                {loading ? (
                  <Badge kind="ai">В процессе</Badge>
                ) : (
                  <Badge kind="success">Готово · 11 находок</Badge>
                )}
              </UrlBarStyled>
            </TitleColStyled>
            <div style={{ display: 'flex', gap: 10 }}>
              <Button variant="outline" size="md">
                Экспорт PDF
              </Button>
              <Button
                variant="primary"
                size="md"
                iconLeft={<TaskIcon size={14} />}
              >
                Создать задачи
              </Button>
            </div>
          </TitleRowStyled>
        </Container>
      </TopBarStyled>

      <ContentStyled>
        <Container>
          <GridStyled>
            {/* Overall score */}
            <Col12>
              <ReportBlock
                title="Общая оценка"
                description="Сводный health-score вашего продукта по ключевым направлениям."
                icon={<SparkleIcon size={18} />}
                accent="ai"
                loading={loading}
                loadingSkeleton={<ScoreSkeleton />}
                meta={<Badge kind="ai">AI score</Badge>}
              >
                <ScoreGridStyled>
                  <ScoreCard
                    label="UX"
                    score={72}
                    trend="+4 с прошлой проверки"
                    tone="accent"
                  />
                  <ScoreCard
                    label="SEO"
                    score={84}
                    trend="Хорошо"
                    tone="success"
                  />
                  <ScoreCard
                    label="Производительность"
                    score={58}
                    trend="Есть что улучшить"
                    tone="warning"
                  />
                  <ScoreCard
                    label="Доступность"
                    score={66}
                    trend="Средне"
                    tone="warning"
                  />
                </ScoreGridStyled>
              </ReportBlock>
            </Col12>

            {/* User flow diagram */}
            <Col8>
              <ReportBlock
                title="Карта пользовательских сценариев"
                description="Как пользователь движется к целевому действию."
                icon={<GraphIcon size={18} />}
                loading={loading}
                loadingSkeleton={<DiagramSkeleton />}
                meta={<Badge kind="neutral">9 узлов · 11 переходов</Badge>}
              >
                <MermaidDiagram source={reportDiagram} />
              </ReportBlock>
            </Col8>

            {/* AI insight */}
            <Col4>
              <ReportBlock
                title="Главный вывод AI"
                icon={<SparkleIcon size={18} />}
                accent="ai"
                loading={loading}
                loadingSkeleton={
                  <StackStyled>
                    <Skeleton height={14} />
                    <Skeleton height={14} width="80%" />
                    <Skeleton height={14} width="60%" />
                    <Skeleton height={40} radius={8} />
                  </StackStyled>
                }
              >
                <AIPanel title="Длинный путь до целевого действия">
                  Пользователю нужно 4–5 переходов, прежде чем он попадает к
                  форме заявки. Это главная причина низкой конверсии на текущем
                  сайте.
                </AIPanel>
                <Text tone="muted">
                  Сократите путь до 2 шагов: добавьте CTA на тарифах и в
                  карточках кейсов.
                </Text>
              </ReportBlock>
            </Col4>

            {/* UX issues */}
            <Col6>
              <ReportBlock
                title="UX-проблемы"
                description="Препятствия в пользовательских сценариях."
                icon={<AlertIcon size={18} />}
                accent="danger"
                loading={loading}
                loadingSkeleton={<IssuesSkeleton />}
                meta={<Badge kind="danger">3 критичных</Badge>}
              >
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
                  description="Форма не объясняет, что произойдёт после отправки и за какой срок ответят."
                  severity="medium"
                  location="/demo"
                />
              </ReportBlock>
            </Col6>

            {/* SEO */}
            <Col6>
              <ReportBlock
                title="SEO"
                description="Базовая поисковая оптимизация и индексация."
                icon={<SearchIcon size={18} />}
                accent="info"
                loading={loading}
                meta={<Badge kind="success">Score 84</Badge>}
              >
                <ChecklistStyled>
                  <ChecklistItemStyled $ok>
                    Title и meta description заполнены
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok>
                    Корректный H1 на всех страницах
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok={false}>
                    Отсутствует Open Graph на /pricing и /blog/*
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok={false}>
                    Нет sitemap.xml — добавьте для лучшей индексации
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok>
                    robots.txt настроен корректно
                  </ChecklistItemStyled>
                </ChecklistStyled>
              </ReportBlock>
            </Col6>

            {/* Performance */}
            <Col6>
              <ReportBlock
                title="Производительность"
                description="Скорость загрузки и Core Web Vitals."
                icon={<GaugeIcon size={18} />}
                accent="warning"
                loading={loading}
                loadingSkeleton={<MetricsSkeleton />}
                meta={<Badge kind="warning">Требует внимания</Badge>}
              >
                <InlineMetricsStyled>
                  <MetricStyled>
                    <MetricValueStyled>2.8s</MetricValueStyled>
                    <MetricLabelStyled>LCP · нужно &lt; 2.5s</MetricLabelStyled>
                  </MetricStyled>
                  <MetricStyled>
                    <MetricValueStyled>0.12</MetricValueStyled>
                    <MetricLabelStyled>CLS · норма</MetricLabelStyled>
                  </MetricStyled>
                  <MetricStyled>
                    <MetricValueStyled>180ms</MetricValueStyled>
                    <MetricLabelStyled>INP · норма</MetricLabelStyled>
                  </MetricStyled>
                </InlineMetricsStyled>
                <Small tone="muted">
                  Основная причина медленного LCP — невыжатые hero-изображения
                  (3.2 МБ).
                </Small>
              </ReportBlock>
            </Col6>

            {/* Accessibility */}
            <Col6>
              <ReportBlock
                title="Доступность"
                description="Соответствие WCAG 2.1 AA."
                icon={<EyeIcon size={18} />}
                accent="info"
                loading={loading}
                meta={<Badge kind="info">7 замечаний</Badge>}
              >
                <ChecklistStyled>
                  <ChecklistItemStyled $ok={false}>
                    Контраст текста &lt; 4.5:1 на 4 элементах
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok={false}>
                    У 12 изображений отсутствует alt-атрибут
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok>
                    Корректная иерархия заголовков
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok={false}>
                    Невозможно навигировать форму с клавиатуры
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok>
                    aria-label у иконочных кнопок
                  </ChecklistItemStyled>
                </ChecklistStyled>
              </ReportBlock>
            </Col6>

            {/* Content quality */}
            <Col6>
              <ReportBlock
                title="Контент"
                description="Качество и ясность текстов."
                icon={<FileTextIcon size={18} />}
                loading={loading}
                meta={<Badge kind="neutral">12 страниц</Badge>}
              >
                <KVStyled as="dl">
                  <dt>Средняя длина страницы</dt>
                  <dd>820 слов</dd>
                  <dt>Сложность текста</dt>
                  <dd>Средняя</dd>
                  <dt>Tone of voice</dt>
                  <dd>Технический · нейтральный</dd>
                  <dt>Дубликаты H1</dt>
                  <dd>2 страницы</dd>
                </KVStyled>
                <AIPanel
                  title="Не хватает социальных доказательств"
                  label="AI рекомендация"
                >
                  На главной и /pricing отсутствуют отзывы клиентов и логотипы
                  партнёров. Это снижает доверие на ключевых шагах воронки.
                </AIPanel>
              </ReportBlock>
            </Col6>

            {/* Mobile */}
            <Col6>
              <ReportBlock
                title="Мобильная версия"
                description="Адаптивность и удобство на смартфонах."
                icon={<MobileIcon size={18} />}
                loading={loading}
                meta={<Badge kind="warning">3 проблемы</Badge>}
              >
                <ChecklistStyled>
                  <ChecklistItemStyled $ok>
                    Корректный viewport meta
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok={false}>
                    Кнопки CTA меньше 44×44px в шапке
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok={false}>
                    Горизонтальный скролл на /pricing при ширине 360px
                  </ChecklistItemStyled>
                  <ChecklistItemStyled $ok>
                    Шрифт не меньше 14px в основном контенте
                  </ChecklistItemStyled>
                </ChecklistStyled>
              </ReportBlock>
            </Col6>

            {/* Security */}
            <Col6>
              <ReportBlock
                title="Технические проверки"
                description="HTTPS, заголовки безопасности, базовая настройка."
                icon={<ShieldIcon size={18} />}
                accent="success"
                loading={loading}
                meta={<Badge kind="success">В норме</Badge>}
              >
                <KVStyled as="dl">
                  <dt>HTTPS</dt>
                  <dd>TLS 1.3 · валидный сертификат</dd>
                  <dt>HSTS</dt>
                  <dd>включён</dd>
                  <dt>Content-Security-Policy</dt>
                  <dd>не настроен</dd>
                  <dt>X-Frame-Options</dt>
                  <dd>SAMEORIGIN</dd>
                  <dt>Cookies</dt>
                  <dd>Secure · HttpOnly</dd>
                </KVStyled>
              </ReportBlock>
            </Col6>

            {/* Tasks */}
            <Col12>
              <ReportBlock
                title="Готовые задачи для команды"
                description="Каждую находку можно сразу превратить в задачу с приоритетом."
                icon={<TaskIcon size={18} />}
                loading={loading}
                loadingSkeleton={<TasksSkeleton />}
                meta={
                  <Button variant="outline" size="sm">
                    Экспортировать в Jira
                  </Button>
                }
              >
                <TaskItem
                  title="Добавить кнопку «Запросить демо» на /pricing"
                  priority="high"
                  status="todo"
                />
                <TaskItem
                  title="Сократить форму заявки до 3 полей и описать SLA"
                  priority="high"
                  status="in_progress"
                />
                <TaskItem
                  title="Сжать hero-изображения до &lt; 300 КБ"
                  priority="high"
                  status="todo"
                />
                <TaskItem
                  title="Поднять контраст текста до 4.5:1 на CTA-кнопках"
                  priority="medium"
                  status="todo"
                />
                <TaskItem
                  title="Добавить alt-атрибуты ко всем декоративным иконкам"
                  priority="low"
                  status="done"
                />
              </ReportBlock>
            </Col12>
          </GridStyled>
        </Container>
      </ContentStyled>
    </PageStyled>
  )
}
