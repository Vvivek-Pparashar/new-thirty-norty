import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Countries from "./Components/countries/Countries";
import EnquireNow from "./Components/EnquireNow/EnquireNow";
import PlaceEnquire from "./Components/EnquireNow/PlaceEnquire";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/Contact/ContactUs";
import ServicesPage from "./Components/Services/ServicesPage";
import USA from "./Components/countries/USA";
import Europe from "./Components/countries/Europe";
import India from "./Components/countries/India";
import V1 from "./Components/Services/V1";
import V2 from "./Components/Services/V2";
import V3 from "./Components/Services/V3";
import V4 from "./Components/Services/V4";
import V5 from "./Components/Services/V5";
import V6 from "./Components/Services/V6";
import TAC from "./Components/T&C/TAC";
// import Global from "./Components/countries/Global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Services",
    element: <ServicesPage />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
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
    element: <PlaceEnquire />,
  },
  {
    path: "/T&C",
    element: <TAC />,
  },

  //////////Blogs Pages//////////////////

  // {
  //   path: "/Blog1",
  //   element: <Blog1 />,
  // },

  ////////////Countries Pages///////////////

  {
    path: "/countries",
    element: <Countries />,
  },
  {
    path: "/USA",
    element: <USA />,
  },
  {
    path: "/Europe",
    element: <Europe />,
  },
  {
    path: "/India",
    element: <India />,
  },
  {
    path: "/Global",
    element: <Countries />,
  },
  ////////////Services Pages///////////////

  {
    path: "/services/v1",
    element: <V1 />,
  },

  {
    path: "/services/v2",
    element: <V2 />,
  },

  {
    path: "/services/v3",
    element: <V3 />,
  },

  {
    path: "/services/v4",
    element: <V4 />,
  },

  {
    path: "/services/v5",
    element: <V5 />,
  },
  {
    path: "/services/v6",
    element: <V6 />,
  },
]);

export default router;
