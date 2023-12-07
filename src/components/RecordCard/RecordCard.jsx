import './RecordCard.css'
import {Box, Card, Typography} from "@mui/material";

const RecordCard = ({ record, detailsNode, chipNode, buttonNode }) => {
    return (
        <Card className="card-wrapper">
            {chipNode}
            <Typography className="card-title" fontSize={18} fontWeight={500}>{record.title}</Typography>
            <Box className="divider" />
            {detailsNode}
            <Box className="divider" />
            <Typography fontSize={18} fontWeight={500}>Description:</Typography>
            <Typography fontSize={15}>{record.description}</Typography>
            {buttonNode}
        </Card>
    )
}

export default RecordCard
