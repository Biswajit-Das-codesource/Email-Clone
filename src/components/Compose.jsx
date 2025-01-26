import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../redux/Slicer";
import { FaShare } from "react-icons/fa";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Compose() {
  const [formdata, setformdata] = useState({
    to: "",
    subject: "",
    message: "",
  });

  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setformdata({ ...formdata, [name]: value });
  }

  const data = useSelector((store) => store.app.value);
  const dispatch = useDispatch();

  function handlecancel() {
    dispatch(open(false));
  }

  async function handlesubmit(e) {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formdata.to,
      subject: formdata.subject,
      message: formdata.message,
      CreatedAt: serverTimestamp(),
    });
    dispatch(open(false));
  }

  return (
    <div
      className={`${
        data ? "block" : "hidden"
      } fixed bottom-4 right-4 md:right-6 h-[90%] w-[90%] md:w-1/3 border border-slate-400 shadow-lg bg-white z-30 rounded-lg`}
    >
      {/* Header */}
      <div className="nav h-12 flex items-center bg-slate-300 justify-between px-4 rounded-t-lg">
        <h2 className="font-medium text-lg">New Message</h2>
        <MdCancel
          size={"1.5rem"}
          className="cursor-pointer hover:text-red-500"
          onClick={handlecancel}
        />
      </div>

      {/* Form */}
      <form onSubmit={handlesubmit} className="flex flex-col gap-2 p-4">
        <input
          type="email"
          className="border border-slate-300 p-2 outline-none rounded focus:ring focus:ring-blue-300"
          placeholder="To"
          onChange={handlechange}
          value={formdata.to}
          name="to"
        />

        <input
          type="text"
          className="border border-slate-300 p-2 outline-none rounded focus:ring focus:ring-blue-300"
          placeholder="Subject"
          onChange={handlechange}
          value={formdata.subject}
          name="subject"
        />

        <textarea
          className="border border-slate-300 p-2 outline-none rounded resize-none focus:ring focus:ring-blue-300"
          rows={8}
          placeholder="Type your message..."
          onChange={handlechange}
          value={formdata.message}
          name="message"
        ></textarea>

        <button
          className="h-10 w-full md:w-20 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
          type="submit"
        >
          Send
          <FaShare size={"1.2rem"} />
        </button>
      </form>
    </div>
  );
}

export default Compose;
