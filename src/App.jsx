// import { ColorModeContext, useMode } from './theme'
import { ThemeProvider } from '@mui/material'
import { darkTheme, CustomTheme } from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import SideBar from './components/SideBar'
import Boxes from './components/Boxes'
import ButtonClick from './components/ButtonClick'
import BasicList from './components/BasicList'

function App() {
  // const [theme, colorMode] = useMode()
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline enableColorScheme/>
        <div className="app">
          <main className='content'>
          <BasicList/>
          <SideBar/>
          <Boxes/>
          <ButtonClick/>
          <h1>Vite + React + Mui</h1>
          </main>
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
