/* eslint-disable react/jsx-no-bind */
import React from 'react'
import {
  SwitchWrapStyled,
  SwitchTrackStyled,
  SwitchInputStyled,
} from './styles'
import type { SwitchProps } from './types'

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  className,
}) => (
  <SwitchWrapStyled className={className}>
    <SwitchInputStyled
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <SwitchTrackStyled $on={checked} />
    {label && <span>{label}</span>}
  </SwitchWrapStyled>
)
