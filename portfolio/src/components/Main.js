import { MapPin } from "lucide-react";
import profile from "../assets/profile1.png";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Figma } from "lucide-react"; 

function Main() {
    return (
        <div className="flex w-[1440px] mx-auto items-center justify-center px-[96px] py-[80px]">
            <div className="flex  justify-between m-0">
                <div className="flex justify-between mt-12">
                <div className="">
                    <h1 className="flex text-6xl ">Hi, I’m Sagar 👋</h1>
                    <p className="mt-12 text-gray-600 w-[768] h-[72px] text-6">
                        I'm a full stack developer (React.js & Node.js) with a focus on
                        creating (and occasionally designing) exceptional digital experiences
                        that are fast, accessible, visually appealing, and responsive. Even
                        though I have been creating web applications for over 7 years, I still
                        love it as if it was something new.
                    </p>
                    <div className="flex mt-12">
                        <MapPin />
                        <p className="text-gray-600">Ahmedabad, India</p>
                    </div>
                    <div className="flex mt-2 items-center gap-2 ml-[8px] ">
                        <p className="size-2 border-0 rounded-full bg-green-600"></p>
                        <p className="text-gray-600">Available for new projects</p>
                    </div>
                    <div className="flex mt-12 gap-5">
                        <Github />
                        <Twitter />
                        <Figma />
                    </div>
                </div>
                </div>
            </div>

            <div className="relative ">
                <div className="  bg-gray-200 min-w-[320px] h-[360px] absolute top-8 left-8 z-0" ></div>
                <img className=" relative border-8 border-white min-w-[320px] h-[360px] z-10 " src={profile} />
            </div>
        </div>
    );
}
export default Main;