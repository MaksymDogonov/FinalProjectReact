import './NavigationMenu.css'
import {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';

const NavigationMenu = () => {
    const user = 'Maksym Dogonov'
    const [isMenu3Open, setIsMenu3Open] = useState(false);
    const [isMenu4Open, setIsMenu4Open] = useState(false);

    const toggleMenu3 = () => {
        setIsMenu3Open(!isMenu3Open);
    };

    const toggleMenu4 = () => {
        setIsMenu4Open(!isMenu4Open);
    };


    return (
        <nav className='Navigation'>
            <ul className='ulNavigation' style={{listStyleType: 'none', padding: 0}}>
                <li className='dasbord'>
                    <div>
                        <ul className='userStudent'>
                            <li>{user}</li>
                            <li className='typeUser'>student</li>
                        </ul>
                    </div>
                    <span className='icons userIcon'><AccountCircleIcon sx={{ fontSize: 12 }}/></span>

                </li>
                <li>
                    <a href=""><span>Дашборд</span></a>
                    <span className='icons'><HomeIcon sx={{ fontSize: 12 }}/></span>
                </li>
                <li onClick={toggleMenu3}>JS Course
                    <span className="menu-ping-mark ">53</span>
                    <span className='icons'><PsychologyAltIcon sx={{ fontSize: 12 }}/></span>
                </li>

                {isMenu3Open && (
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        <li className='iconsLeft'>
                            <a href="">Уроки</a>
                        </li>
                        <li className='iconsLeft'>
                            <a href="">Домашки</a>
                        </li>
                    </ul>
                )}
                <li onClick={toggleMenu4}>React
                    <span className="menu-ping-mark ">1</span>
                    <span className='icons'><PsychologyIcon sx={{ fontSize: 12 }}/></span>
                </li>
                {isMenu4Open && (
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        <li className='iconsLeft'>
                            <a href="">Уроки</a>
                        </li>
                        <li className='iconsLeft'>
                            <a href="">Домашки</a>
                        </li>
                    </ul>
                )}
            </ul>
        </nav>
    );
};

export default NavigationMenu;
