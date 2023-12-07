import './Lessons.css'
import ItemsList from "../ItemsList/ItemsList";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCourseExtras} from "../../utils";

const Lessons = () => {
    const { courseKey } = useParams()
    const { title, courseName, ChipComponent, DetailsComponent, ButtonComponent } = getCourseExtras(courseKey)
    const records = useSelector((state) => state[courseName])

    return (
        <ItemsList
            title={title}
            records={records}
            ChipComponent={ChipComponent}
            DetailsComponent={DetailsComponent}
            ButtonComponent={ButtonComponent}
        />
    )
}

export default Lessons
