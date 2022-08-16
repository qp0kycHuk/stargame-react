import React, { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { ThemeProvider } from './hooks/use-theme'
import { Agents } from './pages/Agents/Agents'
import { Button } from './ui/Button'


export const App = () => {


	return (
		<ThemeProvider >
			<Agents></Agents>
		</ThemeProvider>
	)
}