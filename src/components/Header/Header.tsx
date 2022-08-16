import React from 'react'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'


export function Header() {
  return (
    <header className="header">
      <Button variant='none' icon className="header-burger d-lg-none" data-toggle-link="sidebar">
        <Icon name='menu' className='text-h6' ></Icon>
      </Button>
      <div className="header-info">
        <Icon name='wallet' className='color-primary text-h6 mr-2 ml-auto ml-md-0' ></Icon>
        <div className="text-body-1 text--medium">
          <span className="d-none d-xs-inline">Баланс:</span>
          <span className="text--demibold">743 054, 0 ₽</span>
        </div>

        <Button variant='white-bg' icon className="ml-auto">
          <Icon name='logout' className='text-h6' ></Icon>
        </Button>
      </div>

      <div className="header-filter ml-auto">
        <label className="form-field header-filter-field">
          <div className="form-input-cover">
            <select className="form-input pl-12">
              <option value="">Зал</option>
              <option value="">Зал 1</option>
              <option value="">Зал 2</option>
            </select>
            <div className="form-input-start pl-4 pe-none">
              <Icon name='regroup' className='text-h6 color-primary' ></Icon>
            </div>
            <div className="form-input-end pr-4 pe-none">
              <Icon name='to-right' className='text-small' ></Icon>
            </div>
          </div>
        </label>
        <label className="form-field header-filter-field">
          <div className="form-input-cover">
            <input type="text" className="form-input pl-12" placeholder="Name/ID" />
            <div className="form-input-start pl-4">
              <Icon name='search' className='text-h6 color-primary' ></Icon>
            </div>

          </div>
        </label>
        <Button className="px-5">Поиск</Button>
      </div>
    </header>
  )
}