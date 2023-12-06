import { createStore, combineReducers } from 'redux'

const user = {
    fullName: 'Maksym Dogonov',
    role: 'student',
    coursesNumber: 53,
    reactCourse: 1,
}

const lessonsRating = [
    { name: 'Borys Jonson', points: 10 },
    { name: 'Oleh Livanov', points: 9 },
    { name: 'Viktor Klaus', points: 8 },
    { name: 'Halyna Efremova', points: 9 },
    { name: 'Galagan Chornaev', points: 2 },
    { name: 'Dmitry Veselov', points: 5 },
    { name: 'Elvira Nosova', points: 7 },
    { name: 'Yevheniia Shirokiy', points: 7 },
    { name: 'Zhanna Dark', points: 8 },
    { name: 'Zakhar Frolov', points: 6 },
    { name: 'Mykyta Chernaev', points: 3 },
    { name: 'Yosyp Chorniy', points: 4 },
]

export const store = createStore(
    combineReducers({
        user: (state = user) => state,
        lessonsRating: (state = user) => state,
    }),
    {
        user,
        lessonsRating,
    },
)
