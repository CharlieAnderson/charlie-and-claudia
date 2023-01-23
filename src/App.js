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
import ErrorPage from "./routes/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Page1/> },
      {
        path: "/page1",
        element: <Page1/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/page2",
        element: <Page2/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/page3",
        element: <Page3/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/page4",
        element: <Page4/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/page5",
        element: <Page5/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/page6",
        element: <Page6/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/page7",
        element: <Page7/>,
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
