import {useSelector} from "react-redux";
import {Box, Button, Chip, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import camelCase from "lodash.camelcase";

const JsCourseChipComponent = ({ record }) => {
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

const JsCourseDetailsComponent = ({record}) => {
    return (
        <Box>
            <Typography component="span" fontSize={13}>Lesson date: </Typography>
            <Typography component="span" fontSize={13} color="#b66dff">{record.date}</Typography>
        </Box>
    )
}

const JsCourseButtonComponent = ({record}) => {
    const navigate = useNavigate()

    return (
        <Button className="lesson-btn" onClick={() => navigate(`/js-course/lessons/${record.id}`)}>
            To lesson <ArrowForwardIcon fontSize="small" />
        </Button>
    )
}

const titles = {
    'jsCourse': 'JS Course / Уроки',
}

const components = {
    'jsCourse': {
        ChipComponent: JsCourseChipComponent,
        DetailsComponent: JsCourseDetailsComponent,
        ButtonComponent: JsCourseButtonComponent,
    },
}

export const getCourseExtras = (courseKey) => {
    const courseName = camelCase(courseKey)
    const {ChipComponent, DetailsComponent, ButtonComponent} = components[courseName]
    const title = titles[courseName]

    return {
        title,
        courseName,
        ChipComponent,
        DetailsComponent,
        ButtonComponent,
    }
}
