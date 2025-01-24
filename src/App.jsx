import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";
import Compose from "./components/Compose";

function App() {
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
      <div className="h-screen w-full overflow-hidden">
        <Navbar />
        <RouterProvider router={reactrouter}>
          
        </RouterProvider>
        <Compose/>
      </div>
    </>
  );
}

export default App;
