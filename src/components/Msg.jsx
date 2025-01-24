import React from "react";
import { CiStar } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useNavigate } from "react-router";
import Compose from "./Compose";

function Msg({values}) {
  console.log(values)
    const navigate = useNavigate()

    function handlenavigate(){
        navigate("/mail/dkvnkd")
    }

  return (
    <div className="h-8 w-full flex items-center justify-start border border-b-black gap-4 cursor-pointer hover:shadow" onClick={handlenavigate}>
      <div className="checkbox">
        <MdCheckBoxOutlineBlank size={"1.3rem"} />
      </div>

      <div className="star">
        <CiStar size={"1.3rem"} />
      </div>
      <div className="text w-auto">
        <p className="overflow-hidden w-auto">{values?.message}</p>
      </div>

      <div className="flex-none">
        <p className="">{new Date(values?.CreatedAt?.seconds*1000).toUTCString()}</p>
      </div>
       
    </div>
    
  );
}

export default Msg;
