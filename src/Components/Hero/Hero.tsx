"use client";
// import pic from '../../../public/squareHead.jpg';
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/Components/Hero/BackgroundCircles";
import Link from "next/link";
// import Image from "next/image";
// import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey! My Name is Apurv.",
            "Pixels, Coffee, and endless Code.",
            "<Front-EndDeveloper />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <section className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            {/*<Image*/}
            {/*    src="https://i.ibb.co/k3HSgFF/square-Head.jpg"*/}
            {/*    alt="memoji"*/}
            {/*    width="128"*/}
            {/*    height="128"*/}
            {/*    quality="95"*/}
            {/*    priority={true}*/}
            {/*    className="h-32 w-32 rounded-full object-cover"*/}
            {/*/>*/}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="relative h-32 w-32 rounded-full"
                src="https://i.ibb.co/k3HSgFF/square-Head.jpg"
                alt=""
            />
            {/*<Image*/}
            {/*    className="rounded-full"*/}
            {/*    src="/squareHead.jpg" alt="" height={128} width={128}/>*/}
            {/*<Image*/}
            {/*    style={{*/}
            {/*        borderRadius: "50%",*/}
            {/*    }}*/}
            {/*    src={pic}*/}
            {/*    alt={"Apurv"}*/}
            {/*    width={120}*/}
            {/*    // height={50}*/}
            {/*/>*/}
            <section className="z-20">
                <h2 className="text-sm uppercase text-gray-500 p-2 tracking-[10px]">
                    Software Engineer
                </h2>
                <h1 className="text-2xl lg:text-3xl font-bold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#fff" />
                </h1>

                <section className="pt-5">
                    <Link href="#about">
                        <button className="hero-button">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="hero-button">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="hero-button">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="hero-button">Projects</button>
                    </Link>
                </section>
            </section>
        </section>
    );
}