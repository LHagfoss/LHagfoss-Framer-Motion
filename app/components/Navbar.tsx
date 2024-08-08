"use client"

import React, { useState } from "react";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [canToggle, setCanToggle] = useState(true);

    const toggleNavbar = () => {
        if (canToggle) {
            setIsOpen(!isOpen);
            setCanToggle(false);
            setTimeout(() => {
                setCanToggle(true);
            }, 1600);
        }
    };

    return (
        <>
            <button
                className={`toggle fixed ${isOpen ? "bg-white text-tex scale-110 rounded-[30px]" : "bg-black text-white"} w-[80px] h-[80px] top-0 left-0 rounded-[80px] m-8 flex justify-center items-center cursor-pointer active:scale-90 duration-1000`}
                title={isOpen ? "Close" : "Open"}
                onClick={toggleNavbar}
            >
                {isOpen ? "Close" : "Open"}
            </button>
            <div className={`navbar fixed ${isOpen ? "left-0" : "left-[-20%]"} w-[20vw] h-[100vh] bg-black duration-1000 ease-in-expo flex flex-col justify-end items-center shadow-xl`}>
                <div className="flex flex-col gap-10 items-start h-[65%]">
                    <motion.div initial={{ x: "-100%" }} animate={{ x: isOpen ? 0 : "-250%" }} transition={{delay: 0, duration: 0.8, type: easeIn }} className="w-[100%]  flex flex-col">
                        <Link href="/" className="text-white">Home</Link>
                    </motion.div>
                    <motion.div initial={{ x: "-100%" }} animate={{ x: isOpen ? 0 : "-250%" }} transition={{delay: 0.2, duration: 0.8, type: easeIn}} className="w-[100%] flex flex-col">
                        <Link href="/" className="text-white">Work / Projects</Link>
                    </motion.div>
                    <motion.div initial={{ x: "-100%" }} animate={{ x: isOpen ? 0 : "-250%" }} transition={{delay: 0.4, duration: 0.8, type: easeIn}} className="w-[100%] flex flex-col">
                        <Link href="/" className="text-white">Contact / Message</Link>
                    </motion.div>
                    <motion.div initial={{ x: "-100%" }} animate={{ x: isOpen ? 0 : "-250%" }} transition={{delay: 0.6, duration: 0.8, type: easeIn}} className="w-[100%] flex flex-col">
                        <Link href="/" className="text-white">About / Info</Link>
                    </motion.div>
                </div>

                <motion.div initial={{ x: "-100%" }} animate={{ x: isOpen ? 0 : "-200%" }} transition={{delay: 0.8, duration: 0.8, type: easeIn}} className="flex justify-center w-[100%] gap-3 mb-10">
                    <button type="button" className="text-white py-2 px-6 rounded-md">Sign Up</button>
                    <button type="button" className="bg-white py-2 px-6 rounded-md">Login</button>
                </motion.div>

                <motion.div initial={{ x: "-100%" }} animate={{ x: isOpen ? 0 : "-220%" }} transition={{delay: 1, duration: 0.8, type: easeIn}} className="flex justify-center w-[100%] mb-10">
                    <h1 className="text-white text-[13px]">Made with 🤍 by LHagfoss</h1>
                </motion.div>
            </div>
        </>
    );
}