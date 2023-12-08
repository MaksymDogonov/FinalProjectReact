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

const articles = [
    { id: 1, title: 'JavaScript — Operator typeof', date: '2022.02.17', categories: ['Data Types', 'JavaScript'], description: 'Operator typeof returns string with operand value type.', views: 10, content: [
            { id: 1, type: 'group', content: [
                    { id: 1, type: 'text', content: 'Operator' },
                    { id: 2, type: 'text', content: ' typeof ', style: 'bold' },
                    { id: 3, type: 'text', content: 'returns string with operand value type.' },
                ] },
            { id: 2, type: 'code', content: `
const num = 10;
const bigNum = 10n;
const str = 'string';
const undef = undefined;
const nullVar = null;
const boolVar = true;
const symbolVar = Symbol('symbol');



console.log('num', typeof num);
console.log('bigNum', typeof bigNum);
console.log('str', typeof str);
console.log('undef', typeof undef);
console.log('nullVar', typeof nullVar);      // здесь баг, object
console.log('boolVar', typeof boolVar);
console.log('symbolVar', typeof symbolVar);


// Object

const obj = {
    name: 'John',
    age: 20
}

const arr = [10, 20, 30];

console.log('obj', typeof obj);
console.log('arr', typeof arr);


// Function

function sum(a, b) {
    return a + b;
}

console.log('sum', typeof sum);
            ` },
            { id: 3, type: 'text', content: 'Despite the fact that the typeof operator indicates that there are functions, this function function in any case belongs to the object data type. This was done specifically to make it convenient for us to distinguish between functions and objects.' },
            { id: 4, type: 'group', content: [
                    { id: 1, type: 'text', content: 'So typeof can be used as a' },
                    { id: 2, type: 'text', content: ' typeof', style: 'bold' },
                    { id: 3, type: 'text', content: '(test_value) function.' },
                ] }
        ]  }
]

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
        articles: (state = articles) => state,
    }),
    {
        user,
        lessonsRating,
        jsCourse,
        jsCourseHomeworks,
        reactCourse,
        reactCourseHomeworks,
        articles,
    },
)
