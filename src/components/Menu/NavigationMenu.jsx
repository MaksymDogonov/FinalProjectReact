import './NavigationMenu.css'
import {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {useSelector} from "react-redux";

const NavigationMenu = () => {
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
        const arrow = document.querySelectorAll("#arrow");
        arrow.classList.toggle('rotate');
    };

    return (
        <nav className='Navigation'>
            <ul className='ulNavigation' style={{listStyleType: 'none', padding: 0}}>
                <div className='dashbord'>
                    <div>
                        <div className='userName'>{user}</div>
                        <div className='typeUser'>{role}</div>
                    </div>
                    <AccountCircleIcon sx={{ fontSize: 20 }}/>
                </div>
                <li>
                    <a href=""><span>Дашборд</span></a>
                    <span className='icons'><HomeIcon sx={{ fontSize: 20 }}/></span>
                </li>
                <li onClick={toggleMenu3}>JS Course
                    <span className="menu-ping-mark ">{coursesNumber}</span>
                    <span className="arrow icons">&lt;</span>
                    <span><PsychologyAltIcon sx={{ fontSize: 20 }}/></span>
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
                <li className="iconsArrow" onClick={toggleMenu4}>React Course
                    <span className="menu-ping-mark ">{reactCourse}</span>
                    <span className="arrow icons">&lt;</span>
                    <span><PsychologyIcon sx={{ fontSize: 20 }}/></span>
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
                <li className='technicalArticles'>
                    <a href=""><span>Технические статьи</span></a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
