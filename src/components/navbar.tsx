 export const Navbar=()=>{
    
    return (
        <div className=" realtive flex flex-row items-center justify-center w-screen">
        <div className=" w-[50px] h-[50px] m-8 absolute left-10 top-1/2-translate-y-1/2  ">
            <img src="../favicon.ico" alt=""  />
        </div>
        <div className=" space-x-5 flex flex-row items-center ml-auto mr-auto  m-2 ">
            <a className="p-8 text-gray-500 font-bold hover:text-gray-100 transform transition duration-500 
                                hover:scale-110 group "
                                href="#1">
                
                    Home
                    <div className="bg-gray-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                
            </a>
            <a className="p-8 text-gray-500 font-bold hover:text-gray-100 transform transition duration-500 
                                hover:scale-110 group "
                                href="#2">
                
                    About 
                    <div className="bg-gray-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                
            </a>
            <a className="p-8 text-gray-500 font-bold hover:text-gray-100 transform transition duration-500 
                                hover:scale-110 group "
                                href="#3">
                
                    Projects
                    <div className="bg-gray-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                
            </a>
            <a className="p-8 text-gray-500 font-bold hover:text-gray-100 transform transition duration-500 
                                hover:scale-110 group "
                                href="#4">
                
                    Contact
                    <div className="bg-gray-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                
            </a>
            </div>
        </div>
        
    )
}
// module.exports=Navbar