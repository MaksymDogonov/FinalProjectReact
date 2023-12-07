import './ItemsList.css';
import {Box, Typography} from "@mui/material";
import RecordCard from "../RecordCard/RecordCard";

const ItemsList = ({ title, records, DetailsComponent, ChipComponent, ButtonComponent }) => {
    return (
        <Box className="items-list">
            <Box className="items-list-header">
                <Box component="span" className="items-list-icon-wrapper">
                    <Box className="items-list-icon" />
                </Box>
                <Typography fontSize={18} fontWeight={500}>{title}</Typography>
            </Box>
            <Box className="items-list-records">
                {records.map((record) => (
                    <RecordCard
                        key={record.id}
                        record={record}
                        detailsNode={<DetailsComponent record={record} />}
                        chipNode={<ChipComponent record={record} />}
                        buttonNode={<ButtonComponent record={record} />}
                    />
                ))}
            </Box>
        </Box>
    )
}

ItemsList.defaultProps = {
    title: '',
    records: [],
}

export default ItemsList
