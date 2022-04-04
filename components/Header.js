import React from "react";
import Image from "next/image";
const style = {
  button: `hover:bg-slate-400 hover:text-black hover:opacity-50  px-3 py-1 r mt-0 rounded-xl  flex transition delay-400 duration-1500 cursor-pointer`,
};

function Header() {
  return (
    <div>
      <div className="fixed">
        <div className="relative ">
          <div className=" justify-between   flex mt-4 p-0 ">
            <div className="object-cover ml-6 space-x-4">
              <Image
                className="justify-start "
                src="/logo.svg" 
                width={110}
                height={20}
              />
            </div>
            <div className=" items-center justify-center  flex font-semibold space-x-4 px-48 h-4 ">
              <h3 className={style.button}>Modal </h3>
              <h3 className={style.button}>Modal </h3>
              <h3 className={style.button}>Modal </h3>
              <h3 className={style.button}>Modal </h3>
              <h3 className={style.button}>SolarRoof</h3>
              <h3 className={style.button}> SolarPanels</h3>
            </div>
            <div className="justify-end items-center font-semibold flex space-x-4 mr-3 h-4 mx-10">
              <h3 className={style.button}>Shop</h3>
              <h3 className={style.button}>Account</h3>
              <h3 className={style.button}>Menu</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="absolute">
          <h1 className="  text-5xl font-semibold items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            Model3
          </h1>
          <p className="text-xl font-sans mt-6 mx-[450px]">Order Online For <span className="font-semibold border-b-[1px] hover:shadow-sm hover:border-b-2 border-black cursor-pointer ">Touchless Delivery</span></p>
          <div className="flex text-xl font-normal mt-72 space-x-5 mx-[450px]"> 
          <p className="text-white bg-[#202124] rounded-full px-10 py-1 ">Custom Order </p>
          <p className="text-black bg-[#D4DEEA] rounded-full px-10 space-x-10 mx-16 py-1 ">Custom Order </p>
          
          </div>
          <img src="/down-arrow.svg" className="  text-xl h-16 animate-bounce cursor-pointer mt-6   mx-[630px] "/>
          </div>
          <img
            src="/model-3.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>
        <div>
          <div className="absolute">
          <h1 className="  text-5xl font-semibold items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            ModelY
          </h1>
          <p className="text-xl font-sans mt-10 mx-[450px]">Order Online For <span className="font-semibold border-b-[1px] hover:shadow-sm hover:border-b-2 border-black cursor-pointer ">Touchless Delivery</span></p>
          <div className="flex text-xl font-normal mt-60 space-x-5 mx-[450px]"> 
          <p className="text-white bg-[#202124] rounded-full px-10 py-1 ">Custom Order </p>
          <p className="text-black bg-[#D4DEEA] rounded-full px-10 py-1 ">Custom Order </p>

          </div>
          </div>
          <img
            src="/model-y.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>

        <div>
          <div className="absolute">
          <h1 className="  text-5xl font-semibold items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            ModelS
          </h1>
          <p className="text-xl font-sans mt-10 mx-[450px]">Order Online For <span className="font-semibold border-b-[1px] hover:shadow-sm hover:border-b-2 border-black cursor-pointer ">Touchless Delivery</span></p>
          <div className="flex text-xl font-normal mt-60 space-x-5 mx-[450px]"> 
          <p className="text-white bg-[#202124] rounded-full px-10 py-1 ">Custom Order </p>
          <p className="text-black bg-[#D4DEEA] rounded-full px-10 py-1 ">Custom Order </p>

          </div>
          </div>
          <img
            src="/model-s.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>

        <div>
          <div className="absolute">
          <h1 className="  text-5xl font-semibold items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            ModelX
          </h1>
          <p className="text-xl font-sans mt-10 mx-[450px]">Order Online For <span className="font-semibold border-b-[1px] hover:shadow-sm hover:border-b-2 border-black cursor-pointer ">Touchless Delivery</span></p>
          <div className="flex text-xl font-normal mt-60 space-x-5 mx-[450px]"> 
          <p className="text-white bg-[#202124] rounded-full px-10 py-1 ">Custom Order </p>
          <p className="text-black bg-[#D4DEEA] rounded-full px-10 py-1 ">Custom Order </p>

          </div>
          </div>
          <img
            src="/model-x.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>

        <div>
          <div className="absolute">
          <h1 className="  text-5xl font-semibold items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            Solar Panel
          </h1>
          <p className="text-xl font-sans mt-10 mx-[450px]">Lowest Cost Solar Panels in America</p>
          <div className="flex text-xl font-light mt-60 space-x-5 mx-[450px]"> 
          <p className="text-white bg-[#202124] rounded-full px-10 py-1 ">Order Now</p>
          <p className="text-black bg-[#D4DEEA] rounded-full px-10 py-1 ">Learn More </p>

          </div>
          </div>
          <img
            src="/solar-panel.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>

        <div className="absolute">
          <h1 className="  text-5xl font-semibold items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            Solar Roofs
          </h1>
          <p className="text-xl font-sans mt-10 mx-[450px]">Produce Clean Energy from Your Roof</p>
          <div className="flex text-xl font-normal mt-60 space-x-5 mx-[450px]"> 
          <p className="text-white bg-[#202124] rounded-full px-10 py-1 ">Custom Order </p>
          <p className="text-black bg-[#D4DEEA] rounded-full px-10 py-1 ">Custom Order </p>

          </div>
          </div>
          <img
            src="/solar-roof.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>

        <div>
          <div className="absolute">
          <h1 className="  text-5xl  items-center justify-items-center place-items-center mt-24 mx-[550px] ">
            Accessories
          </h1>
         
          <div className="flex text-xl font-normal mt-80 space-x-5 mx-[500px] m-auto"> 
          <p className="text-white bg-[#202124] rounded-full px-20 py-2 ">Shop Now </p>
         

          </div>
          </div>
          <img
            src="/accessories.jpg"
            className="object-cover mt-0 w-full h-screen  static"
            alt=""
          />
        </div>
      
        
      </div>
    
  );
}

export default Header;
