import React from "react";
import {
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare,
    FaLinkedinIn,
} from "react-icons/fa";

function Footer() {

    return (
        <>
            <div className="w-full py-16 px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300 ">
                <div className="">
                    <h1 className="text-blue-500 font-bold text-3xl uppercase">React.</h1>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque magnam unde tempore possimus a assumenda error numquam provident modi dolorem quis deserunt vero molestias accusamus culpa, optio eos sequi!</p>
                    <div className="flex md:w-[75%] justify-between py-4">
                        <FaFacebookSquare size={30} className="cursor-pointer" />
                        <FaInstagram size={30} className="cursor-pointer" />
                        <FaGithubSquare size={30} className="cursor-pointer" />
                        <FaTwitterSquare size={30} className="cursor-pointer" />
                        <FaLinkedinIn size={30} className="cursor-pointer" />
                    </div>
                </div>
                <div className="lg:col-span-3 flex justify-between">
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                            <li className="py-2 text-sm">Insight</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                            <li className="py-2 text-sm">Insight</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                            <li className="py-2 text-sm">Insight</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                            <li className="py-2 text-sm">Insight</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;