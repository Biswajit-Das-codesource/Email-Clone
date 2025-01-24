import Avatar from "react-avatar";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { RiGeminiFill } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className="h-[4rem] w-full bg-slate-200 flex  items-center justify-around">
        <GiHamburgerMenu className="text-[2rem]" />

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          height="110px"
          width="110px"
        />

        <div className="search flex h-[3rem] w-[50%] bg-white rounded-full items-center">
          <CiSearch className="text-[2rem]" />
          <input
            type="text"
            className="w-[100%] h-[2.5rem] bg-transparent outline-none"
            placeholder="Search your Mail"
          ></input>
        </div>


        <div className="extra w-[20%] bg-transparent h-[2.5rem] flex justify-around items-center">
        <CiCircleQuestion size={"1.6rem"}/>
        <IoIosSettings size={"1.6rem"}/>
        <PiDotsNineBold size={"1.6rem"}/>
        <RiGeminiFill size={"1.6rem"} />
        <Avatar src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" size="40" round={true}></Avatar>

        </div>
      </div>
    </>
  );
}

export default Navbar;
