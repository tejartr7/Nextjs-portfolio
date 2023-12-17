

const Projects = () => {
    return (
        <section id="projects">
            <div className='gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8' style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
                <h1 className="text-4xl m-2 text-center" style={{ color: '#ffff00' }}>Projects</h1>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-grow lg:w-9/12 md:w-full p-4">
                        {/* Content in the left column */}
                        text
                    </div>
                    <div className="lg:w-3/12 md:w-full p-4">
                        {/* Content in the right column */}
                        content
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects;