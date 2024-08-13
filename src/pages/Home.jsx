import { Banner } from "../components/Banner";
import { Banner2 } from "../components/Banner2";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
        <div className="relative bg-cover bg-center min-h-screen flex flex-col justify-between" style={{ backgroundImage: "url('/background.png')" }}>
            <Navbar />
            <div className="ml-6 md:ml-52 absolute mt-40 md:mt-80 max-w-2xl">
                <div className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down">
                    Ventures & Advisory
                </div>
                <div className="text-lg md:text-xl text-white mb-8 animate-fade-in-up">
                    YOU HAVE A PASSION FOR YOUR BUSINESS. SO DO WE
                </div>
                <button className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                    Join us
                </button>
            </div>
        </div>
        <Banner2/>
        <Banner/>
        </>
    );
}
