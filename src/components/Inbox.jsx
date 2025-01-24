import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckSquare, FaTag, FaUserFriends } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosRefresh,
  IoMdArrowDropdown,
} from "react-icons/io";
import { MdBrowserUpdated } from "react-icons/md";
import { RiInbox2Fill } from "react-icons/ri";
import { onSnapshot, orderBy } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "../firebase";
import Msg from "./Msg"
import { useDispatch, useSelector } from "react-redux";
import { setemail } from "../redux/Slicer";



function Inbox() {

  const emails = useSelector((store)=>store.app.allemails)
  const dispatch = useDispatch();
  const [mailnumber, setmailnumber] = useState(0);

  const promotionicons = [
    {
      icons: <RiInbox2Fill size={"1.3rem"} />,
      text: "Primary",
    },
    {
      icons: <FaTag size={"1.3rem"} />,
      text: "Promotion",
    },
    {
      icons: <FaUserFriends size={"1.3rem"} />,
      text: "Social",
    },
    {
      icons: <MdBrowserUpdated size={"1.3rem"} />,
      text: "Update",
    },
  ];

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("CreatedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allemails = snapshot.docs.map((e) => ({ ...e.data(), id: e.id }));
      console.log(allemails);

      dispatch(setemail(allemails));
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="h-screen w-full bg-white rounded ">
      <div className="h-8 w-full flex p-2 justify-between">
        <div className="left-icons flex gap-3 ">
          <FaCheckSquare size={"1.1rem"} />
          <IoMdArrowDropdown size={"1.1rem"} />
          <IoIosRefresh size={"1.1rem"} />
          <BsThreeDotsVertical size={"1.1rem"} />
        </div>
        <div className="right-icons flex ">
          <IoIosArrowBack size={"1.1rem"} />
          <IoIosArrowForward size={"1.1rem"} />
        </div>
      </div>
      {/* promotion */}
      <div className="h-16 w-full flex border-b-black border">
        {promotionicons.map((e, index) => (
          <div
            className={`${
              mailnumber === index
                ? "border-b-4 border-blue-500 text-blue-500"
                : "bg-white"
            } px-12 cursor-pointer flex items-center`}
            key={index}
            onClick={() => setmailnumber(index)}
          >
            <a>{e.icons}</a>
            <p className="text-l">{e.text}</p>
          </div>
        ))}
      </div>
        
        {
          emails && emails.map((e)=>{
            return (
              <Msg values={e}></Msg>
            )
          })
        }
     
    </div>
  );
}

export default Inbox;
