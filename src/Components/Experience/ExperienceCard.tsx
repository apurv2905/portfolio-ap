"use client";
import React from "react";
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[350px] xl:w-[400px] snap-center bg-[#292929] my-6 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                className="w-32 xl:w-[200px] object-center"
                src="https://i.ibb.co/tqtNztb/projectcafetechfinal.jpg"
                alt="company-logo"
            />
            <div>
                <h4 className="text-2xl font-semibold">React.js Developer</h4>
                <p className="mt-1 italic">Project Cafe Technologies</p>
                <div className="flex space-x-2 my-2 items-center">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://ionicframework.com/docs/icons/logo-react-icon.png"
                        alt="react"
                    />
                    <img
                        className="h-8 w-8"
                        src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                        alt="redux"
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public"
                        alt="js"
                    />
                </div>
                <p className="py-2.5 text-gray-300">May 2023 - July 2023</p>
                <ul className="list-disc space-y-2 ml-5 text-sm">
                    <li>Developed scalable and responsive
                        web applications using React.js.</li>
                    <li>Utilized state management libraries
                        (e.g., Redux) to efficiently manage
                        application data and ensure seamless
                        interactions</li>
                    {/*<li>Summury Points</li>*/}
                    {/*<li>Summury Points</li>*/}
                </ul>
            </div>
        </article>
    );
}