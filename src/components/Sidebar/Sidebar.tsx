import React from 'react'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'


export function Sidebar() {
  return (<>
    <aside className="sidebar -menu-" id="sidebar">
      <div className="sidebar-inner">
        <div className="flex flex-align-center d-lg-none mb-5">
          <Icon name='wallet' className='color-primary text-h6 mr-2' />
          <div className="text-body-1 text--medium">Баланс: <span className="text--demibold">743 054, 0 ₽</span></div>

          <Button variant='white-bg' icon className="ml-auto">
            <Icon name='logout' className='text-h6' />
          </Button>
        </div>
        <Button className="w-100 mb-10">Пополнить баланс</Button>

        <div className="sidebar-info">
          <div className="sidebar-info__item">
            <Icon name='user' className='color-primary text-h4 mr-2' />
            <div className="text-body-1 text--medium">Логин: <span className="text--demibold">martlet</span></div>
          </div>
          <div className="sidebar-info__item">
            <Icon name='message' className='color-primary text-h4 mr-2' />
            <div className="text-body-1 text--medium">Новых сообщений: <span className="text--demibold">54</span></div>
          </div>
          <div className="sidebar-info__item">
            <Icon name='shield' className='color-primary text-h4 mr-2' />
            <div className="text-body-1 text--medium">ID: <span className="text--demibold">12922</span></div>
          </div>
          <div className="sidebar-info__item">
            <Icon name='check-round' className='color-primary text-h4 mr-2' />
            <div className="text-body-1 text--medium">Status: <span className="text--demibold">Коллектор</span></div>
          </div>
        </div>

        <div className="sidebar-filter my-10">
          <label className="form-field">
            <div className="text-body-2 text--medium mb-2">Перейти</div>
            <div className="form-input-cover">
              <select className="form-input pl-12">
                <option value="">Зал</option>
                <option value="">Зал 1</option>
                <option value="">Зал 2</option>
              </select>
              <div className="form-input-start pl-4 pe-none">
                <Icon name='regroup' className='text-h6 color-primary' />
              </div>
              <div className="form-input-end pr-4 pe-none">
                <Icon name='to-right' className='text-small' />
              </div>
            </div>
          </label>
          <label className="form-field mt-4">
            <div className="text-body-2 text--medium mb-2">Поиск</div>
            <div className="form-input-cover">
              <input type="text" className="form-input pl-12" placeholder="Name/ID" />
              <div className="form-input-start pl-4 pe-none">
                <Icon name='search' className='text-h6 color-primary' />
              </div>

            </div>
          </label>
        </div>

        <div className="sidebar-nav">
          <div className="text-h6 mb-5">Пользователи</div>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Суперагенты</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Дилеры</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Агенты</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Инженеры</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Операторы залов</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Компьютеры в залах</span>
          </button>

          <div className="text-h6 mb-5 mt-10">Залы</div>
          <button className="btn btn-large btn--primary btn--fill text--regular w-100 mb-2 px-4 brs-3">
            <Icon name='circle' className='text-h6 mr-2' />
            <span className="mr-auto">Текущие залы</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Удаленные залы</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Детализация по сменам</span>
          </button>
          <button className="btn btn--primary btn--link text--regular color-text w-100 py-2 link-hover">
            <span className="mr-auto">Поиск зала по IP</span>
          </button>

        </div>

        <ThemeToggler />

        <label className="language-select form-field mt-5">
          <div className="form-input-cover">
            <select className="form-input pl-13">
              <option value="">Русский</option>
              <option value="">Не русский</option>
            </select>
            <div className="form-input-start pl-4 pe-none">
              <img src="img/language/9.png" alt="" className="icon text-h4" />
            </div>
            <div className="form-input-end pr-4 pe-none">
              <Icon name='to-right' />
            </div>
          </div>
        </label>
      </div>
    </aside>
    <div className="sidebar-shadow"></div>
  </>)
}