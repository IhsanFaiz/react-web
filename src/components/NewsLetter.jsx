import React from "react";

function NewsLetter() {


    return (
        <>
            <div className="py-20 px-5 md:px-20 lg:px-50 xl:px-60 text-white grid md:grid-cols-2 ">
                <div>
                    <h1 className="font-bold text-md md:text-xl text-balance">Want tips & tricks to optimize your project?</h1>
                    <p className="text-sm md:text-md">Sign Up to our newsletter and stay up to date</p>
                </div>
                <div>
                    <div className="block md:flex md:items-center gap-2">
                        <form action="" className="mt-5 md:mt-0 mb-5 md:mb-0">
                            <input type="text" className="w-full md:w-[250px] p-4 h-10 rounded-md text-black outline-none" placeholder="Enter your email" />
                        </form>
                        <div className="w-full flex justify-center items-center md:block">
                            <button className="bg-blue-500 scale-100 rounded-md px-10 md:px-5 text-black py-2 font-bold hover:bg-blue-700 duration-300">Notify me</button>
                        </div>
                    </div>
                    <p className="text-[14px] md:text-sm lg:text-md ">We care bout your protection of your data. Read our <span className="text-blue-500 underline cursor-pointer hover:text-blue-700">Privacy Policy</span>.</p>
                </div>
            </div>
        </>
    )
}

export default NewsLetter;