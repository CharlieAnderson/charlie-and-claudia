import './styles/Shared.css';
import './styles/Web.css';
import './styles/Mobile.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root"
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Page3 from "./routes/page3";
import Page4 from "./routes/page4";
import Page5 from "./routes/page5";
import Page6 from "./routes/page6";
import Page7 from "./routes/page7";
import Page8 from "./routes/page8";
import ErrorPage from "./routes/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Page1/> },
      {
        path: "/home",
        element: <Page1/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/schedule",
        element: <Page2/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/travel",
        element: <Page3/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/story",
        element: <Page4/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/registry",
        element: <Page5/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/recommendations",
        element: <Page6/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/rsvp",
        element: <Page7/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/faq",
        element: <Page8/>,
        errorElement: <ErrorPage/>,
      }
    ], 
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
