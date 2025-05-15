import React from 'react';
import contactImage from '../../assets/contact.jpg';
import { FaRegAddressCard } from 'react-icons/fa';
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Footer from '../../components/Footer';

const Contact = () => {


    return (
        <div >
            <div className='' data-aos="zoom-in">
                <img src={contactImage} alt="" />
            </div>

            <div className='mt-8 mb-10' data-aos="zoom-in">
                <h1 className='text-xl text-center font-bold text-gray-600'>Contact us if you need our services. We will be happy to make your events memorable!</h1>
            </div>

            <div className='flex justify-center flex-col lg:flex-row px-2 lg:px-0 gap-7 items-center'>
                <div className='space-y-2 bg-[#01cb93]  px-20 rounded-tl-3xl rounded-br-3xl py-12 text-white' data-aos="zoom-in">
                    <div className=' flex justify-end'>
                        <FaRegAddressCard size={35} />
                    </div>
                    <h2 className='font-bold'>Address</h2>
                    <h1 className='text-xl'>38-2 Deari, Sylhet</h1>
                </div>
                <div className='space-y-2 bg-[#0170cb]  px-20 rounded-tl-3xl rounded-br-3xl py-12 text-white' data-aos="zoom-in">
                    <div className=' flex justify-end'>
                        <BsTelephoneInbound size={35} />
                    </div>
                    <h2 className='font-bold'>Phone</h2>
                    <h1 className='text-xl'>(+88) 01826339098</h1>
                </div>
                <div className='space-y-2 bg-[#555555]  px-20 rounded-tl-3xl rounded-br-3xl py-12 text-white' data-aos="zoom-in">
                    <div className=' flex justify-end'>
                        <AiOutlineMail size={35} />
                    </div>
                    <h2 className='font-bold'>Email</h2>
                    <h1 className='text-xl'>anondo554@gmail.com</h1>
                </div>
            </div>


            {/* contact */}

            <div className='mt-10'>
                <div className="relative  flex flex-col justify-center overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-xl">
                        <div className="space-y-14">
                            <h1 className="text-lg font-bold" data-aos="zoom-in"> MESSAGE FORM</h1>
                            <div >

                                <input type="text" placeholder="Name" className="w-full  outline-none border-b-2 border-primary  px-1 py-2" data-aos="zoom-in" />
                            </div>
                            <div>

                                <input type="text" placeholder="Email Address" className="w-full  outline-none border-b-2 border-primary  px-1 py-2" data-aos="zoom-in" />
                            </div>
                            <div>

                                <input type="text" placeholder="Your Message"
                                    className="w-full  outline-none border-b-2 border-primary  px-1 py-2" data-aos="zoom-in" />
                            </div>

                            <div>
                                <button className="btn capitalize btn-block btn-primary" data-aos="zoom-in">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <Footer />
            </div>

        </div>

    );
};

export default Contact;
