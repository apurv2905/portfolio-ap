"use client";
import React from "react";
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";

import Link from "next/link";

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
                <a href="memojiHead.jpg" download>
                    <button className="bg-blue-300 hidden md:inline-flex mx-3 py-2 text-black rounded-full px-4">Download CV</button>
                </a>
            </motion.div>

        </header>
    );
}