"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{ duration: 2.0 }}
            className="flex flex-col relative h-screen overflow-y-auto text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                src="https://i.ibb.co/SmWn2VZ/full-Final.jpg"
                className="mt-20 -mb-10 md:mb-0 flex-shrink-0 w-[150px] h-[150px]  rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[250px] xl:w-[300px] xl:h-[400px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-2xl font-semibold">
                    Concise <span className="underline decoration-blue-300/100">Introduction</span>
                </h4>
                <p className="py-0 my-0">
                    Hello, I am Apurv, an entry-level Software Engineer at Tata Consultancy Services (TCS). I hold a B.Tech in Computer Science Engineering from the Indian Institute of Information Technology Vadodara. Passionate about software development, I strive to create innovative solutions that seamlessly integrate creativity and technology.
                </p>
            </div>
        </motion.div>
    );
}