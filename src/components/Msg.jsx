import React from "react";
import { CiStar } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setselectedemail } from "../redux/Slicer";

function Msg({ values }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlenavigate() {
    dispatch(setselectedemail(values));
    navigate(`/mail/${values.id}`);
  }

  return (
    <div
      className="w-full flex items-center justify-between border-b border-b-slate-300 p-2 cursor-pointer hover:bg-gray-100"
      onClick={handlenavigate}
    >
      {/* Left: Checkbox and Message */}
      <div className="flex items-center gap-3 w-[70%] md:w-[85%]">
        {/* Checkbox and Star hidden on mobile */}
        <div className="hidden sm:flex gap-2">
          <MdCheckBoxOutlineBlank size={"1.3rem"} />
          <CiStar size={"1.3rem"} />
        </div>
        <p className="text-sm sm:text-base overflow-hidden text-ellipsis w-full text-slate-800 h-6">{values?.message}</p>
      </div>

    
      {/* Right: Timestamp */}
      <div className="text-xs sm:text-sm">
        <p>
          {new Date(values?.CreatedAt?.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
}

export default Msg;
