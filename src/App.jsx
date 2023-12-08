import './App.css'
import Header from './components/Header/Header.jsx'
import NavigationMenu from './components/Menu/NavigationMenu.jsx'
import {Box} from "@mui/material";
import {Navigate, useRoutes} from "react-router-dom";
import Lesson from "./components/Lesson/Lesson";
import Lessons from "./components/Lessons/Lessons";
import {useQueries} from "react-query";
import axios from "axios";
import {useDispatch} from "react-redux";
import {SET_JS_COURSE_HOMEWORKS, SET_JS_COURSE_LESSONS, SET_REACT_COURSE_LESSONS, SET_REACT_COURSE_HOMEWORKS} from "./store/store.js";
import DashboardPage from "./components/DashboardPage/DashboardPage.jsx";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";


const Router = () => useRoutes([
    { path: '', element: <DashboardPage/> },
    { path: ':courseKey', children: [
            { path: '', element: <Navigate to="lessons" replace /> },
            { path: 'lessons', children: [
                    { path: '', element: <Lessons /> },
                    { path: ':lessonId', element: <Lesson /> },
                ] },
        ] },
    { path: 'articles', children: [
            { path: '', element: <Articles /> },
            { path: ':articleId', element: <Article /> },
        ] },
])

function App() {
    const dispatch = useDispatch()

    useQueries([
        {
            queryKey: ['js-course/lessons'],
            queryFn: () => axios.get('http://localhost:3000/js-course/lessons'),
            onSuccess: ({ data }) => {
                dispatch({ type: SET_JS_COURSE_LESSONS, payload: data })
            } },
        {
            queryKey: ['js-course/homeworks'],
            queryFn: () => axios.get('http://localhost:3000/js-course/homeworks'),
            onSuccess: ({ data }) => {
                dispatch({ type: SET_JS_COURSE_HOMEWORKS, payload: data })
            }
        },
        {
            queryKey: ['react-course/lessons'],
            queryFn: () => axios.get('http://localhost:3000/react-course/lessons'),
            onSuccess: ({ data }) => {
                dispatch({ type: SET_REACT_COURSE_LESSONS, payload: data })
            } },
        {
            queryKey: ['react-course/homeworks'],
            queryFn: () => axios.get('http://localhost:3000/react-course/homeworks'),
            onSuccess: ({ data }) => {
                dispatch({ type: SET_REACT_COURSE_HOMEWORKS, payload: data })
            }
        }
    ])

    // useQuery({
    //     queryKey: ['js-course/lessons'],
    //     queryFn: () => axios.get('http://localhost:3000/js-course/lessons'),
    //     onSuccess: ({ data }) => {
    //         dispatch({ type: SET_JS_COURSE_LESSONS, payload: data })
    //     }
    // })
    //
    // useQuery({
    //     queryKey: ['js-course/homeworks'],
    //     queryFn: () => axios.get('http://localhost:3000/js-course/homeworks'),
    //     onSuccess: ({ data }) => {
    //         dispatch({ type: SET_JS_COURSE_HOMEWORKS, payload: data })
    //     }
    // })
    //
    // useQuery({
    //     queryKey: ['react-course/lessons'],
    //     queryFn: () => axios.get('http://localhost:3000/js-course/lessons'),
    //     onSuccess: ({ data }) => {
    //         dispatch({ type: SET_JS_COURSE_LESSONS, payload: data })
    //     }
    // })
    //
    // useQuery({
    //     queryKey: ['react-course/homeworks'],
    //     queryFn: () => axios.get('http://localhost:3000/js-course/homeworks'),
    //     onSuccess: ({ data }) => {
    //         dispatch({ type: SET_JS_COURSE_HOMEWORKS, payload: data })
    //     }
    // })

  return (
      <Box className='appBox' sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          <Header className='headerBox'/>
          <Box sx={{ pt: '90px', display: 'flex', flex: 1 }}>
              <NavigationMenu/>
              <Box sx={{ display: 'flex', flex: 1, background: '#f2edf3', ml: '250px', p: '44px 34px', flexDirection: 'column', width: '100%' }}>
                  <Router />
              </Box>
          </Box>
      </Box>
  )
}

export default App
