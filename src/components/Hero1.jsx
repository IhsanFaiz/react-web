import React from "react";
import { ReactTyped } from "react-typed";

function Hero1() {


    return (
        <>
            <div className="text-white max-w-[900px] h-screen w-full mt-[-20px] mx-auto text-center flex flex-col justify-center items-center">
                <p className="uppercase md:text-4xl sm:text-2xl text-xl text-blue-500">growing with React and tailwind</p>
                <h1 className="font-bold md:text-6xl sm:text-5xl text-4xl uppercase md:py-6">frontend developer</h1>
                <div className="flex md:text-4xl sm:text-2xl text-xl font-bold items-center gap-1 md:gap-3">
                    <p className="">Fast, flexible, UI friendly use </p>
                    <ReactTyped
                        strings={[
                            "Tailwind",
                            "React",
                            "Next.js"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                <p className="text-gray-600 max-w-[400px] md:max-w-[700px] md:mt-10 md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sit tempore.</p>
                <button className="bg-blue-600 rounded-md md:hidden w-[200px] mt-4 font-bold flex justify-center items-center p-2 hover:bg-blue-700 duration-300">Get Started</button>

            </div>
        </>
    )
}

export default Hero1;