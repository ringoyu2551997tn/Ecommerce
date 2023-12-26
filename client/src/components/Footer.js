import React from 'react'
import {ImGithub} from "react-icons/im";
import { ImFacebook } from 'react-icons/im';
import { ImYoutube } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import {MdLocationOn}from "react-icons/md";
import {BsPersonFill, BsPaypal}from "react-icons/bs";
import {FaHome}from "react-icons/fa";
import { logoLight, paymentLogo } from '../assets';


const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont' >
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-32' src={logoLight} alt='logoLight' />
                <p className='text-while text-sm tracking-wide'>ReactBD.com</p>
                <img className='w-56' src={paymentLogo} alt='paymentLogo'/>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                    <ImYoutube className='hover:text-white duration-300 cursor-pointer' />
                    <ImFacebook className='hover:text-white duration-300 cursor-pointer' />
                    <ImTwitter className='hover:text-white duration-300 cursor-pointer' />
                    <ImInstagram className='hover:text-white duration-300 cursor-pointer' />
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                <div className="text-base flex flex-col gap-2">
                    <p>MBD,Ruwi, Muscat-Oman</p>
                    <p>Mobile: 00968 97859628</p>
                    <p>Phone: 00968 24769821</p>
                    <p>E-mail: bazar@gmail.com</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <div className='flex flex-col gap-2 text-base'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <BsPersonFill/>
                        </span>{""}
                        My Account
                    </p>

                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <BsPaypal/>
                        </span>{""}
                        Check Out
                    </p>

                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <FaHome/>
                        </span>{""}
                        Order Tracking
                    </p>

                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <MdLocationOn/>
                        </span>{""}
                        Help & Support
                    </p>    
                </div>   
            </div>
            <div className='flex flex-col justify-center'>
                <input 
                    className='bg-transparent border px-4 py-2 text-sm'
                    placeholder='e-mail'
                    type='text'
                />
                <button className='text-sm border text-while border-t-0 hover:bg-gray-900'>
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer