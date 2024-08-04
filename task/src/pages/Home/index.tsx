import react from "react"
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

const task = () => {
    return(
        <div className="full-screen bg-white bg-scroll ">
            <div className="navbar min-h-20  bg-white text-black outline-gray-500 ">
                <div className="logo-container ml-8 ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg" alt="Logo" className="logo-img" />
                </div>
                <div className="flex-5 ml-3 ">
                    <a className="btn btn-ghost text-slate-500 text-sm mr-5 bg-white hover:bg-sky-100">Beauty</a>
                    <a className="btn btn-ghost text-slate-500 text-sm mr-5  bg-white hover:bg-sky-100">Home</a>
                    <a className="btn btn-ghost text-slate-500 text-sm mr-5  bg-white hover:bg-sky-100">Native</a>
                </div>
                <div className=" input input-bordered ml-20 border-slate-300 bg-white text-black w-24 md:w-auto"> 
                <SlLocationPin />
                <input type="text" placeholder="Tirunelveli" className="ml-2"></input>  
                <IoIosArrowDown />
                </div>
                <div className="input input-bordered ml-10 mr-20 border-slate-300 bg-white text-black w-24 md:w-auto">
                <CiSearch />
                <input type="text"  placeholder="Search" className="ml-2 " />
                </div>
                <div className=" ml-20 mr-5">
                <FiShoppingCart /></div>
                <div tabIndex={0} className="mr-none ml-5">
                <VscAccount />
                </div>
                </div><br/>
                <div className="max-w-sm mx-auto ml-20 bg-white  rounded-lg  overflow-hidden">
                <a className="font-bold text-black text-4xl mt-5">Home services at your<br/> doorstep</a>
                </div>
                <div className="flex min-h-20 min-w-20">
        <div className="max-w-lg bg-white shadow-sm p-5 rounded border border-slate-200 mt-8 ml-20 rounded-lg">
      <p className="text-lg font-semibold mb-8 text-black">What are you looking for?</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg" alt="women's saloon" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1 text-black">Women's Salon & Spa</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg" alt="men's saloon" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1 text-black">Men's Salon & Massage</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg" alt="AC appliance & repir" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3" />
          <p className="text-xs mt-1 text-black">AC & Appliance Repair</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg" alt="Cleaning & pest control" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1 text-black">Cleaning & Pest Control</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png" alt="electrician plumber carpenter" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1 text-black">Electrician, Plumber & Carpenter</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg" alt="water purifier" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1 text-black">Native Water Purifier</p>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center justify-between">
          <div className="bg-neutral-100 rounded-lg mx-auto px-8 py-3">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340800795-115b3b.jpeg" alt="smart lock" className="mx-auto"/>
            <p className="text-xs mt-1 text-black">Native Smart Locks</p>
          </div>
          <div className="bg-neutral-100 rounded-lg mx-auto px-8 py-3">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg" alt="painting" className="mx-auto"/>
            <p className="text-xs mt-1 text-black">Painting & Water proofing</p>
          </div>
          </div>
          </div>
          </div><br/>
          <div className="ml-20 mt-3 flex space-between ">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693570188661-dba2e7.jpeg" /><a className="ml-3 text-black">4.8<br/><h1 className="text-slate-500">Service rating</h1></a>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693491890812-e86755.jpeg" className="ml-20" /><a className="ml-3 text-black">5M+<br/><h1 className="text-slate-500">Customers Globally</h1></a>
          </div>

            <p className="mt-5 text-black text-3xl text-bold ml-10">New and noteworthy</p><br/>
            <div className="flex flex-row">
                <div className="w-80 h-80 ml-5 overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1687428458328-9e147d.jpeg" className="duration-500 hover:scale-105" />
                <a className="text-xl text-black">Native Water Purifier</a></div>
                <div className="w-80 h-80 ml-2 overflow-hidden "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg" className="duration-500 hover:scale-105" />
                <a className="text-xl text-black">Bathroom&Kitchen Cleaning</a></div>
                <div className="w-80 h-80 ml-2 overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040419628-022a2b.jpeg" className="duration-500 hover:scale-105"/>
                <a className="text-xl text-black">Full Home Painting Consultation</a></div>
                <div className="w-80 h-80 ml-2 overflow-hidden "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1719991333232-d32f07.jpeg" className="duration-500 hover:scale-105" />
                <a className="text-xl text-black">Native smart locks</a></div>
                <div className="w-80 h-80 ml-2 overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040407144-95eb6e.jpeg" className="duration-500 hover:scale-105"/>
                <a className="text-xl text-black overflow-hidden">Spa Ayurveda</a></div>
                <div className="w-80 h-80 ml-2 overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040420198-fe6d1d.jpeg" className="duration-500 hover:scale-105" />
                <a className="text-xl text-black">Hair Studio for Women</a></div>
           </div><br/>

           <p className="mt-5 text-black text-3xl text-bold ml-10">Most Booked Services</p><br/>
            <div className="flex flex-row">
                <div className="w-80 h-80 ml-5 box-border overflow-hidden "><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652168690740-f5ed68.png" className="duration-500 hover:scale-105" />
                <a className="text-l text-black">AC repair(split/Window)</a><a className="flex text-center mt-2 text-black-400"> ★ 4.80(369.4K)</a><a className="space-between text-slate-400">₹ 299</a></div>
                <div className="w-80 h-80 ml-5 box-border overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682671878656-d02ec7.jpeg" className="duration-500 hover:scale-105"/>
                <a className="text-l text-black">Power Saver AC Service</a><a className="flex text-center mt-2 text-black-400"> ★ 4.82(537.7K)</a><a className="space-between text-slate-400">₹ 799</a></div>
                <div className="w-80 h-80 ml-5 box-border overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png" className="duration-500 hover:scale-105"/>
                <a className="text-l text-black">Intense cleaning 2 bathroom</a><a className="flex text-center mt-2 text-black-400"> ★ 4.78(1.6M)</a><a className="space-between text-slate-400">₹ 988</a></div>
                <div className="w-80 h-80 ml-5 box-border overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png" className="duration-500 hover:scale-105"/>
                <a className="text-l text-black">Intense bathroom cleaning</a><a className="flex text-center mt-2 text-black-400"> ★ 4.78(1.6M)</a><a className="space-between text-slate-400">₹ 599</a></div>
                <div className="w-80 h-80 ml-5 box-border overflow-hidden"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1660711266271-6588ce.png"className="duration-500 hover:scale-105" />
                <a className="text-l text-black">Top Load(Full-automatic)</a><a className="flex text-center mt-2 text-black-400"> ★ 4.83(112.7K)</a><a className="space-between text-slate-400">₹ 99</a></div>
           </div><br/>
           
           <p className="mt-5 text-black text-3xl text-bold ml-10">Salon For Women</p><br/>
            <div className="flex flex-row overflow-hidden">
                <div className="w-80 h-60 ml-5 box-border h-32 w-32 p-4"><a className="text-xl text-black">Pedicure</a><br/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398009148-4b7a11.jpeg" className="duration-500 hover:scale-105" />
                </div>
                <div className="w-80 h-60 ml-5 box-border h-32 w-32 p-4"><a className="text-xl text-black">Waxing</a><br/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717397992635-09b511.jpeg"className="duration-500 hover:scale-105" />
                </div>
                <div className="w-80 h-60 ml-5 box-border h-32 w-32 p-4 "><a className="text-xl text-black">Manicure</a><br/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398005609-e19abc.jpeg" className="duration-500 hover:scale-105"/>
                </div>
                <div className="w-80 h-60 ml-5 box-border h-32 w-32 p-4 "><a className="text-xl text-black">Hair care</a><br/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398018197-c68fcc.jpeg" className="duration-500 hover:scale-105"/>
                </div>
                <div className="w-80 h-60 ml-5 box-border h-32 w-32 p-4 "><a className="text-xl text-black">Facial&Cleanup</a><br/>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717397984511-247afe.jpeg" className="duration-500 hover:scale-105"/>
                </div>
           </div><br/>

           <div className="ml-10 align-center display-block vertical-align: middle; mt-10 overflow-hidden">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1719991417932-c5dca4.jpeg" className="duration-500 hover:scale-105"/>
           </div><br/>
           <div className="ml-20 mt-5">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png"/>
           </div>
           <div className="flex mt-8 ml-10 gap-40">
            <div className="space-between ml-8 ">
            <h1 className="font-semibold text-black text-2xl ">Company</h1><br/>
                <a className="text-slate-500">About us <br/>Terms & conditions <br/>Privacy policy <br/>Anti-discrimination policy <br/>UC impact <br/>Careers </a>
            </div>
            <div className="space-between  ">
            <h1 className="font-semibold text-black text-2xl ">For customers</h1><br/>
                <a className="text-slate-500">UC reviews<br/> Categories near you<br/> Blog <br/>Contact us </a>
            </div>
            <div className="space-between  ">
            <h1 className="font-semibold text-black text-2xl ">For partners</h1><br/>
                <a className="text-slate-500">Register as a professional  </a>
            </div>
            <div className="space-between  ">
            <h1 className="font-semibold text-black text-2xl ">Social links</h1><br/>
            <div className="flex space-between gap-5 text-black">
            <CiTwitter />
            <CiFacebook />
            <SiInstagram />
            <CiLinkedin />
            </div><br/>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"/><br/>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"/>
            </div>
            </div><br/>
            <a className="mt-10 ml-10 text-slate-500 text-1">© Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413</a>
            </div>
    )
};
export default task