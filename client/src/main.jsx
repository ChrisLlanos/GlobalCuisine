import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.js'
import Home from './pages/Home.jsx'
import SingleMenu from './pages/SingleMenu.js'
import Cart from '.pages/Cart.js'
import Error from './pages/Error.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
