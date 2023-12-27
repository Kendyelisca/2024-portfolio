import { motion } from "framer-motion";
import { FaEye, FaCode } from "react-icons/fa";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, meet
        <br />
        <span className="bg-white px-1 italic">Kendy Elisca</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Extraordinary software developer
        <br />
        Let's make your idea come to life together
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Let's have a chat
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Reactjs / Nextjs",
    level: 90,
  },
  {
    title: "React Native",
    level: 80,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 60,
  },
  {
    title: "PostgreSQL",
    level: 90,
  },
  {
    title: "MongoDB",
    level: 80,
  },
  {
    title: "Python / flask",
    level: 80,
  },
];
const languages = [
  {
    title: "French",
    level: 100,
  },
  {
    title: "English",
    level: 100,
  },
  {
    title: "Spanish",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/textures/newsflow.png",
    demoLink: "#", // Replace with the actual demo link
    codeLink: "#", // Replace with the actual code link
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/project2.jpg", // Replace with the actual image path
    demoLink: "#", // Replace with the actual demo link
    codeLink: "#", // Replace with the actual code link
  },
  {
    title: "Project 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/project3.jpg", // Replace with the actual image path
    demoLink: "#", // Replace with the actual demo link
    codeLink: "#", // Replace with the actual code link
  },
  {
    title: "Project 4",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/project4.jpg", // Replace with the actual image path
    demoLink: "#", // Replace with the actual demo link
    codeLink: "#", // Replace with the actual code link
  },
];

const ProjectsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div className="bg-white p-6 rounded-md shadow-md" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md font-bold text-sm"
                >
                  <FaEye className="mr-2" />
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-md font-bold text-sm"
                >
                  <FaCode className="mr-2" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
