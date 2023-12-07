import './UsefulVideos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Box} from "@mui/material";

const UsefulVideos = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box className='videoBox'>
            <Box className="videoElementBox">
                <div className="videoElement">
                    <img className='videoIcon' src="https://purepng.com/public/uploads/large/purepng.com-video-icon-galaxy-s6symbolsiconssamsungapp-iconsgalaxy-s6-icons-721522597480axbjz.png" alt="video img"/>
                    <p className='videoText'>Полезные видео</p>
                </div>

            </Box>

            <Slider {...settings}>
                <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/S108rIZA6xY?si=N_SR2Kn8uoflRpjW"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z-JzryWEBYQ?si=pNszwTD6SHTSL_sL"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GR2XGlNDz7A?si=ubP0SBKfDgUwv8ur"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>

        </Box>
    )
}

export default UsefulVideos;
