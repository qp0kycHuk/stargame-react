import React, { ReactElement, ReactNode } from 'react'
import { UiColors, UiElementSizes } from './types';

interface ButtonProps {
    children?: ReactNode
    color?: UiColors
    variant?: 'fill' | 'light' | 'contur' | 'link' | 'white-bg' | 'none'
    size?: UiElementSizes,
    icon?: Boolean,
    fab?: Boolean,
    className?: string
}

export function Button({
    children,
    color = 'primary',
    variant = 'fill',
    size,
    icon,
    fab,
    className,
    ...props
}: ButtonProps): ReactElement {


    const btnClassName = [
        'btn',
        color ? 'btn--' + color : '',
        variant ? 'btn--' + variant : '',
        size ? 'btn-' + size : '',
        icon ? 'btn-icon' : '',
        fab ? 'btn-fab' : '',
        className
    ].join(' ')

    return (
        <button {...props} className={btnClassName}>{children}</button>
    )
}