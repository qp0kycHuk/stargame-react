import React, { ChangeEvent } from 'react'
import { darkTheme, defaultTheme, useTheme } from '../../hooks/use-theme'
import { Icon } from '../../ui/Icon'

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  console.log(theme);

  const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (setTheme) {
      setTheme(event.target.checked ? defaultTheme : darkTheme)
    }
  }

  return (
    <label className="form-field form-checkbox mt-8 theme-toggle">
      <input type="checkbox" className="form-input-checkbox -theme-changer-" checked={theme.key == defaultTheme.key} onChange={checkHandler} />
      <div className="text-body-2 mr-4"> Тема интерфейса</div>
      <div className="form-toggle-target px-1">
        <Icon name='sun' className='color-primary' />
        <Icon name='moon' className='color-text ml-auto fade-80' />
      </div>
    </label>
  )
}