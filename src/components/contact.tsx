import { GlobeDemo } from "./Contact_Globe";

export default function Contact(){
    return (
        <div className="  justify-center items-center   py-16 my-8">
          <div className="flex text-6xl font-bold justify-center w-full mb-8">Contact Me</div>
          <div className="flex flex-row  justify-center w-full ">
            <div className="w-1/2 flex justify-center   px-8 ">
                <GlobeDemo></GlobeDemo>
            </div>
            <div className="w-1/2 h-[500px]">
                Hi
            </div>
            
          </div>
          
        </div>
    )
}