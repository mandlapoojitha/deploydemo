import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black h-56  flex justify-center items-center">
      <div className="w-4/5 h-full flex flex-row justify-start items-center text-white">
        <div className="div1 w-1/3 h-full  pt-7">
          <h1 className="text-lg font-bold">ABOUT</h1>
          <p className="text-left mt-2 text-sm">
            DevByteHub.com is a blog about web development from the makers
            of the popular web design blog WebdesignerDepot.com Founded in 2024,
            we focus on the latest trends, tutorials, opinion articles as well
            as tips and tricks to empower our readers to become better web
            developers.
          </p>
        </div>
        <div className="div-2 w-1/3 h-full  pt-7 flex flex-col  items-center">
          <h1 className="text-lg font-bold">NAVIGATION</h1>
          <div className=" mt-2 text-sm  flex flex-col">
            <Link href="/about">About</Link>
            <Link href="/advertise">Advertise</Link>
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/contact">About</Link>
         

          </div>
          
        </div>
        <div className="div-3 w-1/3 h-full pt-7">
          <h1 className="text-lg font-bold">FOLLOW US:</h1>
          <p className=" mt-2 text-sm">
            Subscribe to our RSS feed or follow us on Facebook and Twitter for
            the latest content.
          </p>
         
          <div className=" mt-4 flex flex-row justify-start items-center gap-4 ml-4">
          {/* <img className="cursor-pointer" src={`./facebookicon.png`} alt="no image" width={30} height={30}/>
          <img  className="cursor-pointer" src={`./twittericon.png`} alt="no image" width={30} height={30}/>
          <img  className="cursor-pointer" src={`./linkedinicon.png`} alt="no image" width={30} height={30}/> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
