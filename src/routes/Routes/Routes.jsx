import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import ViewRecipes from '../../pages/ViewRecipes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
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
                loader: ({ params }) => fetch(`http://localhost:3000/chef/${params.id}`)
            }
        ]
    }
])

export default router;