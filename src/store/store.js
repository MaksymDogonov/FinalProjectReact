import { createStore, combineReducers } from 'redux'

const user = {
    fullName: 'Maksym Dogonov',
    role: 'student',
    coursesNumber: 53,
    reactCourse: 1,
}

export const store = createStore(
    combineReducers({
        user: (state = user) => state,
    }),
    {
        user,
    },
)
