import './Homeworks.css'
import ItemsList from "../ItemsList/ItemsList";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getHomeworkExtras} from "../../utils";

const Homeworks = () => {
    const {courseKey} = useParams()
    const {title, courseName, ChipComponent, DetailsComponent, ButtonComponent} = getHomeworkExtras(courseKey)
    const records = useSelector((state) => state[`${courseName}Homeworks`])

    return (
        <>
            <ItemsList
                title={title}
                records={records}
                ChipComponent={ChipComponent}
                DetailsComponent={DetailsComponent}
                ButtonComponent={ButtonComponent}
            />
        </>
    )
}

export default Homeworks
