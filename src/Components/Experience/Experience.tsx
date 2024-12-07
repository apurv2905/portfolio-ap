"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/Components/Experience/ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
    const companyName: string[] = ["Tata Consultancy Services", "Fluxbyte Technologies", "ProjectCafe Technologies"];

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
            className="h-screen flex relative overflow-x-auto flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">Experience</h3>
            <div className="w-full flex gap-3 mt-20 overflow-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-300/80 sm:justify-center">
                <ExperienceCard
                    companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZNFyuf3XRX8RnlHTS7HF2BoVyVd0js8JZw&s"
                    companyName={companyName[0]}
                    role="Systems Engineer"
                    time="Aug 2024 - Ongoing"
                    points={[
                        "Collaborated on a client project to optimize ERP solutions using Oracle E-Business Suite (EBS).",
                        "Customized Oracle eBS forms utilizing Oracle Forms Builder and PL/SQL to implement complex business logic and validations."
                    ]}
                />
                <ExperienceCard
                    companyLogo="https://i.ibb.co/XFfQ3fz/fluxbyte-Img.png"
                    companyName={companyName[1]}
                    role="Software Developer Intern"
                    time="Jan 2024 - May 2024"
                    points={[
                        "Develop responsive web applications using Angular for the frontend.",
                        "Build scalable backend services with Node.js."
                    ]}
                />
                <ExperienceCard 
                    companyLogo="https://i.ibb.co/tqtNztb/projectcafetechfinal.jpg"
                    companyName={companyName[2]}
                    role="Frontend Developer Intern"
                    time="May 2023 - Jul 2024"
                    points={[
                        "Developed scalable and responsive web applications using React.js.",
                        "Utilized state management libraries (e.g., Redux) to efficiently manage application data and ensure seamless interactions."
                    ]}
                />
            </div>
        </motion.div>
    );
}
