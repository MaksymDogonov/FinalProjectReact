import './header.css'
import {useState} from 'react';

const Header = () => {
    const user = 'Maksym Dogonov'
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreenToggle = () => {
        const element = document.documentElement;

        if (isFullscreen) {
            document.exitFullscreen();
        } else {
            element.requestFullscreen().catch((err) => {
                console.error('Не удалось войти в полноэкранный режим:', err);
            });
        }
        setIsFullscreen(!isFullscreen);
    };
    return (
        <header className="header">
            <div className="logo">
                <a href="" target="">
                    <img src="https://lms.junjun.io/wp-content/themes/Junjun-lms/assets/images/logo.svg"
                         alt="Logo"/>
                </a>
            </div>
            <button className="menu-btn">
                <img src="https://cdn.icon-icons.com/icons2/2024/PNG/96/lines_menu_burger_icon_123889.png"
                     alt="burger_menu"/>
            </button>
            <ul className='user'>
                <li>{user}</li>
                <li>
                    <button className="btn" onClick={handleFullscreenToggle}>
                        <img src="https://static-00.iconduck.com/assets.00/full-screen-icon-512x512-f6rqkeni.png"
                             alt="full_screen"/>
                    </button>
                </li>
                <li>
                    <button className="btn fullscreen-button" >
                        <img src="https://www.iconpacks.net/icons/2/free-exit-icon-2860-thumb.png"
                             alt="full_screen"/>
                    </button>
                </li>
            </ul>
        </header>

    )
}

export default Header;
