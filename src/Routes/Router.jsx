import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children : [
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
])

export default Router;