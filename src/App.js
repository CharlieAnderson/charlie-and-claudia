import './App.css';
import NavBar from "./components/NavBar"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Page3 from "./routes/page3";
import Page4 from "./routes/page4";
import Page5 from "./routes/page5";
import ErrorPage from "./routes/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
    errorElement: <ErrorPage/>,
  },
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
  }
  
]);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
