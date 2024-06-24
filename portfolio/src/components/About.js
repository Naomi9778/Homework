import profile2 from "../assets/profile2.jpeg";

function About() {
  return (
    <div className="flex w-[1440px] mx-auto items-center justify-center px-[96px] py-[80px bg-gray-50">
      <div className="flex flex-col">
        <div>
          <p>About me</p>
        </div>
        <div>
          <div className="flex ">
          <div className="relative ">
            <div className=" bg-gray-200 min-w-[440px] h-[520px] absolute top-8 right-8 "></div>
            <img
              className=" relative border-8 border-gray-50 min-w-[440px] h-[520px]  z-20  "
              src={profile2}
            />
          </div>

          <div>
            <h1>Curious about me? Here you have it:</h1>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.{" "}
              <br />
              <br />I began my journey as a web developer in 2015, and since
              then, I've continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
              <br />
              <br />I am very much a progressive thinker and enjoy working on
              products end to end, from ideation all the way to development.
              <br />
              <br />
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
              <br />
              <br />
              Finally, some quick bits about me.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
