"use client"

import { ThemeProvider } from "next-themes"

type AppProvidersProps = {
  children: React.ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = (props) => {
  const { children } = props

  return <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
}

export { AppProviders }
