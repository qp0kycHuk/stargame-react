import React, { ReactNode } from 'react'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

interface IProps {
  children?: ReactNode | ReactNode[]
}

export const PageWrapper = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="wrapper">
        <div className="wrapper-inner">
          <div className="content container">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}