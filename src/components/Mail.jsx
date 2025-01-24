import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaShare } from "react-icons/fa";
import { IoIosInformationCircleOutline, IoIosMailUnread } from "react-icons/io";
import { MdDelete, MdOutlineSimCardDownload } from "react-icons/md";
import { useNavigate } from "react-router";
import Compose from "./Compose";

function Mail() {
    const navigate = useNavigate()

    function handleback(){
        navigate("/")
    }
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="icons flex gap-6 p-4">
        <FaArrowLeft size={"1.2rem"} onClick={handleback} className="cursor-pointer"/>
        <MdOutlineSimCardDownload size={"1.2rem"} />
        <IoIosInformationCircleOutline size={"1.2rem"} />
        <MdDelete size={"1.2rem"} />
        <IoIosMailUnread size={"1.2rem"} />
        <FaShare size={"1.2rem"} />
        <BsThreeDotsVertical size={"1.2rem"} />
      </div>

      <div className="read h-screen w-full">
        <div className="subject">
          <h1 className="text-2xl font-bold p-4">Subject</h1>

          <p className="text-l p-4">biswajit9348@gmail.com<br/> <span>to me</span></p>
        </div>

        <h1 className="p-4">Message</h1>
        <Compose/>
      </div>
    </div>
  );
}

export default Mail;
