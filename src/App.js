import "./App.css";
import AddInstitute from "./Institute/AddInstitute";
import Institute from "./Institute/Institute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateInstitute from "./Institute/UpdateInstitute";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Institute />,
    },
    {
      path: "/addinstitute",
      element: <AddInstitute />,
    },
    {
      path: "/update/:id",
      element: <UpdateInstitute />,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
