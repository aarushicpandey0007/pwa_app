import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../../pages/HomePage"
import QuestionPage from "../../pages/QuestionPage"

export const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/questionsPage",
        element: <QuestionPage/>
    }
])