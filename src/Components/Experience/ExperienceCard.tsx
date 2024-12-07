"use client";
import React from "react";
import { motion } from 'framer-motion';

type Props = {
    companyLogo: string,
    role: string,
    companyName: string,
    time: string,
    points: string[]
};

export default function ExperienceCard({companyLogo, companyName, points, time, role}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[350px] xl:w-[400px] snap-center bg-[#292929] my-6 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                className="w-32 xl:w-[200px] object-center"
                src={companyLogo}
                alt="company-logo"
            />
            <div>
                <h4 className="text-2xl font-semibold">{role}</h4>
                <p className="mt-1 italic">{companyName}</p>
                <p className="py-2.5 text-gray-300">{time}</p>
                <ul className="list-disc space-y-2 ml-5 text-sm">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
