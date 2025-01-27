import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { open, setsearchtext, setuser } from "../redux/Slicer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [searchtext, setText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setsearchtext(searchtext));
  }, [searchtext]);


  const user = useSelector((store)=>store.app.user)
   console.log(user)
  async function handleSignOut() {
    try {
      await signOut(auth);
      dispatch(setuser(null))
      console.log("User signed out successfully");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  }

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
        <div className="extra relative w-[20%] bg-transparent h-[2.5rem] flex justify-around items-center">
          {/* Avatar */}
          <div
            className="relative cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Avatar
              src={`${user.photourl}`}
              size="40"
              round={true}
            />
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-12 right-0 w-40 bg-white border border-gray-300 shadow-md rounded-md z-10">
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
