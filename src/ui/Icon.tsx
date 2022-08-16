import React, { ReactElement, ReactNode } from 'react'
import { UiColors, UiElementSizes } from './types';

interface IconProps {
  name: string
  color?: UiColors
  className?: string
}

export function Icon({
  name,
  color,
  className,
  ...props
}: IconProps): ReactElement {


  const iconclassName = [
    'icon',
    color ? 'color-' + color : '',
    className
  ].join(' ')

  return (
    <svg {...props} className={iconclassName}>
      <use xlinkHref={"img/icons.svg#" + name} />
    </svg>
  )
}