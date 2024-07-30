import react from "react"

const task = () => {
    return(
        <div>
            <div className="flex justify-center gap-5">
                <div className="max-w-sm mx-auto  text-center m-4 bg-rose-300 p-10 rounded-lg shadow-md overflow-hidden">
                <h1 className="font-semibold text-black-100">card1</h1>
                </div><br></br>
                <div className="max-w-sm mx-auto text-center  m-4 bg-blue-300 p-50 rounded-lg shadow-md overflow-hidden">
                <h1 className="font-semibold text-black-100">card2</h1>
                </div>
            </div>
            <div className="flex">
                <div className="max-w-sm mx-auto flex-1 m-4 text-center  bg-lime-300 py-10 rounded-lg shadow-md overflow-hidden">
                <h1 className="font-semibold text-black-100">card3</h1>
                </div><br></br>
                <div className="max-w-sm mx-auto flex-1 m-4 text-center  bg-green-300 py-10 rounded-lg shadow-md overflow-hidden">
                <h1 className="font-semibold text-black-100">card4</h1>
                </div>
            </div>
        </div>

    )
};
export default task