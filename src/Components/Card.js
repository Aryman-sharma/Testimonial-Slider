import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative">
      <div  className="absolute top-[-7rem] z-[10]  mx-auto">
        <img className="h-[140px] w-[140px] aspect-square rounded-full z-[25]"src={review.image} ></img>
        <div className="h-[140px] w-[140px] aspect-square rounded-full  absolute bg-violet-600 z-[-20] top-[-0.2rem] left-[0.5rem]  "></div>
      </div>

      <div className=" text-center mt-7">
        <p className="font-bold text-2xl capitalize" >{review.name}</p>
      </div>

      <div className=" text-center mt-1">
        <p className="text-violet-400 uppercase">{review.job}</p>
      </div>

      <div className="flex text-violet-500 mx-auto mt-5">
        <FaQuoteLeft/>
      </div>

      <div className="tex-center mt-4 text-slate-700">{review.text}</div>

      <div><FaQuoteRight className="flex text-violet-400 mx-auto mt-5"/></div>

  
    
      
    </div>
  );
}

export default Card;
