import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blogs from "../../Pages/Blogs/Blogs";
import AddToy from "../../Pages/AddToy/AddToy";
import ShowAllToys from "../../Pages/ShowAllToys/ShowAllToys";
import SingleToy from "../../Pages/SingleToy/SingleToy";
import MyToys from "../../Pages/MyToys/MyToys";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import SingleCategory from "../../Pages/CategoryCard/SingleCategory/SingleCategory";
import Update from "../../Pages/Update/Update";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>,
        },
        {
            path: '/addtoy',
            element:  <PrivateRoutes><AddToy></AddToy> </PrivateRoutes>,
        },
        {
            path: '/alltoy',
            element:  <ShowAllToys></ShowAllToys> ,
        },
        {
            path: '/singleToy/:id',
            element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>  ,
            loader:  ({params}) => fetch(`https://the-toy-store-server.vercel.app/allToys/${params.id}`),
        },
        {
            path: '/mytoys',
            element:   <PrivateRoutes><MyToys></MyToys> </PrivateRoutes> ,
        },
        {
            path: '/category/:id',
            element: <PrivateRoutes><SingleCategory></SingleCategory> </PrivateRoutes>  ,
            loader: ({params}) => fetch(`https://the-toy-store-server.vercel.app/allToys/${params.id}`)
        },
        {
            path: '/update/:id',
            element:  <Update></Update>,
            loader: ({params}) => fetch(`https://the-toy-store-server.vercel.app/allToys/${params.id}`)

        },
      ]
    },
  ]);




export default router;
