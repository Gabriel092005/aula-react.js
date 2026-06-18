import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { Home } from './page/Home'



export function App() {

  return (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Home></Home>
        </ThemeProvider>
    </>
  )
}
