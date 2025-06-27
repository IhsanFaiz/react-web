import React from "react";
import Laptop from "../assets/laptop.jpg";


function Analitycs() {


    return (
        <>
            <div className="bg-white w-full py-16 px-4">
                <div className="max-w-[1248px] mx-auto grid md:grid-cols-2">
                    <img src={Laptop} className="w-[500px] mx-auto my-4" alt="/laptop" />
                    <div className="flex flex-col justify-center">
                        <p className="text-blue-500 font-bold flex ">Build interactive and responsive design with React</p>
                        <h1 className="font-bold text-3xl md:text-3xl">Use React for build an app</h1>
                        <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis, cupiditate fugit impedit, quam eos error libero temporibus inventore tempore blanditiis. Aspernatur velit laborum quasi cupiditate inventore tenetur deleniti aperiam!</p>
                        <button className="bg-black ml-40 md:ml-0 scale-100 text-blue-500 font-bold flex items-center md:hover:scale-105 w-[150px] h-[40px] transition-all duration-300 hover:scale-105 justify-center ease-in-out rounded-lg shadow-2xl mt-3">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analitycs;