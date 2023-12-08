import './SocialNetworks.css'
import Box from '@mui/material/Box';

const SocialNetworks = () => {

    return (
        <Box className="socialNetworks">
            <div>Не забудь подписаться на наши соц. сети и следить за новостями!</div>
            <div>
                <ul className='iconsMedia'>
                    <li>
                        <a href="https://t.me/Dogonov_Max">
                            <img className='iconMedia' src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/telegram-256.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCNJRJe1keee0Rxgwl71aorw">
                            <img className='iconMedia' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/maksymdogonov">
                            <img className='iconMedia' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MaksymDogonov">
                            <img className='iconMedia' src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-256.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dogonov_max/">
                            <img className='iconMedia' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/dogonov.max">
                            <img className='iconMedia' src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </Box>
    )
}

export default SocialNetworks;
