import react from "react"
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";

const task = () => {
    return(
        <div className="full-screen bg-zinc-200 bg-scroll">
            <div className="navbar min-h-20 bg-white text-black">
                <div className="logo-container">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png" alt="Logo" className="logo-img" />
                </div>
                <div className="flex-5 ">
                    <a className="btn btn-ghost text-sm mr-5 bg-white hover:bg-sky-100">Beauty</a>
                    <a className="btn btn-ghost text-sm mr-5  bg-white hover:bg-sky-100">Home</a>
                    <a className="btn btn-ghost text-sm mr-5  bg-white hover:bg-sky-100">Native</a>
                </div>
                <div className="flex justify-center ml-70">
                <input type="text"  placeholder="Search" className=" input input-bordered ml-40 border-amber-50 bg-white text-black w-24 md:w-auto" />
                </div>
                <div className=" ml-60 mr-1">
                <FiShoppingCart /></div>
                <div className="mr-none ml-6">
                <VscAccount />
                </div>
            </div>
            <div className="flex w-30 h-50">
            <div className="w-80 ml-5 mt-5">
                <div className="mx-auto text-center p-20 bg-stone-200 bg-border-black p-10 rounded-lg shadow-md overflow-hidden">
                <h1 className="font-semibold text-black">What are You Looking For?</h1><br/>
                <div className="flex flex row ml-2 mr-2">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"/>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg"/>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg"/>
                </div>
                <div className="flex flex row ml-2 mr-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg"/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png"/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg"/>
                </div>
                <div className="flex flex row ml-2 mr-2">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340800795-115b3b.jpeg"/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg"/>
                </div>
                </div>
                </div>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"/>
                </div>
            <p className="mt-5 text-black text-2xl text-bold mr-5">New and noteworthy</p><br/>
            <div className="flex flex-row">
                <div className="w-80 h-80 ml-5  "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1687428458328-9e147d.jpeg" />
                <a className="text-xl text-black">Native Water Purifier</a></div>
                <div className="w-80 h-80 ml-2 "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg" />
                <a className="text-xl text-black">Bathroom&Kitchen Cleaning</a></div>
                <div className="w-80 h-80 ml-2"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040419628-022a2b.jpeg"/>
                <a className="text-xl text-black">Full Home Painting Consultation</a></div>
                <div className="w-80 h-80 ml-2 "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1719991333232-d32f07.jpeg" />
                <a className="text-xl text-black">Native smart locks</a></div>
                <div className="w-80 h-80 ml-2 "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040407144-95eb6e.jpeg" />
                <a className="text-xl text-black">Spa Ayurveda</a></div>
                <div className="w-80 h-80 ml-2 "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040420198-fe6d1d.jpeg" />
                <a className="text-xl text-black">Hair Studio for Women</a></div>
           </div>
            </div>
    )
};
export default task