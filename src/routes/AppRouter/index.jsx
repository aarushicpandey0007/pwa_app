import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../../pages/HomePage"
import QuestionPage from "../../pages/QuestionPage"
import TopicSelection from '../../views/TopicSelection';

export const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/questionsPage",
        element: <QuestionPage/>
    },
    {
        path: "/topicSelection",
        element: <TopicSelection/>
    }
])