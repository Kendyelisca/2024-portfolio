import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import CV from "../assets/Kendy Elisca cv.pdf";
import { currentProjectAtom, projects } from "./Projects";
import { useEffect, useState } from "react";
import axios from "axios";

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

export const Interface = (props) => {
  const { setSection } = props;

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, meet
        <br />
        <span className="bg-green-300 px-1 italic">Kendy Elisca</span>
      </h1>
      <motion.p
        className="text-lg text-gray-900 mt-4"
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
        let's make your idea come to life together!
      </motion.p>
      <div className="flex gap-2">
        {" "}
        <motion.button
          onClick={() => setSection(3)}
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
          Contact me
        </motion.button>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <motion.button
            className={`bg-green-300 text-black py-4 px-8 
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
            CV
          </motion.button>
        </a>
      </div>
    </Section>
  );
};

const skills = [
  {
    title:
      "ReactJS / NextJS / React Native / Redux / Tailwind CSS / Elearning Platforms",
    level: 90,
  },
  {
    title: "Threejs / React Three Fiber / WebGL / Babylon.js",
    level: 70,
  },
  {
    title: "Nodejs / Express / NestJS / Fastify / Microservices",
    level: 90,
  },
  {
    title: "Typescript / JavaScript (ES6+) / Python",
    level: 80,
  },
  {
    title: "NOSQL and SQL Databases (MongoDB, DynamoDB, MySQL, PostgreSQL)",
    level: 90,
  },
  {
    title: "Cloud Computing (AWS, DigitalOcean) / Serverless Architectures",
    level: 85,
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="max-w-full" key={index}>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10">
            Languages
          </h2>
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

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center mt-[500px] mb-20">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await axios.post(
        "https://email-backend-6kh4.onrender.com/emails/contact",
        {
          name,
          email,
          message,
        }
      );

      // Handle success
      setIsSuccess(true);
      console.log("Message sent successfully!", response.data);

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Handle errors
      setIsSuccess(false);
      console.error("Error sending message", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-[600px] max-w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full border-indigo-600 border-2 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            placeholder="Enter your name..."
          />

          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border-indigo-600 mt-8 rounded-md border-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            placeholder="Enter your email..."
          />

          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-32 block w-full border-indigo-600 mt-8 rounded-md border-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            placeholder="Enter your message..."
          />
          {isSuccess === true && (
            <p className="text-indigo-600">Message sent successfully!</p>
          )}
          {isSuccess === false && (
            <p className="text-red-600">
              Error sending message. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
          >
            {isSending ? "Submiting" : "Submit"}
          </button>
        </form>
      </div>
    </Section>
  );
};
