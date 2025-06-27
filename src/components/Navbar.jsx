import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaReact } from "react-icons/fa";

function Navbar() {
    const burgerBtn = useRef(null);
    const [container, setContainer] = useState(false);
    const burgerContainer = useRef(null);


    const burgerOpen = () => {
        if (burgerBtn.current.classList.contains("open")) {
            burgerBtn.current.classList.remove("open");
            burgerBtn.current.classList.add("close");
            setTimeout(() => {
                burgerBtn.current.classList.remove("finish");
                burgerBtn.current.classList.add("selesai");
            }, 200)
            setContainer(false);
        } else {
            burgerBtn.current.classList.remove("close");
            burgerBtn.current.classList.add("open");
            setTimeout(() => {
                burgerBtn.current.classList.remove("selesai");
                burgerBtn.current.classList.add("finish");
            }, 200)
            setContainer(true);
        }
    }

    const clickWindow = (e) => {
        if (burgerBtn.current.classList.contains("open") && !burgerBtn.current.contains(e.target) && burgerBtn.current.classList.contains("finish") && !burgerContainer.current.contains(e.target)) {
            burgerBtn.current.classList.remove("open");
            burgerBtn.current.classList.add("close");
            setTimeout(() => {
                burgerBtn.current.classList.remove("finish");
                burgerBtn.current.classList.add("selesai");
            }, 200)
            setContainer(false);
        }
    }

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScroll, setLastScroll] = useState(() => window.scrollY);

    const scrollHandler = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            setShowNavbar(false)
        } else if (currentScroll < lastScroll) {
            setShowNavbar(true)
        }

        setLastScroll(currentScroll);
    }

    useEffect(() => {
        window.addEventListener("click", clickWindow)
        window.addEventListener("scroll", clickWindow)
        window.addEventListener("scroll", scrollHandler)


        return () => {
            window.removeEventListener("click", clickWindow)
            window.removeEventListener("scroll", clickWindow)
            window.removeEventListener("scroll", scrollHandler)

        }
    }, [lastScroll]);








    return (
        <>
            <div className={`fixed w-full top-0 left-0 z-40 bg-black transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="md:px-5 md:py-2 lg:px-20 lg:py-6 md:flex hidden font-sans md:justify-between">
                    <div className="flex items-center gap-3">
                        <FaReact className="text-blue-500 w-10 h-auto" />
                        <a href="/index.html" className="text-blue-500 font-bold text-3xl uppercase cursor-pointer">React.</a>
                    </div>
                    <ul className="font-sans text-white text-xl flex gap-4 items-center">
                        <a href="/index.html" className="cursor-pointer" onClick={window.href = "src/App.jsx"}>Home</a>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Resource</li>
                        <li><button className="bg-blue-600 rounded-md font-bold flex justify-center items-center p-2 hover:bg-blue-700 duration-300">Get Started</button></li>
                    </ul>
                </div>
            </div>
            <div className={`fixed w-full top-0 left-0 flex flex-col items-center px-5 py-2 md:hidden bg-black z-30 transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2">
                        <FaReact className="text-blue-500 w-10 h-auto" />
                        <a href="/index.html" className="text-blue-500 font-semibold text-2xl uppercase cursor-pointer">React.</a>
                    </div>
                    <div id="burgerBtn" onClick={burgerOpen} ref={burgerBtn} className="mt-2 w-[35px] h-[30px] flex flex-col gap-2 items-center cursor-pointer">
                        <span className="upLine bg-white w-full h-[3px]"></span>
                        <span className="bottomLine bg-white w-full h-[3px]"></span>
                    </div>
                </div>
            </div>
            <div ref={burgerContainer} className={`fixed top-0 left-0 bg-black w-[50%] h-full z-40 transition-all duration-300 ${container ? "translate-x-0" : "-translate-x-full"}`}>
                <div className={`absolute p-8 top-0 w-full h-full z-40 left-0 `}>
                    <div className="flex justify-center items-center">
                    <FaReact className="text-blue-500 w-20 h-auto" />
                    </div>
                    <ul className="font-sans mt-8 text-white text-xl flex flex-col gap-4">
                        <a className="cursor-pointer border-b border-gray-800 p-1" href="/index.html">Home</a>
                        <li className="cursor-pointer border-b border-gray-800 p-1">About</li>
                        <li className="cursor-pointer border-b border-gray-800 p-1">Resource</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;