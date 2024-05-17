"use client";

import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import UpdateInfo from "../components/Profile/UpdateInfo";
import Security from "../components/Profile/Security";

type Tab = "updateInfo" | "security";

const Page = () => {
  const [activeTab, setActiveTab] = useState<Tab>("updateInfo");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <h1 className='text-center font-bold text-3xl flex justify-center mb-2 py-5 bg-gray-800 text-white'>
          Nav bar
        </h1>
      </div>
      <div className='mt-20 flex flex-col'>
        <div className='text-center text-4xl mb-10 font-bold'>
          <h1>Profile</h1>
        </div>

        <div className='p-4'>
          {/* Tab Navigation */}
          <div className='flex mb-4 ml-20'>
            <button
              className={`text-sm flex mr-4 px-4 py-2 font-semibold text-lg ${activeTab === "updateInfo" ? "text-green-500 border-b-2 border-green-500 " : "text-gray-500"}`}
              onClick={() => handleTabClick("updateInfo")}
            >
              <FiUser className='size-6 mr-2' />
              Update Info
            </button>
            <button
              className={`flex text-sm px-4 py-2 font-semibold text-lg ${activeTab === "security" ? "text-green-500 border-b-2 border-green-500" : "text-gray-500"}`}
              onClick={() => handleTabClick("security")}
            >
              <MdOutlineLock className='size-6 mr-2' />
              Security
            </button>
          </div>

          {/* Render Components Conditionally */}
          <div className=''>
            {activeTab === "updateInfo" && <UpdateInfo />}
            {activeTab === "security" && <Security />}
          </div>
        </div>
      </div>
      <div className='mt-auto bg-gray-800 text-white p-4'>
        <h1 className='text-center font-bold text-3xl '>Footer</h1>
      </div>
    </div>
  );
};

export default Page;
