import Card from "./Card";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";

function Testimonials(props) {
  let reviews = props.reviews;
  let[index,setIndex]=useState(0);

  function LeftShiftHandler ()
  {
   if(index - 1 < 0)
    {
        setIndex(reviews.length - 1);
    }
    else
    {
        setIndex(index-1);
    }
  }
  function RightShiftHandler ()
  {
      if(index+1 >= reviews.length)
      {
        setIndex(0);
      }
      else
      {
        setIndex(index + 1);
      }
  }
  function SurpriseMeHandler()
  {
   let randomIndex= Math.floor(Math.random()*reviews.length);
   setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-500 hover:shadow-xl rounded-md">

      <div>
        <Card review={reviews[index]} />
      </div>

      <div className="flex text-3xl mt-7 gap-3 text-violet-400 bold justify-center ">
        <button onClick={LeftShiftHandler}
        className="cursor-pointer hover:text-violet-500">
          <FiChevronLeft />
        </button>
        <button  onClick={RightShiftHandler}
        className="cursor-pointer hover:text-violet-500">
          <FiChevronRight />
        </button>
      </div>
        
        
      <div>
        <button onClick={SurpriseMeHandler}
          className=" bg-violet-400 hover:text-violet-500 transition-all duration-200
       cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4"
        >
          Surprise Me
        </button>
      </div>

    </div>
  );
}

export default Testimonials;
