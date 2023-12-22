import React from 'react';
import back from '../assets/footer_back2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// 171515
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className=' w-[100%] h-72 relative text-white  flex flex-col  items-center justify-center'>
        {/* <img src={wallpaper} className=' rotate-180 absolute -z-10 w-full top-0 left-0' alt="" /> */}
        {/* <div className='absolute -z-10 w-full top-0 left-0 h-full bg-black'></div> */}
        <img src={back} className='absolute -z-10 w-[100%] top-0 left-0 h-full ' alt="footer_background" />
        <div className='text-center py-7'>
            
                <h2 className='text-white text-2xl font-bold mb-6'>Mahmoud Amin</h2>
                <p className='mb-3'>You Can Contact Us through</p>
                <ul className='mb-6 flex  justify-center list-none'>
                    {/* Githup icon */}
                    <li className='mr-5'>
                        <a href="https://github.com/Mahmoudamin11" target='_blank'><FontAwesomeIcon icon={faGithub} size="xl" /></a>
                    </li>
                    {/* LinkedIn icon */}
                    <li>
                        <a href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                    </li>
                </ul>
                <p>Copyright <span className='text-white opacity-[20%] transition-all duration-300 hover:text-gray-400 hover:opacity-[100%]'>@{year}</span> <span className='text-white '> Mahmoud Amin</span></p>
            
        </div>
    </footer>
  );
}

export default Footer;