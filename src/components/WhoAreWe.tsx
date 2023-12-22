import { useState, useEffect } from 'react';
import mountain from '../assets/long-mountain-min.jpg';
import tree from '../assets/white_tree-min.jpg';
const WhoAreWe = () => { // 1210
  const [img, setImg] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [height, setHeight] = useState(0);
  const [rower, setRower] = useState(false); // boolean => true => it will be displayed as rows and if false => will be displayed as columns
  const switchImgs = () => { 
    if (img == 0)
      setImg(1);
    else 
      setImg(0);
  }

  useEffect(() => { 
    if (window.innerWidth < 640) { 
      setHeight(800);
      setRower(false);
    } 
    else if (window.innerWidth >= 640 && window.innerWidth < 750) { 
      setHeight(800);
      setRower(false);
    }
    else if (window.innerWidth >= 750 && window.innerWidth < 1080) { 
      setHeight(800);
      setRower(false);
    }
    else if (window.innerWidth >= 1080) { 
      setHeight(550)
      setRower(true);
    }
  }, []);
  
  window.addEventListener('resize', () => { 
    if (window.innerWidth < 640) { 
      setHeight(800);
      setRower(false);
        } 
        else if (window.innerWidth >= 640 && window.innerWidth < 750) { 
          setHeight(800);
          setRower(false);
        }
        else if (window.innerWidth >= 750 && window.innerWidth < 1080) { 
          setHeight(800);
          setRower(false);
        }
        else if (window.innerWidth >= 1080) { 
          setHeight(550);
          setRower(true);
        }
        // else if (window.innerWidth >= 1080) { 
        //   // setHeight()
        //   setRower(true);
        // }
  });

  window.addEventListener('scroll', () => {
      if (scrollY >= height) { 
        setScroll(true);
      } else { 
        setScroll(false);
      }
  });

  return (
    <div className="flex flex-col lg:flex-row items-center m-auto w-11/12  mt-[150%] lg:mt-0  sm:mt-20 mb-[20%]">
        <article className='lg:mr-14 lg:flex lg:flex-col  lg:items-start lg:mt-[10%]'>
            <h1 className="w-fit relative mx-auto lg:mx-0 before:content-[''] before:bg-black before:absolute before:w-[51%] before:h-[2px] before:rounded-md before:top-full before:-left-[1000%]  before:hover:left-0 before:transition-all before:duration-300 before:hover:top-full  before:hover:bg-gray-400 after:content-[''] after:bg-black after:absolute after:w-1/2 after:h-[2px] after:rounded-md after:top-full  after:-right-[1000%] after:hover:right-0 after:transition-all after:duration-300 after:hover:top-full  after:hover:bg-gray-400 "><span className="font-bold text-4xl lg:text-6xl xl:text-7xl text-black  ">Who Are We</span></h1>
            <p className="my-3 lg:my-5 sm:my-2  lg:text-xl  xl:w-10/12 lg:text-left text-center  transition-all duration-300 hover:text-black  text-gray-400">We are the frontend mentors. We are creating appropriate designs  by writing simple, easy and understood code that leads to amazing websites.</p>
        </article>
      { window.innerWidth < 1024 && <div className='flex flex-col items-center'>
        <div className='flex flex-col w-[50%]  sm:w-[40%] md:w-[30%]  min-[1020px]:w-[30%] min-[1070px]:w-[30%] mt-5 mb-32 sm:mb-36 relative items-center group'>
          <img src={tree} className={img == 0 && scroll ? 'transition-all duration-500 transform translate-x-0 ml-[30%] rounded-md ' : img == 1 && scroll ? ' transition-all duration-500 transform translate-x-0 absolute -z-10 top-[21%] -right-[12%] rounded-md' : img == 0 && !scroll ? ' transition-all duration-500 transform translate-x-[1000%] ml-[30%] rounded-md' : ' transition-all duration-500 transform -translate-x-[1000%] absolute -z-10 top-[21%] -right-[12%] rounded-md'} alt="" />
          <img src={mountain} className={img == 0 && scroll  ? 'transition-all duration-500 transform translate-x-0 absolute -z-10 top-[21%] -left-[12%] rounded-md' : img == 1 && scroll ? 'transition-all duration-500 transform translate-x-0 mr-[30%] rounded-md' : img == 0 && !scroll ? ' transition-all duration-500 transform -translate-x-[1000%] absolute -z-10 top-[21%] -left-[12%] rounded-md' : ' transition-all duration-500 transform translate-x-[1000%] mr-[30%] rounded-md' } alt="" />
        </div><button onClick={() => switchImgs()} className='bg-black shadow-lg text-white border-[1px] border-solid border-white hover:bg-white hover:text-black  px-4 py-2 rounded-md transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-black'>Switch</button>
      </div>
      }

    {window.innerWidth >= 1024 && 
      <div className='flex flex-col w-[65%] xl:w-[45%] xl:mr-10 group relative mt-[10%]'>
        <img src={tree} className={img == 0 && scroll ? 'transition-all duration-500 transform translate-x-0 ml-[30%] rounded-md ' : img == 1 && scroll ? ' transition-all w-[70%] -mt-10 mr-10 duration-500 transform translate-x-0 absolute -z-10 top-[21%] -right-[12%] rounded-md' : img == 0 && !scroll ? ' transition-all w-[70%] duration-500 transform translate-x-[1000%] ml-[30%] rounded-md' : ' transition-all duration-500 transform -translate-x-[1000%] absolute -z-10 top-[21%] -right-[12%] rounded-md'} alt="" />
        <img src={mountain} className={img == 0 && scroll  ? 'w-[70%] transition-all duration-500 transform translate-x-0 absolute -z-10 top-[14%] left-0 rounded-md' : img == 1 && scroll ? 'transition-all w-[70%] duration-500 transform translate-x-0 mr-[30%] rounded-md' : img == 0 && !scroll ? ' transition-all duration-500 transform -translate-x-[1000%] absolute -z-10 top-[21%] -left-[12%] rounded-md' : ' transition-all duration-500 transform translate-x-[1000%] mr-[30%] rounded-md w-[70%]' } alt="" />
        <button onClick={() => switchImgs()} className='bg-black mt-32 w-3/4 mx-auto shadow-lg text-white border-[1px] border-solid border-white hover:bg-white hover:text-black  px-4 py-2 rounded-md transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-black'>Switch</button>
      </div>
    }
    </div>
  );
}

export default WhoAreWe;