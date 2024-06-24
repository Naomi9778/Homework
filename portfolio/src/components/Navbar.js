import { Sun } from "lucide-react";
import { Menu } from "lucide-react";

const SS = "</SS>"

function Header() {
    return (
        <div className=" flex mx-auto   items-center justify-center   ">
            <div className="flex w-[1440px]  px-[80px] py-[16px] justify-between">
                <div>
                    <p className="text-3xl font-bold">{SS}</p>
                </div>

                < div className="md:flex gap-6 hidden ">
                    <p>About</p>
                    <p>Work</p>
                    <p>Testimonials</p>
                    <p>Contact</p>
                    <Sun />
                    <p className="rounded-full bg-gray-600} ">Download CV</p>
                </div>
            </div>
            < div className=" mt-0 sm:flex md:hidden rounded-xl border-8">
                <p className="text-3xl font-bold">{SS}</p>
                <Menu />
            </div>
        </div>


    );
};
export default Header;