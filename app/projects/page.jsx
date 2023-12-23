import Image from "next/image";
import list from "./projectList";

const Projects = () => {
    return (
        <section id="projects">
            <div
                className="font-Poppins gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8 text-left"
                style={{ borderTop: "5px solid #ffff00", color: "white" }}
            >
                <h1 className="text-5xl m-3 font-Merriweather text-center font-bold" style={{ color: "#ffff00" }}>
                    Projects
                </h1>
                {list.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                    >
                        <div className="flex-grow items-center lg:w-9/12 md:w-full p-4 flex flex-col justify-center">
                            {/* Content in the left column */}
                            <h2 className="text-3xl text-left font-Merriweather mb-2" style={{ color: '#ffff00' }}><u>{project.title}</u></h2>
                            <p className="text-xl text-left">{project.about}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl mt-2"
                                style={{ color: '#ffff00' }}
                            >
                            Explore This Project
                            </a>
                        </div>
                        <div className="lg:w-6/12,h:auto md:w-full p-4">
                            <div className="relative rounded-md overflow-hidden group">
                                <div class="relative w-full p-3 rounded  md:p-8">
                                    <div class="rounded-lg bg-black text-black w-full">
                                        <Image className="project-images" src={project.image} style={{ borderRadius: '10px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
