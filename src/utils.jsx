import {useSelector} from "react-redux";
import {Box, Button, Chip, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import camelCase from "lodash.camelcase";
import LinearProgress from '@mui/material/LinearProgress';

const CourseChipComponent = ({ record }) => {
    const { courseKey } = useParams()
    const { courseName } = getCourseExtras(courseKey)
    const homeworksRecords = useSelector((state) => state[`${courseName}Homeworks`])
    const lessonHomeworks = homeworksRecords.filter((homework) => record.homeworksIds.includes(homework.id))
    const doneHomeworks = lessonHomeworks.filter((homework) => homework.isDone)

    const label = record.homeworksIds.length > 0
        ? `Done ${doneHomeworks.length} of ${record.homeworksIds.length}`
        : 'No homework'
    const color = record.homeworksIds.length > 0
        ? record.homeworksIds.length === doneHomeworks.length ? 'success' : 'error'
        : void 0

    return <Chip className="lesson-chip" label={label} color={color} />

}

const CourseDetailsComponent = ({record}) => {
    return (
        <Box>
            <Typography component="span" fontSize={13}>Lesson date: </Typography>
            <Typography component="span" fontSize={13} color="#b66dff">{record.date}</Typography>
        </Box>
    )
}

const CourseButtonComponent = ({record}) => {
    const navigate = useNavigate()

    return (
        <Button className="lesson-btn" onClick={() => navigate(`/js-course/lessons/${record.id}`)}>
            To lesson <ArrowForwardIcon fontSize="small" />
        </Button>
    )
}

const courseTitles = {
    'jsCourse': 'JS Course / Уроки',
    'reactCourse': 'React Course / Уроки',
}

const HomeworkChipComponent = ({ record }) => {
    const label = record.isDone === "Done"
        ? `Done`
            : record.isDone === 'IsNotDone'
            ? 'Not Done'
        : 'In Processing'
    const color = record.isDone === "Done"
        ? `success`
            : record.isDone === 'IsNotDone'
            ? 'error'
        : void 0

    return <Chip className="homework-chip" label={label} color={color} />

}

const HomeworkDetailsComponent = ({record}) => {
    return (
        <Box className="homework-details-wrapper">
            <Box>
                <Typography component="span" fontSize={13}>Lesson date: </Typography>
                <Typography component="span" fontSize={13} color="#b66dff">{record.date}</Typography>
            </Box>
            <Box>
                <Typography component="span" fontSize={13}>Difficulty: </Typography>
                <LinearProgress variant="determinate" value={record.difficulty * 10} />
            </Box>
        </Box>
    )
}

const HomeworkButtonComponent = ({record}) => {
    const navigate = useNavigate()

    return (
        <Button className="homework-btn" onClick={() => navigate(`/js-course/homeworks/${record.id}`)}>
            To homework <ArrowForwardIcon fontSize="small" />
        </Button>
    )
}

const homeworkTitles = {
    'jsCourse': 'JS Course / Homeworks',
    'reactCourse': 'React Course / Homeworks',
}

export const getCourseExtras = (courseKey) => {
    const courseName = camelCase(courseKey)
    const title = courseTitles[courseName]

    return {
        title,
        courseName,
        ChipComponent: CourseChipComponent,
        DetailsComponent: CourseDetailsComponent,
        ButtonComponent: CourseButtonComponent,
    }
}
export const getHomeworkExtras = (courseKey) => {
    const courseName = camelCase(courseKey)
    const title = homeworkTitles[courseName]

    return {
        title,
        courseName,
        ChipComponent: HomeworkChipComponent,
        DetailsComponent: HomeworkDetailsComponent,
        ButtonComponent: HomeworkButtonComponent,
    }
}
