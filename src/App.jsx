import './App.css'
import Header from './components/Header/Header.jsx'
import NavigationMenu from './components/Menu/NavigationMenu.jsx'
import {Box} from "@mui/material";
import {useRoutes} from "react-router-dom";

const Router = () => useRoutes([
    { path: '', element: <div>Dashboard</div> }
])

function App() {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          <Header/>
          <Box sx={{ pt: '40px', display: 'flex', flex: 1 }}>
              <NavigationMenu/>
              <Box sx={{ display: 'flex', flex: 1, background: '#f2edf3', ml: '170px', p: '44px 36px' }}>
                  <Router />
              </Box>
          </Box>
      </Box>
  )
}

export default App
