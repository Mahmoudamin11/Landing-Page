
import { useEffect, useState} from 'react';
import js from '../assets/JS.png';
import css from '../assets/CSS.png';
import html from '../assets/HTML.png';
import tailwind from '../assets/Tailwind.png';
import react from '../assets/React.png';

const Logos = () => {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => { 
    if (window.innerWidth < 640) { 
      setHeight(1260);
    } 
  else if (window.innerWidth >= 640 && window.innerWidth < 750) { 
    setHeight(1400);
  }
  else if (window.innerWidth >= 750) { 
    setHeight(1400);
  }
  else if (window.innerWidth >= 1285) { 
    setHeight(1600);
  }
  }, []);
  
  window.addEventListener('resize', () => { 
    if (window.innerWidth < 640) { 
          setHeight(1260);
        } 
    else if (window.innerWidth >= 640 && window.innerWidth < 750) { 
      setHeight(1400);
    }
    else if (window.innerWidth >= 750 && window.innerWidth < 1285) { 
      setHeight(1400);
    }
    else if (window.innerWidth >= 1285) { 
      setHeight(1600);
    }
  });

  window.addEventListener('scroll', () => {
      if (scrollY >= height) { 
        setScroll(1);
      } else { 
        setScroll(0);
      }
  });

  

  return (
    // flex flex-col items-center  justify-around
    <section className='m-auto w-10/12 mb-[20%] flex flex-col items-center justify-center'>
        <h1 className='m-auto text-center mb-7 leading-normal relative font-bold text-4xl lg:text-6xl xl:text-7xl lg:w-3/4 text-black  '>We Use These To build Our <span className='text-gray-400'>Arts</span></h1>

        <div id="logos" className='flex flex-col justify-center items-center xl:mt-2'>
            <div className='flex mb-7 justify-center w-full'>
                <div className={scroll == 1 ? 'icon  opacity-1 bg-white mr-5 xl:mr-10 shadow-xl transition-logo blur-0 delay-[100ms]  duration-300 hover:shadow-img hover:animate-pulse hover:transition-shadow hover:duration-500  hover:delay-0 w-[100px] h-[100px] xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md' : 'icon  opacity-0 transition-all  duration-500 bg-white mr-5 xl:mr-10 shadow-xl  hover:shadow-img w-[100px] h-[100px]  xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md blur-lg transform -translate-x-[100%] delay-[100ms]'}><img src={html} alt="" /></div>
                <div className={scroll == 1 ? 'icon  opacity-1 bg-white mr-5 xl:mr-10 shadow-xl transition-logo blur-0 delay-[300ms] duration-300 hover:shadow-img hover:animate-pulse hover:transition-shadow hover:duration-500  hover:delay-0 w-[100px] h-[100px] xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md' : 'icon  opacity-0 transition-all   duration-500 bg-white mr-5 xl:mr-10 shadow-xl  hover:shadow-img w-[100px] h-[100px]  xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md blur-lg transform -translate-x-[100%] delay-[300ms]'}><img src={css} alt="" /></div>
                <div className={scroll == 1 ? 'icon  opacity-1 bg-white  shadow-xl transition-logo blur-0 delay-[500ms] duration-300 hover:shadow-img hover:transition-shadow hover:animate-pulse  hover:duration-500  hover:delay-0 w-[100px] h-[100px] xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md' : 'icon  opacity-0 transition-all  duration-500 bg-white shadow-xl  hover:shadow-img w-[100px] h-[100px] xl:w-[110px] x l:h-[110px] flex items-center justify-center p-5 rounded-md blur-lg transform -translate-x-[100%] delay-[500ms]'}><img src={js} alt="" /></div>
            </div>
            <div className='flex justify-center w-full'>
                <div className={scroll == 1 ? 'icon  opacity-1 bg-white mr-5 xl:mr-10 shadow-xl transition-logo blur-0 delay-[700ms] duration-300 hover:shadow-img hover:animate-pulse hover:transition-shadow hover:duration-500  hover:delay-0 w-[100px] h-[100px] xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md' : 'icon  opacity-0 transition-all  duration-500 bg-white mr-5 xl:mr-10 shadow-xl  hover:shadow-img w-[100px] h-[100px]  xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md blur-lg transform -translate-x-[100%] delay-[700ms]'}><img src={tailwind} alt="" /></div>
                <div className={scroll == 1 ? 'icon  opacity-1 bg-white  shadow-xl transition-logo blur-0 delay-[900ms] duration-300 hover:shadow-img hover:transition-shadow hover:animate-pulse hover:duration-500  hover:delay-0 w-[100px] h-[100px] xl:w-[110px] xl:h-[110px] flex items-center justify-center p-5 rounded-md' : 'icon  opacity-0 transition-all  duration-500 bg-white  shadow-xl  hover:shadow-img w-[100px] h-[100px] xl:w-[110px]  xl:h-[110px] flex items-center justify-center p-5 rounded-md blur-lg transform -translate-x-[100%] delay-[900ms]'}><img src={react} alt="" /></div>
            </div> 
        </div>
    </section>
  );
}

export default Logos;