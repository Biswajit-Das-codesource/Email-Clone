import { CiStar } from "react-icons/ci";
import { FaPencilAlt, FaTelegramPlane } from "react-icons/fa";
import { RiAlarmSnoozeLine, RiInbox2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../redux/Slicer";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const datas = [
    {
      icon: <RiInbox2Fill size={"1.5rem"} />,
      text: "Inbox",
    },
    {
      icon: <CiStar size={"1.5rem"} />,
      text: "Starred",
    },
    {
      icon: <RiAlarmSnoozeLine size={"1.5rem"} />,
      text: "Snoozed",
    },
    {
      icon: <FaTelegramPlane size={"1.5rem"} />,
      text: "Sent",
    },
  ];

  const isopen = useSelector((store)=>store.app.value)


  const dispatch=useDispatch()

  function handleopen(){
    
  console.log(isopen)
    dispatch(open(!isopen))
  }


  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <GiHamburgerMenu size={"1.5rem"} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-slate-200 p-6 shadow-lg transform transition-transform duration-300 ease-in-out z-40 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:static md:w-[18%] md:translate-x-0`}
      >
        <button
          className="flex items-center rounded-2xl bg-blue-200 p-4 text-xl font-mono hover:shadow w-full"
          onClick={handleopen} // Close the sidebar after clicking
        >
          <FaPencilAlt size={"1.2rem"}/>
          <span className="ml-2">Compose</span>
        </button>

        <div className="h-auto w-full border-x flex flex-col gap-4 mt-4">
          {datas.map((e, index) => (
            <div
              key={index}
              className="w-full flex gap-6 items-center hover:bg-blue-300 p-2 rounded-lg"
            >
              <a>{e.icon}</a>
              <button className="py-2">{e.text}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop (for small screens) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
