import logo from "../SVG/logo-upwork.svg";

const data = [
  {
    title: "Sr. Frontend Developer",
    time: "Nov 2021 - Present",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2: "",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Team Lead",
    time: "Jul 2017 - Oct 2021",
    text1: "Sed quis justo ac magna.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Full Stack Developer",
    time: "Dec 2015 - May 2017",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Experience() {
  return (
    <div className="flex bg-gray-50">
      <div className="flex mx-auto max-w-[1440px] flex-col items-center justify-center px-[96px] py-[80px]">
        <div className="flex justify-center">
          <p className=" flex rounded-full bg-gray-200 px-4 py-2 mt-3">
            Experiences
          </p>
        </div>
        <h1 className="py-8">
          Here is a quick summary of my most recent experiences:
        </h1>

        <div className="flex w-[896px] rounded-xl p-8 bg-white">
          <div className="flex justify-between items-center ">
            <img src={logo} />
            <div className="flex justify-between text-4 gap-8  list-disc ">
              <div>
              <h1>Sr. Frontend Developer</h1>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magnar</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </div>
            </div>
            <div><p>Nov 2021 - Present</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
