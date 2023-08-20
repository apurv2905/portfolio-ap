"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 filter group-hover:grayscale transition duration-300 ease-in-out"
                src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            />
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    // opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    // opacity: 1,
                    x: 0
                }}
                className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full z-0"
            >
                <div className="flex items-center justify-center h-full">
                    <p className="text-1xl font-bold text-black opacity-100">100%</p>
                </div>
            </motion.div>
        </div>
    );
}