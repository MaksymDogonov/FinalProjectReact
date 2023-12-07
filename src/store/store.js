import {createStore, combineReducers} from 'redux'

const user = {
    fullName: 'Maksym Dogonov',
    role: 'student',
    coursesNumber: 53,
    reactCourse: 1,
}

const lessonsRating = [
    {name: 'Borys Jonson', points: 10},
    {name: 'Oleh Livanov', points: 9},
    {name: 'Viktor Klaus', points: 8},
    {name: 'Halyna Efremova', points: 9},
    {name: 'Galagan Chornaev', points: 2},
    {name: 'Dmitry Veselov', points: 5},
    {name: 'Elvira Nosova', points: 7},
    {name: 'Yevheniia Shirokiy', points: 7},
    {name: 'Zhanna Dark', points: 8},
    {name: 'Zakhar Frolov', points: 6},
    {name: 'Mykyta Chernaev', points: 3},
    {name: 'Yosyp Chorniy', points: 4},
]

const jsCourse = []

const jsCourseHomeworks = []

const reactCourse = []

const reactCourseHomeworks = []

export const SET_LESSONS_RATING = 'SET_LESSONS_RATING'
export const SET_REACT_COURSE_LESSONS = 'SET_REACT_COURSE_LESSONS'
export const SET_REACT_COURSE_HOMEWORKS = 'SET_REACT_COURSE_HOMEWORKS'
export const SET_JS_COURSE_LESSONS = 'SET_JS_COURSE_LESSONS'
export const SET_JS_COURSE_HOMEWORKS = 'SET_JS_COURSE_HOMEWORKS'


export const store = createStore(
    combineReducers({
        user: (state = user) => state,
        reactCourse: (state = reactCourse, action) => {
            switch (action.type) {
                case SET_REACT_COURSE_LESSONS:
                    return [...action.payload]
                default:
                    return state
            }
        },
        reactCourseHomeworks: (state = reactCourseHomeworks, action) => {
            switch (action.type) {
                case SET_REACT_COURSE_HOMEWORKS:
                    return [...action.payload]
                default:
                    return state
            }
        },

        jsCourse: (state = jsCourse, action) => {
            switch (action.type) {
                case SET_JS_COURSE_LESSONS:
                    return [...action.payload]
                default:
                    return state
            }
        },
        jsCourseHomeworks: (state = jsCourseHomeworks, action) => {
            switch (action.type) {
                case SET_JS_COURSE_HOMEWORKS:
                    return [...action.payload]
                default:
                    return state
            }
        },
        lessonsRating: (state = [], action) => {
            switch (action.type) {
                case 'SET_LESSONS_RATING':
                    return [...action.payload]
                default:
                    return state;
            }

        },
    }),
    {
        user,
        lessonsRating,
        jsCourse,
        jsCourseHomeworks,
    },
)
