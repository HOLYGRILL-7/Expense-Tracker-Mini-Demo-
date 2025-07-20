import React from "react";
import FormSec from "./FormSec";
import ListSec from "./ListSec";
import { Calendar } from "lucide-react";

function Home() {
  const handlePlanClick = () => {
    console.log("Plan button clicked!");
  };
  return (
    <div className="flex justify-center items-center h-screen gap-6 relative">
      <div className="botton-Section">
        <button
          onClick={handlePlanClick}
          className="bg-white text-black font-semibold px-6 py-3 mt-5 w-50 rounded-2xl border border-gray-200 absolute top-20 left-40 -translate-x-3/5
             shadow-[4px_6px_15px_rgba(0,0,0,0.15)] rotate-[-1deg] skew-x-[-10deg]
             transition-all duration-300 ease-in-out transform
             hover:-translate-y-1 hover:shadow-[6px_8px_20px_rgba(0,0,0,0.18)] hover:bg-gray-50
             active:scale-95 cursor-pointer flex items-center justify-center gap-2"
        >
          <Calendar size={18} />
          Plan
        </button>
      </div>
      <ListSec />
      <FormSec />
      {/* Remove <Outlet /> since you're not using nested routes */}
    </div>
  );
}

export default Home;
