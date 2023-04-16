// import { ColorModeContext, useMode } from './theme'
// import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import SideBar from './components/SideBar'
import Boxes from './components/Boxes'

function App() {
  // const [theme, colorMode] = useMode()
  return (
    <>
     <CssBaseline/>
        <div className="app">
          <main className='content'>
          <SideBar/>
          <Boxes/>
          
          <h1>Vite + React + Mui</h1>
          </main>
        </div>
    </>
  )
}

export default App
