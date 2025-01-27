import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaShare } from "react-icons/fa";
import { IoIosInformationCircleOutline, IoIosMailUnread } from "react-icons/io";
import { MdDelete, MdOutlineSimCardDownload } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function Mail() {
    const navigate = useNavigate()
    const email = useSelector((store)=>store.app.selectedmails)
    console.log(email)

    const deletemail = async(id) =>{
      try{
        await deleteDoc(doc(db,"emails",id))
        navigate("/")
      }
      catch(err){
        console.log(err)
      }
    }

    const {id} =useParams()

    function handleback(){
        navigate("/")
    }
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="icons flex gap-6 p-4">
        <FaArrowLeft size={"1.2rem"} onClick={handleback} className="cursor-pointer"/>
        <MdOutlineSimCardDownload size={"1.2rem"} />
        <IoIosInformationCircleOutline size={"1.2rem"} />
        <MdDelete size={"1.2rem"} onClick={()=>deletemail(id)} className="cursor-pointer"/>
        <IoIosMailUnread size={"1.2rem"} />
        <FaShare size={"1.2rem"} />
        <BsThreeDotsVertical size={"1.2rem"} />
      </div>

      <div className="read h-screen w-full">
        <div className="subject">
          <h1 className="text-2xl font-bold p-4">{email?.subject}</h1>

          <p className="text-l p-4">{email?.to}<br/> <span>to me</span></p>
        </div>

        <h1 className="p-4">{email?.message}</h1>
        <Compose/>
      </div>
    </div>
  );
}

export default Mail;
