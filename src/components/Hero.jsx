import HeroImage from "../assets/kriti_raj.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I&apos;m{"  "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Kriti Raj
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="mailto:kriti.2101066cs@iiitbh.ac.in"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block"
        >
          Contact With Me
        </a>
        <a
          href="https://drive.google.com/file/d/1so35tDlKPb8pRGtoCCmRjC41pe6L6cUG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
