import './NavigationMenu.css'
import {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const NavigationMenu = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.fullName)
    const role = useSelector((state) => state.user.role)
    const coursesNumber = useSelector((state) => state.user.coursesNumber)
    const reactCourse = useSelector((state) => state.user.reactCourse)
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
                <div className='dasbord'>
                    <div>
                        <div>{user}</div>
                        <div className='typeUser'>{role}</div>
                    </div>
                    <AccountCircleIcon sx={{ fontSize: 12 }}/>
                </div>
                <li>
                    <div onClick={() => navigate('/')}><span>Дашборд</span></div>
                    <span className='icons'><HomeIcon sx={{ fontSize: 12 }}/></span>
                </li>
                <li onClick={toggleMenu3}>JS Course
                    <span className="menu-ping-mark ">{coursesNumber}</span>
                    <span className='icons'><PsychologyAltIcon sx={{ fontSize: 12 }}/></span>
                </li>

                {isMenu3Open && (
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        <li className='iconsLeft'>
                            <div onClick={() => navigate('/js-course')}>Уроки</div>
                        </li>
                        <li className='iconsLeft'>
                            <a href="">Домашки</a>
                        </li>
                    </ul>
                )}
                <li onClick={toggleMenu4}>React
                    <span className="menu-ping-mark ">{reactCourse}</span>
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
                <li></li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
