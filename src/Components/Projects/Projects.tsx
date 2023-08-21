"use client";
import React from "react";
import { motion } from "framer-motion";
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {};

export default function Projects({}: Props) {
    const projects = [
        {
            key: 1,
            projectName: "Netflix Clone",
            imgUrl: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
            description: "Netflix 2.0 app that has a Log In and Log Out Authentication with Google.It has a beautiful Home Screen with all the movies looking just like Netflix.\n" +
                "There is also a subscription page where you can see your active monthly subscription."
        },
        {
            key: 2,
            projectName: "Food Talk - Ordering app",
            imgUrl: "https://media.istockphoto.com/id/1004591262/vector/burger-with-crown-logo-illustration.jpg?s=612x612&w=0&k=20&c=LlzCALcTkHECx7O7QGFRJG7HLeleeVgb0V_2n7W0BU4=",
            description: "Indulge in a smooth food ordering journey with my React.js Food Ordering App. Real-time Firebase integration brings a curated menu to life, while a sleek interface allows easy cart management. Enjoy seamless adding and removal of items for a satisfying experience."
        },
        {
            key: 3,
            projectName: "Wage Works",
            imgUrl: "https://www.ducem.in/wp-content/uploads/2021/07/28-Loans-Advances.png",
            description: "Developed the payroll management system\n" +
                "using Java with NetBeans IDE to creating a user\n" +
                "interface to make it easy to use.\n" +
                "Integrated the system with the MySQL database\n" +
                "to enable easy access to employee data and\n" +
                "payroll information.\n"
        }
    ];
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
                    <div key={project.key} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-32 xl:p-80 h-screen">
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
                            className="w-[100px] md:w-[150px] xl:w-[180px] rounded-full object-cover"
                            src={project.imgUrl}
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-[18px] sm:text-2xl font-semibold text-center">
                                <span>
                                    Project {i + 1} of {projects.length}
                                </span>
                                : {project.projectName}
                            </h4>

                            <p className="text-sm text-center max-w-[600px]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] w-full left-0 bg-blue-300/10 h-[400px] -skew-y-[10deg]" />
        </motion.div>
    );
}