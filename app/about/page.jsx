import React from 'react';
import Header from '../../Components/Header';
import Image from 'next/image';
import { about } from '../images/index'
const About = () => {
  return (
    <section id='about' className='font-Poppins'>
      {/*<hr className="border-t-10 border-green-500" />*/}
      <div className='font-sans gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8' style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
        {/* Content of the About section goes here */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-2 text-left text-xl'>
            <h2 className='text-left text-5xl my-4 py-2 font-Merriweather ' style={{ color: '#ffff00' }}>About me</h2>
            <p className='text-left'>
              Discover the future of web development with RTR, where innovation meets craftsmanship. I harness the power of full-stack technology to create robust, intuitive, and adaptive web solutions. My mission is to transform your challenges into cutting-edge experiences that leave a lasting impact.

              With over 2 years of industry expertise in technologies like Next.js, React, Node.js, and MongoDB, I'm dedicated to broadening my technical horizons and bringing your visionary projects to life.

              Let's delve into a partnership that redefines digital excellence. Pushing boundaries is not just a task for me – it's the passion that fuels constant learning and growth. Together, we’ll build a web presence that stands out.
            </p>
            <p className='my-2 text-left'>
              <strong className='font-Merriweather' style={{ color: "#ffff00" }}>Core Skills:</strong>
              <br />
              Next.js, React.js, Node.js, MongoDB
            </p>

            <p className='my-2 text-left'>
              <strong className='font-Merriweather' style={{ color: "#ffff00" }}>Hobbies:</strong>
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