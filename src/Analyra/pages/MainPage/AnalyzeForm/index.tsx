/* eslint-disable @typescript-eslint/no-deprecated */
import {
  AIPanel,
  Badge,
  Container,
  Heading1,
  Label,
  MermaidDiagram,
  SparkleIcon,
  UrlInput,
} from 'src/Analyra/lovable/v1/src/ui-kit'
import {
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
} from '../styles'
import { useCallback } from 'react'

const heroDiagram = `flowchart TD
  H([Главная]) --> P[Продукт]
  H --> PR[Цены]
  P --> SIGN[Регистрация]
  PR --> SIGN
  SIGN --> ON[Онбординг]
  ON --> ACT[Целевое действие]`

type AnalyzeFormProps = {
  url: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  submit: () => void
  disabled: boolean
  loading: boolean
}

export const AnalyzeForm: React.FC<AnalyzeFormProps> = ({
  url,
  onChange,
  submit,
  disabled,
  loading,
}) => {
  return (
    <>
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
                // onChange={useCallback(
                //   (e: React.ChangeEvent<HTMLInputElement>) =>
                //     setUrl(e.target.value),
                //   [],
                // )}
                onChange={onChange}
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
                disabled={disabled}
                loading={loading}
              />
              <HeroFootStyled>
                <SparkleIcon size={14} /> Без регистрации. Первый отчёт за пару
                минут.
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
    </>
  )
}
