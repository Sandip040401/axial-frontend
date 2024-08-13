import { Portfolio } from "./Portfolio"


export const Banner2 = () => {
    return <div className="bg-cover bg-center min-h-96" style={{ backgroundImage: "url('/background1.jpg')" }}>
        <div className="px-52 max-w-7xl">
            <div className="text-white text-3xl font-bold mb-4">
                Axial Capital
            </div>
            <div className="text-white text-xl">
            <span className="text-2xl font-bold">We</span> are a corporate investor, deploying our financial and technical resources into high-growth businesses and 
                corporate expansion. <span className="text-2xl font-bold">Axial</span> Ventures puts its backing behind founders that operate scalable business models and 
                recurring <span className="text-2xl font-bold">B2B</span> revenue streams, and our corporate finance team lead on more complex transactions including <span className="text-2xl font-bold">M&A</span> and 
                structured capital solutions.
            </div>
        </div>
        <Portfolio/>
    </div>
}