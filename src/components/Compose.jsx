import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../redux/Slicer";
import { FaShare } from "react-icons/fa";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Compose() {

    const [formdata,setformdata] = useState({
        to:"",
        subject:"",
        message:""
    })

    function handlechange(e){
        console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        setformdata({...formdata,[name]:value})
    }

  const data = useSelector((store) => store.app.value);
  console.log(data);

  const dispatch = useDispatch();
  function handlecancel(){
    dispatch(open(false))
  }

  async function handlesubmit(e){
    e.preventDefault()
    console.log(formdata) 
    await addDoc(collection(db,"emails"),{
      to:formdata.to,
      subject:formdata.subject,
      message:formdata.message,
      CreatedAt:serverTimestamp()
    })
    dispatch(open(false))
  }

  return (
    <div
      className={`${
        data ? "block" : "hidden"
      } absolute bottom-4 right-6 h-[25rem] w-1/3 border-b-slate-400 border-2    shadow-black z-30 `}
    >
      <div className="nav h-10 flex items-center bg-slate-300 justify-between p-4">
        <h2 className="">New Message</h2>
        <MdCancel size={"1.7rem"} onClick={handlecancel}/>
      </div>

      <form onSubmit={handlesubmit}>
        <input type="text" className="border-b-slate-500 border-2 p-2 outline-none w-full" placeholder="To" onChange={handlechange} value={formdata.to} name="to"/>
        <input type="text" className="border-b-slate-500 border-2 p-2 outline-none w-full" placeholder="From" onChange={handlechange} value={formdata.subject} name="subject"/>

        <textarea className="w-full resize-none outline-none" cols={"30"} rows={"9"} placeholder="Type here .. .. .. . . " onChange={handlechange} value={formdata.message} name="message">

        </textarea>

        <button className="h-10 w-20 flex  bg-blue-500 justify-center  items-center text-white rounded gap-2 " type="submit">
            Send
        <FaShare size={"1.2rem"}/>
        </button>
      </form>
    </div>
  );
}

export default Compose;
