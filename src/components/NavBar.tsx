import {useState} from 'react';
import moon_logo from '../assets/moon_logo_larger.png';

const Navbar = () => {
    const [burger, setBurger] = useState('right');
    const [list, setList] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => { 
        setWidth(window.innerWidth);
    })
    const burgerSwitch = () => { 
        if (burger == 'right') { 
            setBurger('left');
        }
        else { 
            setBurger('right');
        }

        if(list)
            setList(false);
        else 
            setList(true);
    };
  return (
    <nav className='flex items-center m-auto justify-between pt-7 w-11/12'>
        <div id="logo" className='' >
            <p className='tracking-wider font-bold mr-1 md:mr-2 inline text-2xl md:text-4xl'>Mahm</p>
            <img className=' inline w-[15px] md:w-[22px] -mt-[6px] md:mt-[-11px] animate-rotate' src={moon_logo} alt="" />
            <p className='tracking-wider font-bold ml-1 md:ml-2 inline text-2xl md:text-4xl'>ud</p>
        </div>
        {/* this burger appears only in phone */}
        {width < 600 && <div id="burger"  className='flex cursor-pointer flex-col h-full justify-center items-center relative'>
            <span onClick={() => burgerSwitch()} className='w-5 h-1 mb-1 rounded-sm bg-black'></span>
            <span onClick={() => burgerSwitch()} className={burger == 'right' ? 'w-5 h-1 mb-1 rounded-sm bg-black transform translate-x-1' : 'w-5 h-1 mb-1 rounded-sm bg-black transform -translate-x-1'}></span>
            <span onClick={() => burgerSwitch()} className='w-5 h-1  rounded-sm bg-black'></span>
            
            <ul className={list ? 'list-none py-3 pl-5 items  flex flex-col absolute w-40 h-56 bg-white shadow-img rounded-lg top-[150%] -right-[15%] transform translate-y-0 opacity-1 z-50 transition-transform duration-300' : 'list-none py-3 pl-5 items  flex flex-col absolute w-40 h-56 bg-white shadow-img rounded-lg top-[200%] -right-[15%] transform -translate-y-[25%] opacity-0 transition-all duration-300 -z-30'}>
                <li className='grow text-gray-400 flex items-center font-bold transition-all duration-300 hover:text-black hover:pl-3'>Services</li>
                <li className='grow text-gray-400 flex items-center font-bold transition-all duration-300 hover:text-black hover:pl-3'>Categories</li>
                <li className='grow text-gray-400 flex items-center font-bold transition-all duration-300 hover:text-black hover:pl-3'>Reviews</li>
                <li className='grow text-gray-400 flex items-center font-bold transition-all duration-300 hover:text-black hover:pl-3'>Contact</li>
                <li className='grow text-gray-400 flex items-center font-bold transition-all duration-300 hover:text-black hover:pl-3'>About</li>
            </ul>
            
        </div>}
        {width >= 600 && <ul className='list-none items flex '>
                <li className='text-gray-400 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 flex items-center font-bold hover:text-black mr-5'>Services</li>
                <li className='text-gray-400 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 flex items-center font-bold hover:text-black mr-5'>Categories</li>
                <li className='text-gray-400 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 flex items-center font-bold hover:text-black mr-5'>Reviews</li>
                <li className='text-gray-400 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 flex items-center font-bold hover:text-black mr-5'>Contact</li>
                <li className='text-gray-400 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 flex items-center font-bold hover:text-black '>About</li>
            </ul>}
    </nav>
  )
}

export default Navbar;