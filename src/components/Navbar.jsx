import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { open, setsearchtext } from "../redux/Slicer";

function Navbar() {
  const [searchtext, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setsearchtext(searchtext));
  }, [searchtext]);


  

  return (
    <>
      <div className="h-[4rem] w-full bg-slate-200 flex items-center justify-between px-4 md:justify-around">
        {/* Hamburger Menu */}
        <GiHamburgerMenu
          className="text-[2rem] cursor-pointer md:hidden"
          onClick={() => dispatch(open(true))}
        />

        {/* Logo (Hidden on smaller screens) */}
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          height="110px"
          width="110px"
          className="hidden md:block" // Hide on smaller screens, show on medium+
        />

        {/* Search Bar */}
        <div className="search flex h-[3rem] w-[50%] bg-white rounded-full items-center">
          <CiSearch className="text-[2rem]" />
          <input
            type="text"
            className="w-[100%] h-[2.5rem] bg-transparent outline-none"
            placeholder="Search your Mail"
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>

        {/* Extra Icons */}
        <div className="extra w-[20%] bg-transparent h-[2.5rem] flex justify-around items-center">
          <Avatar
            src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
            size="40"
            round={true}
          ></Avatar>
        </div>
      </div>
    </>
  );
}

export default Navbar;
