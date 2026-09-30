import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../src/Layout/MainLayout'

// Lazy imports
const Home = lazy(() => import('../src/Pages/Home'))
const Wedding = lazy(() => import('../src/Pages/wedding'))
const Portraits = lazy(() => import('../src/Pages/Portraits'))
const Travel = lazy(() => import('../src/Pages/Travel'))
const Product = lazy(() => import('../src/Pages/Product'))
const About = lazy(() => import('../src/Pages/About'))
const Contact = lazy(() => import('../src/Pages/Contact'))
const Booking = lazy(() => import('../src/Pages/Booking'))
const Portfolio = lazy(() => import('../src/Pages/Portfolio'))
const Gallery = lazy(() => import('../src/Pages/Gallery'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'wedding', element: <Wedding /> },
      { path: 'portraits', element: <Portraits /> },
      { path: 'travel', element: <Travel /> },
      { path: 'product', element: <Product /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'booking', element: <Booking /> },
    ],
  },
])

const App = () => {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
