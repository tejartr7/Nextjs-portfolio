'use client'
import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from "react-icons/fa6";
import Icon from '../techstack/Icon';

const Contact = () => {
    return (
        <section id="contact">
            <div className="flex flex-col items-center gap-4 mx-4 lg:mx-40 mt-6 mb-8 text-white" style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
                <h1 className="text-4xl m-2 font-bold" style={{ color: '#ffff00' }}>Contact me</h1>
                <div className="flex gap-4">
                    <a className="text-yellow-500" href="mailto:codworldrtr7@gmail.com" target='_blank'>
                        <Icon>
                            <IoIosMail />
                        </Icon>
                    </a>
                    <a className="text-yellow-500" href='https://twitter.com/raghu_rtr' target='_blank'>
                        <Icon>
                            <FaXTwitter />
                        </Icon>
                    </a>
                </div>
                <p className="text-500" style={{ color: '#ffff00' }}>&#169; copyright-RTR</p>
            </div>
        </section>
    );
};

export default Contact;
