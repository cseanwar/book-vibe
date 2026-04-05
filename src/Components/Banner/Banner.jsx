import React from "react";
import bookImg from "../../assets/Dating-playbook-for-men.png"

const Banner = () => {
  return (
    <div className="hero bg-[#13131310] min-h-[70vh] mt-12 rounded-3xl container mx-auto px-30">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img
          src={bookImg}
        />
        <div>
          <h1 className="text-[56px] font-bold leading-21 mb-12 text-[#131313]">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-[#FFFFFF]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
