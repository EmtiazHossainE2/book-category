import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AllBooks from "../pages/AllBooks";
import SignUp from "../pages/SignUp";
import AddNewBook from "../pages/AddNewBook";
import BookDetails from "../pages/BookDetails";
import About from "../pages/About";
import WishListpage from "../pages/WishListpage";
import PlanToRead from "../pages/PlanToRead";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,

            },
            {
                path: "/all-books",
                element: <AllBooks />
            },
            {
                path: "/book-details/:id",
                element: <BookDetails />
            },
            {
                path: "/add-new-book",
                element: <AddNewBook />
            },
            {
                path: "/wishlist",
                element: <WishListpage />
            },
            {
                path: "/plan-to-read",
                element: <PlanToRead />
            },
            {
                path: '/sign-up',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <Login />,

            },
        ],
    },

    // {
    //     path: '/signup',
    //     element: <Signup />,
    // },
    {
        path: '*',
        element: <NotFound />,
    },
]);
export default routes;