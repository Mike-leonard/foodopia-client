import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import ViewRecipes from '../../pages/ViewRecipes';
import Blogs from '../../pages/Blogs';
import ErrorPage from '../../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'chef/:id',
                element: <ViewRecipes></ViewRecipes>,
                loader: ({ params }) => fetch(`https://foodopia-server.vercel.app/chef/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;