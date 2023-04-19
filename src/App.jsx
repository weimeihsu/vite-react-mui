// import { ColorModeContext, useMode } from './theme'
import { ThemeProvider } from '@mui/material'
import { darkTheme, CustomTheme } from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import Boxes from './components/Boxes'
import ButtonClick from './components/ButtonClick'
import NavSideBar from './components/NavSideBar'

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline enableColorScheme/>
        <div className="app">
          <main className='content'>
          <NavSideBar/>
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
