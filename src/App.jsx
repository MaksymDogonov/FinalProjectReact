import './App.css'
import Header from './components/Header/Header.jsx'
import NavigationMenu from './components/Menu/NavigationMenu.jsx'
import {Box} from "@mui/material";
import {Navigate, useRoutes} from "react-router-dom";
import Lesson from "./components/Lesson/Lesson";
import Lessons from "./components/Lessons/Lessons";
import {useQuery} from "react-query";
import axios from "axios";
import {useDispatch} from "react-redux";
import {SET_JS_COURSE_HOMEWORKS, SET_JS_COURSE_LESSONS} from "./store/store.js";

const Router = () => useRoutes([
    { path: '', element: <div>Dashboard</div> },
    { path: ':courseKey', children: [
            { path: '', element: <Navigate to="lessons" replace /> },
            { path: 'lessons', children: [
                    { path: '', element: <Lessons /> },
                    { path: ':lessonId', element: <Lesson /> },
                ] },
        ] },
])

function App() {
    const dispatch = useDispatch()

    useQuery({
        queryKey: ['js-course/lessons'],
        queryFn: () => axios.get('http://localhost:3000/js-course/lessons'),
        onSuccess: ({ data }) => {
            dispatch({ type: SET_JS_COURSE_LESSONS, payload: data })
        }
    })

    useQuery({
        queryKey: ['js-course/homeworks'],
        queryFn: () => axios.get('http://localhost:3000/js-course/homeworks'),
        onSuccess: ({ data }) => {
            dispatch({ type: SET_JS_COURSE_HOMEWORKS, payload: data })
        }
    })

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          <Header/>
          <Box sx={{ pt: '70px', display: 'flex', flex: 1 }}>
              <NavigationMenu/>
              <Box sx={{ display: 'flex', flex: 1, background: '#f2edf3', ml: '270px', p: '44px 36px' }}>
                  <Router />
              </Box>
          </Box>
      </Box>
  )
}

export default App
