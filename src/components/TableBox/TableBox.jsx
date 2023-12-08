import './TableBox.css'
import Table from '@mui/joy/Table';
import {Box} from "@mui/material";
import Button from '@mui/joy/Button';
import {useNavigate} from "react-router-dom";

const TableBox = ({ data, title, entityKey, iconSrc }) => {
    const navigate = useNavigate()

    return (
        <Box className='reactBox'>
            <Box>
                <div className="reactElement">
                    <img className='reactIcon'
                         src={iconSrc}
                         alt="img"/>
                    <p className='reactText'>{title}</p>
                </div>
            </Box>

            <Table sx={{'& tr > *:not(:first-child)': {textAlign: 'right'}}}>
                <thead>
                <tr className='nameColemn'>
                    <th style={{width: '30%'}}>Название</th>
                    <th>Дата</th>
                    <th>Сложность</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {data.slice(-10).reverse().map((lesson) => (
                    <tr key={lesson.title}>
                        <td>{lesson.title}</td>
                        <td>{lesson.date}</td>
                        <td>{lesson.complexity}</td>
                        <td className="btnsColumn">
                            <Button className='buttonInColumn'
                                color="primary"
                                onClick={() => navigate(`/${entityKey}/lessons/${lesson.id}`)}
                                variant="solid"
                            >&#8594;</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Box>
    );
}

export default TableBox;
