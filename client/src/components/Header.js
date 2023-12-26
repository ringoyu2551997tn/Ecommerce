import React from "react"
import { logoDark } from "../assets/index"
import { cartImg } from "../assets/index";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
        <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
            <Link to="/">
                <div>
                    <img className="w-28 ml-20" src={logoDark} alt="logoDark" />
                </div>
            </Link>
            <div className="mr-40 flex items-center gap-8">
                <ul className="flex items-center gap-8">
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Home</li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Pages</li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Shop</li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Element</li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer">Blog</li>
                </ul>
                  <Link to="/cart">
                      <div className="relative">
                        <img className="w-6" src={cartImg} alt="cartImg" />
                          <span className="absolute w-6 top-2 left-0 text-sm flex-sm flex items-center justify-center font-semibold">
                            {productData.length}
                          </span>
                      </div>
                  </Link>
                  <Link to="/login">
                    {
                      <img  
                            className="w-8 h-8 rounded-full"
                            src={
                              userInfo
                              ? userInfo.image
                              : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            }
                            alt="user logo"
                      />
                    }
                  </Link>
                  {
                    userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
                  }
          </div>
        </div>
    </div>
  );
};

export default Header