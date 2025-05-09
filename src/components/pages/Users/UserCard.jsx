import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Textarea } from '@/components/ui/textarea';
import { IoCallSharp } from "react-icons/io5";
import { FaMessage } from 'react-icons/fa6';
import { MdWifiCalling3 } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { useCompleteCallMutation, useCompleteMessageMutation } from '@/components/Redux/services/Users/Users';
import { toast } from 'react-toastify';
const UserCard = ({ user, num }) => {
  const [showText, setShowText] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [completeCall] = useCompleteCallMutation()
  const [completeMessage] = useCompleteMessageMutation()
//   const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const contentRef = useRef(null);
  
  const text = `আসসালামু আলাইকুম ${user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : ''},

CodeKPI Programming Club-এর ২০২৫ ওরিয়েন্টেশন আসছে!
রবিবার, দুপুর ১১:০০ – কলেজ অডিটোরিয়ামে।
আপনি ও আপনার ডিপার্টমেন্টের বন্ধুদের আমন্ত্রণ জানানো হলো।
মেসেঞ্জার গ্রুপে যুক্ত হয়ে যান: https://m.me/j/AbagdR7rkHX34idx/

ধন্যবাদ;`;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = showText ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [showText]);

  const handleCopy = (content, setCopyState) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopyState(true);
        setTimeout(() => setCopyState(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };
  const callCompletePart = async(id)=>{
    if(user?.call == true){
      toast.error("You have already completed this user")
    }
    try{
      await completeCall(id).unwrap()
      toast.success("Successfully completed Call")
    }catch(err){
      toast.error("Something went wrong")
      console.log(err)
    }
  }
  const MessageCompletePart = async(id)=>{
    try{
      if(user?.message == true){
        toast.error("You have already completed this user")
      }
      await completeMessage(id).unwrap()
      toast.success("Successfully completed Call")
    }catch(err){
      toast.error("Something went wrong")
      console.log(err)

    }
  }

  return (
     <>
      <div 
        onClick={() => setShowText(!showText)} 
        className="p-3 rounded-lg bg-primary text-white flex items-center justify-between cursor-pointer"
      >
        <span>({num}) {user?.name}</span>
        <div className="flex gap-3 items-center">
          {
            user?.call ? <MdWifiCalling3 className="text-xl"/>:<IoCallSharp className="text-xl"/>
          }
         {
          user?.message ? <MdMessage  className="text-xl"/>:   <FaMessage  className="text-xl"/>
         }
       
         <IoIosArrowDown className={`transition-transform duration-300 ${showText ? 'rotate-180' : ''}`} />
        </div>

      </div>
      <div
        className="bg-white rounded-lg overflow-hidden transition-all duration-500"
        ref={contentRef}
        style={{ opacity: showText ? 1 : 0 }}
      >
        <div className="p-3">
          <Textarea
            className="w-full rounded-md p-3 border border-gray-300 h-[220px]"
            value={text}
            readOnly
          />
          <div className="flex gap-2">
          <button
            onClick={() => handleCopy(text, setCopied)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>
          <button
            onClick={() =>  MessageCompletePart(user._id)}
            className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
          >
            {user?.message ? "Done" :"Complete"}
          </button>
          </div>
         
         
          <input
            type="text"
            className="mt-4 w-full p-2 border border-gray-300 rounded"
            placeholder="Enter phone number"
            value={user.phone}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="flex gap-3">
                      <button
            onClick={() => handleCopy(user.phone, setCopiedPhone)}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
            disabled={!user.phone}
          >
            {copiedPhone ? "Copied!" : "Copy Number"}
          </button>
          <button
            onClick={() => callCompletePart(user._id)}
            className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
          >
            {user?.call ? "Done" :"Complete"}
          </button> 
          </div>

        </div>
      </div>
    </>
  );
};

export default UserCard;