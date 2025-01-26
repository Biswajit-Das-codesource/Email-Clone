import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";
import Compose from "./components/Compose";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector((store)=>store.app.user)
  console.log(user)
  const reactrouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Inbox />,
        },
        {
          path: "/mail/:id",
          element: <Mail />,
        },
      ],
    },
  ]);


  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="h-screen w-full overflow-hidden">
          <Navbar />
          <RouterProvider router={reactrouter}></RouterProvider>
          <Compose />
        </div>
      )}
    </>
  );
}

export default App;
