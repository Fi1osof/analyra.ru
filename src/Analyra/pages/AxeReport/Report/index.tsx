import { useCallback, useEffect, useRef, useState } from 'react'
import {
  AnalyzeWebPageAccesibilityMutation,
  useAnalyzeWebPageAccesibilityMutation,
} from 'src/gql/generated'
import { useSnackbar } from 'src/ui-kit/Snackbar'
import { AxeReportView } from './View'
import { AxeReportSkeleton } from './Skeleton'
import { AxeReportStyled } from './styles'
import { useRouter } from 'next/router'
import { AnalyzeForm } from '../../MainPage/AnalyzeForm'

export const AxeReport: React.FC = () => {
  const { addMessage } = useSnackbar() || {}

  const [report, reportSetter] =
    useState<AnalyzeWebPageAccesibilityMutation['analyzeWebPageAccesibility']>()

  const [analyzeWebPageAccesibility, { loading }] =
    useAnalyzeWebPageAccesibilityMutation()

  const [url, urlSetter] = useState('')

  const urlRef = useRef(url)
  urlRef.current = url

  const onChangeUrl = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      urlSetter(event.currentTarget.value)
    },
    [],
  )

  const onClickSubmit = useCallback(
    async (event?: React.MouseEvent | React.SubmitEvent) => {
      event?.preventDefault()
      event?.stopPropagation()

      reportSetter(undefined)

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)

      try {
        await analyzeWebPageAccesibility({
          variables: {
            input: {
              // useMockData: false,
              url: urlRef.current,
            },
          },
        }).then((r) => {
          if (r.data?.analyzeWebPageAccesibility) {
            reportSetter(r.data?.analyzeWebPageAccesibility)
            urlSetter('')
          }
        })
      } catch (error) {
        addMessage?.(String(error), {
          variant: 'error',
        })
      }
    },
    [addMessage, analyzeWebPageAccesibility],
  )

  const router = useRouter()

  useEffect(() => {
    const url =
      router.query.url && typeof router.query.url === 'string'
        ? router.query.url
        : undefined

    if (url) {
      urlSetter(url)

      setTimeout(() => {
        onClickSubmit()
      }, 100)
    }
  }, [onClickSubmit, router.query.url])

  // const form = (
  //   <AxeReportFormStyled onSubmit={onClickSubmit}>
  //     <TextField
  //       name="url"
  //       value={url}
  //       onChange={onChangeUrl}
  //       disabled={loading}
  //       placeholder="https://yoursite.com"
  //     />

  //     <div>
  //       <Button
  //         disabled={loading || !url}
  //         onClick={onClickSubmit}
  //         type="submit"
  //       >
  //         Run analyzer
  //       </Button>
  //     </div>
  //   </AxeReportFormStyled>
  // )

  const form = (
    <AnalyzeForm
      url={url}
      onChange={onChangeUrl}
      submit={onClickSubmit}
      disabled={loading}
      loading={loading}
    />
  )

  return (
    <AxeReportStyled>
      {report && <AxeReportView report={report} />}

      {loading ? <AxeReportSkeleton /> : form}
    </AxeReportStyled>
  )
}
