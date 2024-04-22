import React from 'react';

function Footer() {
    return (
        <div className="bg-gray-900">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3"> Contribute To Our Research </h3>
                    <p> Get In Touch With Us </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="w-7 md:w-8" alt="Google Play Store" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Contact Us On</p>
                                <p className="text-sm md:text-base"> GMail </p>
                            </div>
                        </div>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                            <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" className="w-7 md:w-8 rounded-2xl" alt="Apple Store" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Link to </p>
                                <p className="text-sm md:text-base"> GitHub </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Major Project Developed By Subhash And Mayur </p>
                    <div className="order-1 md:order-2">
                        <span className="px-2">About us</span>
                        <span className="px-2 border-l">Contact us</span>
                        <span className="px-2 border-l">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
