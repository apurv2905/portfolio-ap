"use client";
import React from "react";
import { motion } from "framer-motion";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {};

export default function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:apurv9879@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}. ${data.message} (${data.email})`;
    };

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
            className="h-screen relative flex flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h4 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">Contact</h4>

            <div className="flex flex-col space-y-10 mt-16 items-center">
                <h4 className="hidden sm:inline text-1xl md:text-2xl text-center">
                    I have got just what you need. <span className="underline decoration-blue-300/100">Lets Talk.</span>
                </h4>

                <div className="space-y-3">
                    <div className="flex justify-center space-x-3 items-center">
                        <PhoneIcon className="text-blue-300 animate-pulse h-7 w-7"/>
                        <p className="font-light">+91-9998757892</p>
                    </div>

                    <div className="flex justify-center space-x-3 items-center">
                        <EnvelopeIcon className="text-blue-300 animate-pulse h-7 w-7"/>
                        <p className="font-light">apurv9879@gmail.com</p>
                    </div>

                    <div className="flex justify-center space-x-3 items-center">
                        <MapPinIcon className="text-blue-300 animate-pulse h-7 w-7"/>
                        <p className="font-light">Gandhinagar, Gujarat</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mb-0">
                    <div className="sm:flex-row sm:space-x-2 flex-col space-y-2 sm:space-y-0">
                        <input {...register('name')} placeholder="Name" type="text" className="contact-input w-full sm:w-fit"/>
                        <input {...register('email')} placeholder="Email" type="email" className="contact-input w-full sm:w-fit"/>
                    </div>
                    <input {...register('subject')} placeholder="Subject" type="text" className="contact-input"/>
                    <textarea {...register('message')} placeholder="Message" className="contact-input mb-6"/>
                    <button type="submit" className="bg-blue-300/70 text-black py-2.5 px-10 text-lg rounded-md">Submit</button>
                </form>
            </div>
        </motion.div>
    );
}