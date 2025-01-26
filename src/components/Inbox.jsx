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
import Msg from "./Msg";
import { useDispatch, useSelector } from "react-redux";
import { setemail } from "../redux/Slicer";

function Inbox() {
  const emails = useSelector((store) => store.app.allemails);
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

  const search = useSelector((store) => store.app.searchtext);
  const allemail = useSelector((store) => store.app.allemails);

  const [filterdata, setfilterdata] = useState(allemail);

  useEffect(() => {
    const filtereddata = allemail?.filter((e) =>
      e?.to?.toLowerCase().includes(search.toLowerCase())
    );

    setfilterdata(filtereddata);
  }, [search, allemail]);

  return (
    <div className="h-screen w-full bg-white rounded">
      {/* Header */}
      <div className="h-10 w-full flex p-2 justify-between items-center border-b">
        <div className="left-icons flex gap-3">
          <FaCheckSquare size={"1.1rem"} className="cursor-pointer" />
          <IoMdArrowDropdown size={"1.1rem"} className="cursor-pointer" />
          <IoIosRefresh size={"1.1rem"} className="cursor-pointer" />
          <BsThreeDotsVertical size={"1.1rem"} className="cursor-pointer" />
        </div>
        <div className="right-icons flex gap-2">
          <IoIosArrowBack
            size={"1.1rem"}
            className="cursor-pointer text-gray-600"
          />
          <IoIosArrowForward
            size={"1.1rem"}
            className="cursor-pointer text-gray-600"
          />
        </div>
      </div>

      {/* Promotions */}
      <div className="h-16 w-full flex border-b overflow-x-auto">
        {promotionicons.map((e, index) => (
          <div
            className={`${
              mailnumber === index
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-700"
            } px-4 md:px-8 flex items-center cursor-pointer whitespace-nowrap`}
            key={index}
            onClick={() => setmailnumber(index)}
          >
            <a>{e.icons}</a>
            <p className="text-sm md:text-l ml-2">{e.text}</p>
          </div>
        ))}
      </div>

      {/* Messages */}
      <div className="overflow-y-auto h-[calc(100vh-8rem)] p-4">
        {filterdata &&
          filterdata.map((e) => {
            return <Msg key={e.id} values={e} />;
          })}
      </div>
    </div>
  );
}

export default Inbox;
