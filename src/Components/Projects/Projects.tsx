"use client";
import React from "react";
import { motion } from "framer-motion";
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {};

export default function Projects({}: Props) {
    const projects =[1, 2, 3, 4, 5];
    // @ts-ignore
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
            className="h-screen relative flex overflow-hidden flex-col tex-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-300/80 overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={project} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-32 xl:p-80 h-screen">
                        <motion.img
                            initial={{
                                opacity: 0,
                                y: -100,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="w-[100px] md:w-[150px] xl:w-[200px]"
                            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl font-semibold text-center">
                                <span>
                                    Case Study {i + 1} of {projects.length}
                                </span>
                                : UPS clone
                            </h4>

                            <p className="text-sm text-center">
                                Netflix 2.0 app that has a Log In and Log Out Authentication with Google.It has a beautiful Home Screen with all the movies looking just like Netflix.
                                There is also a subscription page where you can see your active monthly subscription.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] w-full left-0 bg-blue-300/10 h-[400px] -skew-y-[10deg]" />
        </motion.div>
    );
}