import React from 'react';
import Header from '../../Components/Header';
import Image from 'next/image';
import { about } from '../images/index'
const About = () => {
  return (
    <section id='about'>
      {/*<hr className="border-t-10 border-green-500" />*/}
      <div className='gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8' style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
        {/* Content of the About section goes here */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-2 text-left text-xl'>
            <h2 className='text-left text-3xl my-2' style={{ color: '#ffff00' }}>About me</h2>
            <p className='text-left'>
              Hello! I'm RTR, an engineer with a deep passion for coding and a relentless curiosity for technology. My journey into the world of programming began as a spark that ignited into a fervent interest. This fascination led me to explore languages such as Java and C++, delving into the intricacies of data structures and algorithms.
            </p>

            <p className='text-left'>
              As I embraced the world of coding, I found myself drawn to the vast realm of full-stack web development. Eager to showcase my creativity through websites, I immersed myself in learning new technologies, libraries, and frameworks. Today, my core skills lie in crafting dynamic and responsive web applications using Next.js, React.js, Node.js, and MongoDB.
            </p>

            <p>
              I thrive on challenges and am always eager to expand my skill set. Exploring and adopting new technologies is not just a task for me; it's a passion that drives me to push the boundaries of what's possible.
            </p>

            <p className='my-2 text-left'>
              <strong style={{ color: "#ffff00" }}>Core Skills:</strong>
              <br />
              Next.js, React.js, Node.js, MongoDB
            </p>

            <p className='my-2 text-left'>
              <strong style={{ color: "#ffff00" }}>Hobbies:</strong>
              <br />
              Beyond the world of coding, I find joy in the simplicity of life. In my free time, you'll often find me enjoying the tranquility of swimming, immersing myself in captivating movies and series, and cherishing moments spent with my close circle.
            </p>

            <p className='text-left'>
              Let's connect and explore the possibilities together!
            </p>
          </div>

          <div className='md:col-span-1 lg:col-span-1 flex items-center justify-center my-8'>
            <Image
              src={about}
              width={500}
              height={500}
              alt="About Image"
              layout="fixed"
              objectFit="cover"
              objectPosition="center center"
              className='about-image rounded-full mx-auto md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'  // Add rounded styling if needed
            />
            {/* Additional content or styling for the image */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;