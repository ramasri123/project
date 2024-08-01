import react from "react"

const task = () => {
    return(
        <div className="h-screen bg-zinc-200 ">
            <div className="navbar min-h-20 bg-white text-black">
                <div className="logo-container">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png" alt="Logo" className="logo-img" />
                </div>
                <div className="flex justify-center">
                <input type="text" placeholder="Search" className=" input input-bordered ml-40 bg-gray-200 text-black w-24 md:w-auto" />
                </div>
                <div className="text-xl flex-5  ml-80 mr-none">
                    <a className="btn btn-ghost text-xl mr-5">Beauty</a>
                    <a className="btn btn-ghost text-xl mr-5">Home</a>
                    <a className="btn btn-ghost text-xl mr-5">Native</a>
                </div>
            </div>
            <p className="mt-5 text-black text-2xl mr-5 bg-zinc-200">New and noteworthy</p><br/>
            <div className="w-80 h-80 flex gap-4">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1687428458328-9e147d.jpeg" />
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"/>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040419628-022a2b.jpeg"/>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040407144-95eb6e.jpeg"/>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040420198-fe6d1d.jpeg"/>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652853823570-152440.png"/>
           </div>
            </div>
    )
};
export default task