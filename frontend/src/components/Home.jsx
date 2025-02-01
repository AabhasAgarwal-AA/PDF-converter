import { FaFileWord } from "react-icons/fa";

export function Home(){
    return(
        <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 flex h-screen items-center justify-center">
            <div className="border-2 border-dashed px-4 py-2 md:px-8 md:py-8 border-indigo-400 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center md-4">
                    Convert Word to PDF Online
                </h1>
                <p className="text-sm text-center mb-5">
                    Easily convert Word document to PDF format online, without having to install any software
                </p>
            
                <div className="flex flex-col items-center space-y-4">
                    <input type="file" accept=".doc" hidden id="fileInput"/>
                    <label htmlFor="fileInput" className="w-full flex item-center justify-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-lg cursor-pointer border-blue hover:bg-blue-700 duration-300">
                        <FaFileWord />
                        <span className="text-3xl mr-2 hover:text-white">Choose File</span>
                    </label>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 duration-300 font-bold px-4 py-2 rounded">Convert File</button>
                </div>
            </div>
        </div>
    )
}