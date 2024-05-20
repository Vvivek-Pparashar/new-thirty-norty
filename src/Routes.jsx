import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Countries from "./Components/countries/Countries";
import EnquireNow from './Components/EnquireNow/EnquireNow'
import PlaceEnquire from './Components/EnquireNow/PlaceEnquire'
import ServicesHomePage from "./Components/Services/ServicesHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/About",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/Services",
  //   element: <Services />,
  // },
  // {
  //   path: "/ContactUs",
  //   element: <ContactUs />,
  // },
  {
    path: "/EnquireNow",
    element: <EnquireNow />,
  },
  // {
  //   path: "/Blog",
  //   element: <BlogGrid />,
  // },
  {
    path: "/EnquireNow/:id",
    element: <PlaceEnquire/>,
  },

  //////////Blogs Pages//////////////////

  // {
  //   path: "/Blog1",
  //   element: <Blog1 />,
  // },

  ////////////Services Pages///////////////

  {
    path:"/services/:id",
    element:<ServicesHomePage/>
  },

  {
    path:"/countries", 
    element:<Countries/>
  }
]);

export default router;
