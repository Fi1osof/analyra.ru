import React from 'react'
import { UrlInputStyled, UrlIconStyled, UrlFieldStyled } from './styles'
import { LinkIcon, ArrowRightIcon } from '../icons'
import { Button } from '../Button'
import type { UrlInputProps } from './types'

export const UrlInput: React.FC<UrlInputProps> = ({
  ctaLabel = 'Проанализировать',
  onCta,
  loading = false,
  placeholder = 'Вставьте ссылку на ваш сайт (https://...)',
  className,
  disabled,
  ...other
}) => {
  return (
    <UrlInputStyled className={className}>
      <UrlIconStyled>
        <LinkIcon size={18} />
      </UrlIconStyled>
      <UrlFieldStyled
        type="url"
        placeholder={placeholder}
        disabled={disabled}
        {...other}
      />
      <Button
        size="md"
        variant="primary"
        loading={loading}
        iconRight={!loading ? <ArrowRightIcon size={14} /> : undefined}
        onClick={onCta}
        disabled={disabled}
      >
        {ctaLabel}
      </Button>
    </UrlInputStyled>
  )
}
