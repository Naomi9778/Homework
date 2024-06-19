import { MapPin } from "lucide-react";
import profile from "../assets/profile.png";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Figma } from "lucide-react";

function Main() {
  return (
    <div className="flex mt-12">
      <div className="">
        1<h1 className="flex text-6xl">Hi, I’m Sagar 👋</h1>
        <p className="mt-12">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex mt-12">
          <MapPin />
          <p>Ahmedabad, India</p>
        </div>
        <div className="flex mt">
          <p className="size-4 rounded-full bg-green-600"></p>
          <p>Available for new projects</p>
        </div>
        <div className="flex mt-12">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>

      <div>
        2
        <img className=" min-w-[320px] h-[360px]" src={profile} />
      </div>
    </div>
  );
}
export default Main;
