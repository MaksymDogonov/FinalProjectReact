import './Lesson.css'
import {useSelector} from "react-redux";
import {Box, Card, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useMemo} from "react";
import ReactPlayer from 'react-player/youtube'
import {getCourseExtras} from "../../utils";
import Table from '@mui/joy/Table';
import Button from "@mui/joy/Button";

const Lesson = () => {
    const { lessonId, courseKey } = useParams()
    const { courseName } = getCourseExtras(courseKey)
    const records = useSelector((state) => state[courseName])
    const lesson = useMemo(
        () => records.find(lesson => lesson.id === Number(lessonId)),
        [records, lessonId]
    )
    const homeworksRecords = useSelector((state) => state[`${courseName}Homeworks`]).filter((homework) => lesson.homeworksIds.includes(homework.id))

    if (!lesson) {
        return <Typography className="lesson-title" fontSize={25} fontWeight={500}>404 Not Found</Typography>
    }

    return (
        <Box className="lesson-wrapper">
            <Card>
                <Typography className="lesson-title" fontSize={25} fontWeight={500}>Lesson {lessonId} - {lesson.title}</Typography>
            </Card>
            <Card className="lesson-video-wrapper">
                <ReactPlayer url={lesson.lessonVideoUrl} />
            </Card>
            {(!!lesson.additionalResources.length || !!lesson.homeworksIds.length) && (
                <Box className="lesson-extras">
                    {!!lesson.additionalResources.length && (
                        <Card className="lesson-additional-resources-wrapper">
                            <Typography fontSize={18} fontWeight={500}>Additional resources</Typography>
                            <ul className="lesson-additional-resources-list">
                                {lesson.additionalResources.map((additionalResource) => (
                                    <li key={additionalResource.id}>
                                        <a href={additionalResource.link} target="_blank" rel="noreferrer">
                                            {additionalResource.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}
                    {!!lesson.homeworksIds.length && (
                        <Card className="lesson-homeworks-wrapper">
                            <Typography fontSize={18} fontWeight={500}>Lesson's homeworks</Typography>
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
                                {homeworksRecords.map((lesson) => (
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
                            <Typography color="#198ae3" fontSize={18} fontWeight={500}>Total number: {lesson.homeworksIds.length}</Typography>
                        </Card>
                    )}
                </Box>
            )}
        </Box>
    )
}

export default Lesson
