"use client";
import React from "react";
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-transparent">
            <motion.div
                initial={{
                   x: -500,
                   opacity: 0,
                   scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon url="https://www.linkedin.com/in/apurv-patel-85882226b/" fgColor="grey" bgColor="transparent"/>
                <SocialIcon url="https://github.com/apurv2905" fgColor="grey" bgColor="transparent"/>
                <SocialIcon url="https://www.instagram.com/_apurv.29/" fgColor="grey" bgColor="transparent"/>
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center my-auto sm:items-center text-gray-300 cursor-pointer"
            >
                <EnvelopeIcon className="text-blue-300 mr-3 h-5 w-5"/>
                <a href="#contact"><p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p></a>
                <a href="/Apurv_202051133.pdf" download>
                    <button className="bg-blue-300 hidden md:inline-flex mx-3 py-2 text-black rounded-full px-4">Download CV</button>
                </a>
                <a href="/Apurv_202051133.pdf" download>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:hidden w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </motion.div>

        </header>
    );
}