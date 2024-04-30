import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./Components/Contact/ContactUs";
import BlogGrid from "./Components/Blog/BlogGrid";
import Blog1 from "./Components/Blog/Blog1";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import EnquireNow from "./Components/EnquireNow/EnquireNow";
import PlaceEnquire from "./Components/EnquireNow/PlaceEnquire";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <AboutUs />,
  },
  // {
  //   path: "/Services",
  //   element: <Services />,
  // },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/EnquireNow",
    element: <EnquireNow />,
  },
  {
    path: "/Blog",
    element: <BlogGrid />,
  },
  {
    path: "/EnquireNow/:id",
    element: <PlaceEnquire/>,
  },

  //////////Blogs Pages//////////////////

  {
    path: "/Blog1",
    element: <Blog1 />,
  },

  ////////////Services Pages///////////////

  {
    path:"/services/:id",
    element:<Services/>
  }
]);

export default router;
