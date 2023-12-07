import './App.css'
import Header from './components/Header/Header.jsx'
import NavigationMenu from './components/Menu/NavigationMenu.jsx'
import {Box} from "@mui/material";
import {useRoutes} from "react-router-dom";
import DashboardPage from "./components/DashboardPage/DashboardPage.jsx";

const Router = () => useRoutes([
    { path: '', element: <DashboardPage/> },
    { path: 'js-course', element: <div>JS Course</div> },
])

function App() {
  return (
      <Box className='appBox' sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          <Header className='headerBox'/>
          <Box sx={{ pt: '90px', display: 'flex', flex: 1 }}>
              <NavigationMenu/>
              <Box sx={{ display: 'flex', flex: 1, background: '#f2edf3', ml: '270px', p: '44px 34px', flexDirection: 'column', width: '100%' }}>
                  <Router />
              </Box>
          </Box>
      </Box>
  )
}

export default App
