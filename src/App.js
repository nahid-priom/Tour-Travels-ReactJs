import HomePage from "./components/pages/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Signup from "./components/pages/Signup";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />,
    </div>,
  },

  {
    path: "/service",
    element: <div>
      <Navbar />
      <Service />,
    </div>,
  },
  {
    path: "/contact",
    element: <div>
      <Navbar />
      <Contact />,
      
    </div>,
  
  
  },
  {
    path: "/signup",
    element: <div>
      <Navbar />
      <Signup />
    </div>
  }
  
  
  
 
]);




function App() {
  return (
    <div>
        <RouterProvider router={router} />
    
    </div>

  );
}

export default App;