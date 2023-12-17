"use client"
import React from 'react'
import {hero} from '../images/index';
import Image from 'next/image';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
const Hero = () => {
    useEffect(() => {
        let typewriter;
        //setScreenWidth(window.innerWidth);
        // Check if the element with id 'typewriter' exists
        const targetElement = document.getElementById('typewriter');

        if (targetElement) {
            typewriter = new Typewriter(targetElement, {
                strings: ["A Software Developer", "A Freelancer", "A Full Stack Developer"],
                autoStart: true,
                loop: true,
            });
        }

        return () => {
            // Cleanup the typewriter instance if it's defined
            if (typewriter) {
                typewriter.stop();
            }
        };
    }, []);
    return (
        <div class="font-Merriweather relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
            <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                <div class="text-left">
                    <h3 className="leading-tight lg:text-3xl sm:text-5xl md:text-6xl" style={{ color: '#ffff00' }}>
                        Hi! I'm
                    </h3>
                    <h2 className='mt-2 text-white text-4xl lg:text-6xl font-bold'>RTR</h2>
                    <p className='text-3xl sm:text-4xl lg:text-4xl mt-1' id="typewriter" style={{ color: "#ffff00" }}></p>
                    <p className='text-4xl sm:text-4xl lg:text-4xl mt-1' style={{ color: 'white' }}>I bring your dream website to life.</p>
                    <p className='text-lg mt-2' style={{ color: 'white' }}>I'm a web developer with 2+ years of experience, I specialize in both frontend and backend development. I am passionate about crafting robust and user-friendly web solutions. If you are seeking a skilled web developer, feel free to reach out to me. I look forward to bringing your projects to life!</p>
                    <div className="mb-4 mt-2 flex sm:items-center lg:items-left">
                        <div className="inline-flex transition duration-150 ease-in-out" role="group">
                            <a
                                className="rounded-l custom-radius px-8 py-4 text-lg font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-600 text-700 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700"
                                style={{ backgroundColor: '#ffff00', color: 'black', marginRight: '20px' }}
                                data-te-ripple-init
                                href='mailto:codworldrtr7@gmail.com'
                                data-te-ripple-color="light"
                            >
                                Mail
                            </a>

                            <a
                                className="rounded-r custom-radius px-8 py-4 text-lg font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700"
                                data-te-ripple-init
                                style={{ backgroundColor: '#ffff00', color: 'black' }}
                                href='https://twitter.com/raghu_rtr'
                                onClick={() => handleTwitter()}
                                data-te-ripple-color="light"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center py-5 md:w-3/4 md:pb-20 md:pt-10 md:pl-10">
                <div class="relative w-full p-3 rounded  md:p-8">
                    <div class="rounded-lg bg-black text-black w-full">
                        <Image src={hero} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
