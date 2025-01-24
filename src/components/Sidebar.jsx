import { CiStar } from "react-icons/ci";
import { FaPencilAlt, FaTelegramPlane } from "react-icons/fa";
import { RiAlarmSnoozeLine, RiInbox2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../redux/Slicer";

function Sidebar() {
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
  const data = useSelector((store)=>store.app.value)
  const dispatch=useDispatch()
  console.log(data)

  return (
    <>

      <div className="w-[18%] h-screen bg-slate-200 ">
        <div className="p-6">
          <button className="flex items-center rounded-2xl bg-blue-200 p-4 text-xl font-mono hover:shadow" onClick={()=>dispatch(open(!data))}>
            <FaPencilAlt size={"1.2rem"} />
            Compose
          </button>

          <div className="h-auto w-full border-x flex flex-col gap-4 mt-4">
          {datas.map((e) => {
            return (
              <>
                <div className="w-[100%] flex gap-6 items-center hover:bg-blue-300 ">
                 <a>{e.icon}</a>
                  <button className="py-2">{e.text}</button>
                </div>
              </>
            );
          })}
        </div>
        </div>

     
      </div>
    </>
  );
}

export default Sidebar;
