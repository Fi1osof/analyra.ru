import { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { minWidth } from 'src/theme/helpers'

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

const SkeletonBox = styled.div<{ $width?: string; $height?: string }>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '20px'};
`

const Container = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  padding: 24px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
`

const PanelsGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  gap: 16px;
  flex: 1;

  ${minWidth.md(css`
    grid-template-columns: 1fr 2fr;
  `)}
`

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Toolbar = styled.div`
  margin-bottom: 24px;
`

const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`

const Section = styled.div`
  margin-bottom: 24px;
`

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 18px;
  margin-bottom: 12px;
  background: #fafafa;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`

const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
`

const ScreenshotSkeleton = styled(SkeletonBox)`
  aspect-ratio: 16 / 10;
  border-radius: 12px;
`

const MarkerDots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`

const MarkerDot = styled.div<{ $top: string; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(90deg, #d0d0d0 25%, #c0c0c0 50%, #d0d0d0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`

const ScreenshotWrapper = styled.div`
  position: relative;
  flex: 1;
`

const StatusBanner = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 24px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  border: 1px solid #bae6fd;
`

const StatusTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #0369a1;
  margin: 0 0 16px;
`

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
    transform: translateY(8px);
  }
  10%, 90% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StatusMessage = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #0c4a6e;
  min-height: 28px;
  animation: ${fadeInOut} 3s ease-in-out;
`

const MESSAGES = [
  'Загружаем страницу...',
  'Делаем скриншот...',
  'Запускаем анализ доступности...',
  'Проверяем контрастность цветов...',
  'Анализируем структуру заголовков...',
  'Проверяем альтернативные тексты...',
  'Ищем проблемы с навигацией...',
  'Формируем отчёт...',
]

export const AxeReportSkeleton: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])
  return (
    <Container>
      <StatusBanner>
        <StatusTitle>Анализируем сайт</StatusTitle>
        <StatusMessage key={messageIndex}>
          {MESSAGES[messageIndex]}
        </StatusMessage>
      </StatusBanner>

      <PanelsGrid>
        <LeftPanel>
          <Toolbar>
            <SkeletonBox $width="280px" $height="32px" />
            <FilterRow>
              <SkeletonBox $width="50px" $height="36px" />
              <SkeletonBox $width="70px" $height="36px" />
              <SkeletonBox $width="70px" $height="36px" />
              <SkeletonBox $width="80px" $height="36px" />
              <SkeletonBox $width="60px" $height="36px" />
            </FilterRow>
          </Toolbar>

          <Section>
            <SkeletonBox
              $width="120px"
              $height="24px"
              style={{ marginBottom: 16 }}
            />
            <Card>
              <CardHeader>
                <div style={{ flex: 1 }}>
                  <SkeletonBox
                    $width="100px"
                    $height="20px"
                    style={{ marginBottom: 8 }}
                  />
                  <SkeletonBox $width="200px" $height="16px" />
                </div>
                <BadgeRow>
                  <SkeletonBox
                    $width="60px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                  <SkeletonBox
                    $width="70px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                </BadgeRow>
              </CardHeader>
            </Card>
          </Section>

          <Section>
            <SkeletonBox
              $width="100px"
              $height="24px"
              style={{ marginBottom: 16 }}
            />
            <Card>
              <CardHeader>
                <div style={{ flex: 1 }}>
                  <SkeletonBox
                    $width="120px"
                    $height="20px"
                    style={{ marginBottom: 8 }}
                  />
                  <SkeletonBox $width="250px" $height="16px" />
                </div>
                <BadgeRow>
                  <SkeletonBox
                    $width="55px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                  <SkeletonBox
                    $width="65px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                </BadgeRow>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div style={{ flex: 1 }}>
                  <SkeletonBox
                    $width="90px"
                    $height="20px"
                    style={{ marginBottom: 8 }}
                  />
                  <SkeletonBox $width="180px" $height="16px" />
                </div>
                <BadgeRow>
                  <SkeletonBox
                    $width="55px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                  <SkeletonBox
                    $width="60px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                </BadgeRow>
              </CardHeader>
            </Card>
          </Section>

          <Section>
            <SkeletonBox
              $width="140px"
              $height="24px"
              style={{ marginBottom: 16 }}
            />
            <Card>
              <CardHeader>
                <div style={{ flex: 1 }}>
                  <SkeletonBox
                    $width="110px"
                    $height="20px"
                    style={{ marginBottom: 8 }}
                  />
                  <SkeletonBox $width="220px" $height="16px" />
                </div>
                <BadgeRow>
                  <SkeletonBox
                    $width="70px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                  <SkeletonBox
                    $width="60px"
                    $height="24px"
                    style={{ borderRadius: 999 }}
                  />
                </BadgeRow>
              </CardHeader>
            </Card>
          </Section>
        </LeftPanel>

        <RightPanel>
          <ScreenshotWrapper>
            <ScreenshotSkeleton $height="100%" />
            <MarkerDots>
              <MarkerDot $top="8%" $left="45%" />
              <MarkerDot $top="15%" $left="20%" />
              <MarkerDot $top="25%" $left="70%" />
              <MarkerDot $top="35%" $left="35%" />
              <MarkerDot $top="50%" $left="55%" />
              <MarkerDot $top="60%" $left="15%" />
              <MarkerDot $top="75%" $left="80%" />
            </MarkerDots>
          </ScreenshotWrapper>
        </RightPanel>
      </PanelsGrid>
    </Container>
  )
}
