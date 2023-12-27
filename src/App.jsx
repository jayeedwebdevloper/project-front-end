import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Routes/router'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  )
}

export default App
