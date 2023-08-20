"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/Components/Experience/ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
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
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">Experience</h3>
            <div className="w-full flex space-x-5 snap-x snap-mandatory mt-20 overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-300/80 justify-center">
                <ExperienceCard />
                {/*<ExperienceCard />*/}
                {/*<ExperienceCard />*/}
                {/*<ExperienceCard />*/}
            </div>
        </motion.div>
    );
}