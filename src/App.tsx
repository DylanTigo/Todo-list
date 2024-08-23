import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import Home from "./Pages/Home";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div className="max-w-5xl mx-auto box-content px-5">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
