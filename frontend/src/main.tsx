import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './RootLayout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Category from './pages/Category'
import Resource from './Resource'
import About from './pages/About'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: ':category', element: <Category /> },
      { path: 'resources/:id', element: <Resource /> },
      { path: 'about', element: <About /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
