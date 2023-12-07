import './UsefulVideos.css'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Box} from "@mui/material";

const UsefulVideos = () => {
    return (
        <Box className='videoBox'>
            <Box className="videoElementBox">
                <div className="videoElement">
                    <img className='videoIcon'
                         src="https://purepng.com/public/uploads/large/purepng.com-video-icon-galaxy-s6symbolsiconssamsungapp-iconsgalaxy-s6-icons-721522597480axbjz.png"
                         alt="video img"/>
                    <p className='videoText'>Полезные видео</p>
                </div>

            </Box>

            <Carousel showThumbs={false} centerMode showArrows infiniteLoop>
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
                    <h3>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/25lCunO6yDQ?si=QP96KEBmnBIsbSdT"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </h3>
                </div>
                <div>
                    <h3>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/d5weK2w1V4A?si=HUQZurz43K-rt-k5"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </h3>
                </div>
                <div>
                    <h3>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/_-lP-Q7zF2w?si=fPFcTx7R_L4_L9JL"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </h3>
                </div>
            </Carousel>

        </Box>
    )
}

export default UsefulVideos;
