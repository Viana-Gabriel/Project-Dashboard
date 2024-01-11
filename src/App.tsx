import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { ThemeProvider } from "@emotion/react"
import { LigthTheme } from "./shared/themes"

export const App = () => {
  return (
    <ThemeProvider theme={LigthTheme}>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </ThemeProvider>

  )
}


