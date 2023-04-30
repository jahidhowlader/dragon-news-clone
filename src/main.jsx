import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router}></RouterProvider>
)
