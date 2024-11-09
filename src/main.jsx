import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ServicesPage from './pages/SevicesPage/ServicesPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "Services",
    element: <ServicesPage />,
  },
  {
    path: "Contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
