import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
// import {RouterProvider} from "react-router-dom"
// import { MainRoutes } from './routes/MainRoutes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={MainRoutes} /> */}
    <App />
  </React.StrictMode>,
)
