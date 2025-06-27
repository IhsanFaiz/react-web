import React from "react";
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

function Price() {


    return (
        <>
            <div className="bg-white w-full py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-28 md:gap-5 md:mt-5">
                    <div className="w-full h-full flex flex-col justify-center items-center mt-5 md:mt-0">
                        <div className="w-full rounded-md  bg-white scale-100 hover:scale-105 cursor-pointer duration-300 shadow-xl z-4 flex flex-col justify-center items-center">
                            <img src={Single} className="w-20 mt-[-3rem] mx-auto bg-white " alt="single" />
                            <h1 className="font-bold text-center text-2xl py-8">Single User</h1>
                            <h1 className="font-bold text-center text-3xl mt-6">$149</h1>
                            <ul className="flex text-xl w-full px-10 py-6 flex-col justify-center items-center text-center">
                                <li className="border-b-4 w-full border-gray-100 border-t-2">1 Mount</li>
                                <li className="border-b-4 w-full border-gray-100">Basic</li>
                                <li className="border-b-4 w-full border-gray-100">Intermediete</li>
                                <li className="border-b-4 w-full border-gray-100">Expert</li>
                                <li className="border-b-4 w-full border-gray-100">One user allowed</li>
                                <button className="bg-blue-500 px-4 py-1 my-4 hover:bg-blue-600 duration-300 rounded-md font-bold ">Start Trial</button>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="w-full rounded-md  bg-[#c1c1c1] scale-100 hover:scale-105 cursor-pointer duration-300 shadow-xl z-4 flex flex-col justify-center items-center">
                            <img src={Double} className="w-20 mt-[-3rem] mx-auto" alt="single" />
                            <h1 className="font-bold text-center text-2xl py-8">Partnership</h1>
                            <h1 className="font-bold text-center text-3xl mt-6">$199</h1>
                            <ul className="flex text-xl w-full px-10 py-6 flex-col justify-center items-center text-center">
                                <li className="border-b-4 w-full border-gray-300 border-t-2">6 Mount</li>
                                <li className="border-b-4 w-full border-gray-300">Basic</li>
                                <li className="border-b-4 w-full border-gray-300">Intermediete</li>
                                <li className="border-b-4 w-full border-gray-300">Expert</li>
                                <li className="border-b-4 w-full border-gray-300">Three user allowed</li>
                                <button className="bg-black text-blue-500 px-4 py-1 my-4 hover:bg-[#2e2e2e] duration-300 rounded-md font-bold ">Start Trial</button>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="w-full rounded-md  bg-white scale-100 hover:scale-105 cursor-pointer duration-300 shadow-xl z-4 flex flex-col justify-center items-center">
                            <img src={Triple} className="w-20 mt-[-3rem] mx-auto bg-white " alt="single" />
                            <h1 className="font-bold text-center text-2xl py-8">Group Account</h1>
                            <h1 className="font-bold text-center text-3xl mt-6">$299</h1>
                            <ul className="flex text-xl w-full px-10 py-6 flex-col justify-center items-center text-center">
                                <li className="border-b-4 w-full border-gray-100 border-t-2">1 Year</li>
                                <li className="border-b-4 w-full border-gray-100">Basic</li>
                                <li className="border-b-4 w-full border-gray-100">Intermediete</li>
                                <li className="border-b-4 w-full border-gray-100">Expert</li>
                                <li className="border-b-4 w-full border-gray-100">10 user allowed</li>
                                <button className="bg-blue-500 px-4 py-1 my-4 hover:bg-blue-600 duration-300 rounded-md font-bold ">Start Trial</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Price;