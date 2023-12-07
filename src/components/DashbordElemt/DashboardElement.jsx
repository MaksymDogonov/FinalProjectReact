import './DashboardElement.css'
import Box from '@mui/material/Box';

const dashboardElement = () => {

    return (
        <Box className="dashboardBox">
            <div className="dashboardElement">
                <img className='dashboardIcon' src="https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Home.png" alt="dushbord img"/>
                <p className='dashboardText'>Дашборд</p>
            </div>

        </Box>
    )
}

export default dashboardElement;
