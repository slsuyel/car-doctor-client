import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: 'book/:id', 
        element: <BookService></BookService>, 
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path : '/bookings',
        element : <Bookings/>
      }
    ],
  },
]);
export default router;
