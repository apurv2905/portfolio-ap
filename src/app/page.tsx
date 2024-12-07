import ContactMe from "@/Components/ContactMe/ContactMe";
import Projects from "@/Components/Projects/Projects";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import Skills from "@/Components/Skills/Skills";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-black scrollbar-thumb-blue-300/80">
            <Header />
            <section id="hero" className="snap-start ">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <Experience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex justify-end mr-5">
                        <Image
                            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                            src="https://i.ibb.co/k3HSgFF/square-Head.jpg"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                </footer>
            </Link>
        </main>
    );
}
