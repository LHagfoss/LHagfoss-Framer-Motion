"use client"

import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import { motion, easeIn } from "framer-motion"

import Navbar from "@components/Navbar"
import image from "@assets/balls.png"
import ontopImage from "@assets/7DaHt-ZzFPAIXgTr8NsZ--transformed.png"
import draw from "@assets/drag.svg"
import customazation from "@assets/empty.svg"
import mail from "@assets/mail.svg"
import google from "@assets/google.svg"
import facebook from "@assets/facebook.svg"
import vercel from "./favicon.ico"

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const github = () => { window.open("https://github.com/lhagfoss") }

  return (
    <>
      <Navbar />
      <div className="bg-black w-[100vw] h-[100vh] flex flex-col justify-center items-center p-5">
        <div className="w-full h-full rounded-[5vh] overflow-hidden flex gap-5">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1  }} transition={{ duration: 1, ease: 'easeIn', }} className='flex-1'
          >
            <div className="bg-[#111] w-full h-full rounded-[4vh] overflow-hidden flex justify-center items-center p-10">
              <div className="relative aspect-[5/8] h-[90%] flex flex-col items-center p-10 gap-10">
              <div onClick={github} className="text-[#777] bg-[#222] animate-bounce rounded-full py-1 px-5 shadow-lg borderHovered border border-[#444] flex gap-2 justify-center items-center cursor-pointer"><div title='Ready for Work' className="bg-green-600 border border-green-500 rounded-full h-[15px] w-[15px]"></div>UI / UX Designer -  LHagfoss</div>
                <h1 className="text-white text-[40px] font-bold">Login Account</h1>
                <p className="text-gray-200 text-[15px]">Please enter your info to your personal or work Account</p>
                <div className="w-full flex justify-center items-center gap-5">
                  <div title='Login using Google' className="bg-[#222] hover:border-white duration-200 shadow-lg border cursor-pointer border-[#444] py-3 px-7 flex justify-center items-center rounded-[1vh]"><Image src={google} alt='' className='w-[30px]'></Image></div>
                  <div title='Login using FaceBook' className="bg-[#222] hover:border-white duration-200 shadow-lg border cursor-pointer border-[#444] py-3 px-7 flex justify-center items-center rounded-[1vh]"><Image src={facebook} alt='' className='w-[30px]'></Image></div>
                </div>
                <div className="w-full h-[1px] bg-[#444] flex justify-center items-center"><p className=" bg-[#111] py-3 px-3 text-[#444] text-[18px]">Or</p></div>
                <div className="w-full flex flex-col gap-5">
                  <input type="text" name="" id="" className='hover:border-gray-400 duration-200 shadow-lg focus:border-white w-full h-[60px] border border-[#444] rounded-[1vh] text-white p-5 bg-[#222] focus:outline-none focus:text-white' placeholder='Name' />
                  <input type="email" name="" id="" className='hover:border-gray-400 duration-200 shadow-lg focus:border-white w-full h-[60px] border border-[#444] rounded-[1vh] text-white p-5 bg-[#222] focus:outline-none focus:text-white' placeholder='E-Mail' />
                  <input type="password" name="" id="" className='hover:border-gray-400 duration-200 shadow-lg focus:border-white w-full h-[60px] border border-[#444] rounded-[1vh] text-white p-5 bg-[#222] focus:outline-none focus:text-white' placeholder='Password' />
                </div>
                <div className="hoverMe flex justify-center items-center gap-3 cursor-pointer">
                  <p className="text-[13px] text-[#777]">Don't Have an Account?</p>
                  <p className="text-[13px] text-[#777] bg-[#222] border py-1 px-3 rounded-full shadow-lg border-[#444] roudned-full borderHovered">Sign Up</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="bg-[#111] aspect-square rounded-[4vh] overflow-hidden relative">
            <div className="w-full h-full rounded-[4vh] overflow-hidden absolute top-0 left-0">
              <Image src={ontopImage} alt="" className="aspect-square object-cover" ></Image>
            </div>
            <div className="absolute top-0 left-0 w-full h-full grid grid-rows-6 grid-cols-6 gap-5 rounded-[4vh]">
              <div className="rounded-2xl"></div>
              <div className="rounded-2xl col-span-2 row-span-1"></div>
              <div className="rounded-2xl col-span-2 row-span-1"></div>
              <div className="rounded-2xl"></div>
              <div className="rounded-2xl col-span-1 row-span-2"></div>
              <div className="rounded-2xl col-span-2 row-span-2"></div>
              <div className="rounded-2xl col-span-2 row-span-2"></div>
              <div className="rounded-2xl col-span-1 row-span-2"></div>
              <div className="rounded-2xl col-span-1 row-span-2"></div>
              <div className="rounded-2xl col-span-2 row-span-2 overflow-hidden">
                <motion.div 
                  initial={{ y: '100%' }}
                  animate={{ y: ['100%', '0%', '0%', '-100%'] }}
                  transition={{ 
                    duration: 8, 
                    ease: 'easeInOut', 
                    times: [0, 0.9, 0.9, 0.9, 1], 
                    repeat: Infinity 
                  }}
                  className="w-full h-[100%] flex flex-col rounded-2xl overflow-hidden"
                >
                  <div className="flex-1 bg-[#01ff92] rounded-2xl p-7 flex flex-col gap-3">
                    <h1 className="text-text text-[22px] font-bold">Innovative Design</h1>
                    <p className="text-text text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, et!</p>
                    <div className="flex-1 flex justify-end items-end">
                      <Image src={draw} alt='' className='w-[50px]'></Image>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="rounded-2xl col-span-2 row-span-2 overflow-hidden">
                <motion.div 
                  initial={{ y: '100%' }}
                  animate={{ y: ['100%', '0%', '0%', '-100%'] }}
                  transition={{ 
                    delay: 1,
                    duration: 8, 
                    ease: 'easeInOut', 
                    times: [0, 0.9, 0.5, 0.99, 1], 
                    repeat: Infinity
                  }}
                  className="w-full h-[100%] flex flex-col rounded-2xl overflow-hidden"
                >
                  <div className="flex-1 bg-[#f6fd39] rounded-2xl p-7 flex flex-col gap-3">
                    <h1 className="text-text text-[22px] font-bold">Maximum <br/> Customization</h1>
                    <p className="text-text text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, cum earum tempore ab officia similique?</p>
                    <div className="flex-1 flex justify-end items-end">
                      <Image src={customazation} alt='' className='w-[50px]'></Image>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="rounded-2xl col-span-1 row-span-2 overflow-hidden">
              <motion.div 
                  initial={{ x: '100%' }}
                  animate={{ x: '0' }}
                  transition={{delay: 1, duration: 1.5, type: easeIn }}
                  className="w-full h-[100%] flex flex-col rounded-2xl overflow-hidden"
                >
                  <div className="flex-1 bg-[#01fff7] rounded-2xl flex justify-center items-center overflow-hidden">
                    <motion.div 
                      initial={{ y: '800%' }}
                      animate={{ y: '0' }}
                      transition={{ delay: 0.4, duration: 2, type: easeIn }}
                    >
                      <div className="w-full h-full rotate-90 flex flex-col justify-center items-start gap-1">
                        <div className="flex justify-between items-center w-full">
                        <button type="button" className='bg-[#16b8b2] text-[#111] py-2 px-5 rounded-[0.5vw]'>Message</button>
                          <Image src={mail} alt='' className='w-[50px] -rotate-90'></Image>
                        </div>
                        <p className="text-text text-[15px] font-medium">Contact E-Mail</p>
                        <h1 className="text-text text-[20px] font-bold">lucash.1707@gmail.com</h1>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div className="rounded-2xl"></div>
              <div className="rounded-2xl col-span-2 row-span-1"></div>
              <div className="rounded-2xl col-span-2 row-span-1"></div>
              <div className="rounded-2xl overflow-hidden">
                <motion.div 
                  initial={{ y: '-100%' }}
                  animate={{ y: '0' }}
                  transition={{delay: 2.5, duration: 1.5, type: easeIn }}
                  className="w-full h-[100%] flex flex-col rounded-2xl overflow-hidden"
                >
                  <div className="flex-1 bg-[#ffd901] rounded-2xl flex justify-center items-center overflow-hidden">
                    <motion.div 
                      initial={{ y: '800%' }}
                      animate={{ y: '0' }}
                      transition={{ delay: 0.4, duration: 2, type: easeIn }}
                    >
                      <div className="w-full h-full rotate-90 flex flex-col justify-center items-start gap-1">
                        <div className="flex justify-between items-center w-full">
                          <Image src={vercel} alt='' className='w-[80px] -rotate-90'></Image>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            <Image src={image} alt="" className="aspect-square object-cover rounded-[4vh]" ></Image>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-black"></div>
    </>
  );
}