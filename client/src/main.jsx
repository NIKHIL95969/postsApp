import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import store from './redux/store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './components/Home/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={ <Home />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/login' element={ <Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
