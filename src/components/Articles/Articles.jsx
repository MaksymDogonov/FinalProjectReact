import './Articles.css'
import ItemsList from "../ItemsList/ItemsList";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Footer} from "../Footer/Footer.jsx";
import {Box, Button, Typography} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityIcon from '@mui/icons-material/Visibility';

const ChipComponent = ({ record }) => {
    return (
        <Box className="article-chip">
            {record.categories.map((category) => (<Typography fontSize={11}>{category}</Typography>))}
        </Box>
    )
}

const DetailsComponent = ({record}) => {
    return (
        <Box>
            <Typography component="span" fontSize={13}>Publish date: </Typography>
            <Typography component="span" fontSize={13} color="#b66dff">{record.date}</Typography>
        </Box>
    )
}

const ButtonComponent = ({record}) => {
    const navigate = useNavigate()

    return (
        <Box className="article-buttons-wrapper">
            <Button className="views-btn" variant="secondary">
                <VisibilityIcon fontSize="small" /> {record.views}
            </Button>
            <Button className="read-btn" onClick={() => navigate(`/articles/${record.id}`)}>
                Read <ArrowForwardIcon fontSize="small" />
            </Button>
        </Box>
    )
}

const Articles = () => {
    const records = useSelector((state) => state.articles)

    return (
        <>
            <ItemsList
                title="Articles"
                records={records}
                iconNode={<Box className="items-list-icon--article" />}
                ChipComponent={ChipComponent}
                DetailsComponent={DetailsComponent}
                ButtonComponent={ButtonComponent}
            />
            <Footer/>
        </>
    )
}

export default Articles
