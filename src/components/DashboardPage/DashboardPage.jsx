import './DashboardPage.css'
import DashboardElement from "../DashbordElemt/DashboardElement.jsx";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import Graphics from "../Graphics/Graphics.jsx"
import ReactBox from "../ReactBox/ReactBox.jsx";
import UsefulVideos from "../UsefulVideos/UsefulVideos.jsx";
import {Footer} from "../Footer/Footer.jsx";

const DashboardPage = () => {

    return (
        <div>
            <SocialNetworks/>
            <DashboardElement/>
            <Graphics/>
            <ReactBox/>
            <UsefulVideos/>
            <Footer/>
        </div>
    )
}

export default DashboardPage;
